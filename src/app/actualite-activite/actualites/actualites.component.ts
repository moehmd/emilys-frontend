import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/core/services/common.service';
import { Params_Get_News_By_Where } from 'src/app/core/services/proxy.service';
import { News, Proxy } from '../../core/services/proxy.service';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {
   Get_News_By_Where_Adv_Subscription = new Subscription();
   searchModel: Params_Get_News_By_Where = new Params_Get_News_By_Where();
  news: News[] = [];
  uploadImage: any[] = [];
  constructor( private proxy: Proxy,
  private CmSvc: CommonService) { }

   ngOnInit(): void {
  }

  fetchData() {
    this.searchModel.OWNER_ID = 1;
    this.Get_News_By_Where_Adv_Subscription = this.proxy
      .Get_News_By_Where_Adv(this.searchModel)
      .subscribe((result) => {
        if (result != null) {
          this.uploadImage.push(result);
          this.uploadImage.forEach((element: any) => {
            element.MyURL =
              this.CmSvc.APIUrl +
              "/Upload_Image?REL_ENTITY=[TBL_SECTION]&REL_FIELD=SECTION_IMAGE&REL_KEY=" +
              element.NEWS_ID;
            if (element.My_Uploaded_files != null) {
              element.MyUploadedImages = [];
              element.My_Uploaded_files.forEach((x) => {
                x.url = x.My_URL;
                element.MyUploadedImages.push(x.My_URL);
              });
            }
            this.news.push(element);
          });
        }
      });
  }
}
