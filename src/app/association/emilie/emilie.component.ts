import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Location } from "@angular/common";

import {
  Proxy,
  Section,
  Params_Get_Section_By_SECTION_ID,
  Params_Delete_Uploaded_file,
} from "../../core/services/proxy.service";
import { CommonService } from '../../core/services/common.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { PDFProgressData } from 'ng2-pdf-viewer';
@Component({
  selector: 'app-emilie',
  templateUrl: './emilie.component.html',
  styleUrls: ['./emilie.component.scss']
})
export class EmilieComponent implements OnInit {
  pdfSrc : string = "";

  Get_Section_By_SECTION_ID_Subscription = new Subscription();
  searchModel: Params_Get_Section_By_SECTION_ID = new Params_Get_Section_By_SECTION_ID();
  data: Section[] = [];
  uploadImage: any[] = [];
  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService,
    private dialog: MatDialog,
    private location: Location,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }


  fetchData() {
    this.spinner.show();
    this.searchModel.SECTION_ID = 3;
    this.Get_Section_By_SECTION_ID_Subscription = this.proxy
      .Get_Section_By_SECTION_ID(this.searchModel)
      .subscribe((result) => {
        if (result != null) {
          this.uploadImage.push(result);
          this.uploadImage.forEach((element: any) => {
            element.MyURL =
              this.CmSvc.APIUrl +
              "/Upload_Image?REL_ENTITY=[TBL_SECTION]&REL_FIELD=SECTION_IMAGE&REL_KEY=" +
              element.SECTION_ID;
            if (element.My_Uploaded_files != null) {
              element.MyUploadedImages = [];
              element.My_Uploaded_files.forEach((x) => {
                this.pdfSrc = x.My_URL;
                element.MyUploadedImages.push(x.My_URL);
              });
            }
            this.data.push(element);
            this.CmSvc.setValue(false);
          });
        }
      });
    }

    onProgress(progressData : PDFProgressData){
      if(progressData.loaded == progressData.total){
       this.spinner.hide();
      }
     }

}

