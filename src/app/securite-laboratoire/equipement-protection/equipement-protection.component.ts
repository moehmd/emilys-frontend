import { Component, OnDestroy, OnInit } from '@angular/core';
import { PDFProgressData } from 'ng2-pdf-viewer';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/core/services/common.service';
import { Params_Get_Section_By_SECTION_ID, Section , Proxy } from 'src/app/core/services/proxy.service';

@Component({
  selector: 'app-equipement-protection',
  templateUrl: './equipement-protection.component.html',
  styleUrls: ['./equipement-protection.component.scss']
})
export class EquipementProtectionComponent implements OnInit, OnDestroy {
  pdfSrc: string = "";
  subscriptions: Subscription[] = [];
  getSectionsParams: Params_Get_Section_By_SECTION_ID = new Params_Get_Section_By_SECTION_ID();
  sections: Section[] = [];
  uploadImage: any[] = [];
  constructor(private _proxy: Proxy, private _CmSvc: CommonService, private spinner : NgxSpinnerService) {}

  ngOnInit(): void {
    this.fetchData();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

onProgress(progressData : PDFProgressData){
      if(progressData.loaded == progressData.total){
       this.spinner.hide();
      }
     }
  fetchData() {
    this.spinner.show();
    this.getSectionsParams.SECTION_ID = 13;
    this.subscriptions.push(
      this._proxy
        .Get_Section_By_SECTION_ID(this.getSectionsParams)
        .subscribe((result) => {
          if (result != null) {
            this.uploadImage.push(result);
            this.uploadImage.forEach((element: any) => {
              element.MyURL =
                this._CmSvc.APIUrl +
                "/Upload_Image?REL_ENTITY=[TBL_SECTION]&REL_FIELD=SECTION_IMAGE&REL_KEY=" +
                element.SECTION_ID;
              if (element.My_Uploaded_files != null) {
                element.MyUploadedImages = [];
                element.My_Uploaded_files.forEach((x) => {
                  this.pdfSrc = x.My_URL;
                  element.MyUploadedImages.push(x.My_URL);
                });
              }
              this.sections.push(element);
              this._CmSvc.setValue(false);
            });
          }
        })
    );
  }
}
