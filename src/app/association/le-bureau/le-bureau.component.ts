import { Component, EventEmitter, OnInit, ViewChild } from "@angular/core";
import { Observable, of, Subscription } from "rxjs";
import { switchMap } from "rxjs/operators";
import { CommonService } from "src/app/core/services/common.service";
import {
  Params_Get_Team_member_By_OWNER_ID,
  Team_member,
  Proxy,
} from "src/app/core/services/proxy.service";

@Component({
  selector: "app-le-bureau",
  templateUrl: "./le-bureau.component.html",
  styleUrls: ["./le-bureau.component.scss"],
})
export class LeBureauComponent implements OnInit {
  Get_Team_member_By_OWNER_ID_Subscription = new Subscription();
  searchModel: Params_Get_Team_member_By_OWNER_ID = new Params_Get_Team_member_By_OWNER_ID();
  data: Team_member[] = [];

  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }
  ngOnDestroy(): void {
    this.Get_Team_member_By_OWNER_ID_Subscription.unsubscribe();
  }
  fetchData() {
    this.searchModel.OWNER_ID = 1;
    this.Get_Team_member_By_OWNER_ID_Subscription = this.proxy
      .Get_Team_member_By_OWNER_ID(this.searchModel)
      .subscribe((result) => {
        if (result != null) {
          result.forEach((element: any) => {
            element.MyURL =
              this.CmSvc.APIUrl +
              "/Upload_Image?REL_ENTITY=[TBL_TEAM_MEMBER]&REL_FIELD=TEAM_MEMBER_IMAGE&REL_KEY=" +
              element.TEAM_MEMBER_ID;
            if (element.My_Uploaded_files != null) {
              element.MyUploadedImages = [];
              element.My_Uploaded_files.forEach((x) => {
                x.url = x.My_URL;
                element.MyUploadedImages.push(x.My_URL);
              });
            }
            this.data.push(element);
          });
        }
      });
  }
}
