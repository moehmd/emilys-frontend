import { Component , OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from './core/services/common.service';
import {Proxy} from './core/services/proxy.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  Show_Logout$: Subject<boolean>;
  ui_direction = 'ltr';
  isLoading : boolean = true;
  constructor
    (
      private proxy: Proxy,
      private CmSvc: CommonService,
      private translate: TranslateService
    ) {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
      this.CmSvc.UI_Direction.subscribe(x => this.ui_direction = x)
    }
  ngOnInit(): void {
    this.Show_Logout$ = this.CmSvc.Is_Logged_In;

  }
onActivate(event) {
    window.scroll(0, 0);
}


}
