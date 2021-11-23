import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './components/front/front.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ComingSoonComponent } from './components/main-menu/coming-soon/coming-soon.component';
import { CopyrightsComponent } from './components/front/copyrights/copyrights.component';
import { CanActivateThisRoute } from './core/Guard/RouterGuard';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './core/Interceptor/interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './core/Material/material.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SendFormsService } from './send-forms.service';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { FixedButtonComponent } from './fixed-button/fixed-button.component';
import { Proxy } from './core/services/proxy.service';
import { CommonService } from './core/services/common.service';
import { ToastrModule } from 'ngx-toastr';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    MainMenuComponent,
    CopyrightsComponent,
    ComingSoonComponent,
    ContactDialogComponent,
    LoaderComponent,
    NavigationMenuComponent,
    FixedButtonComponent,
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DemoMaterialModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  ToastrModule.forRoot(
    {
      timeOut: 5000,
      positionClass: 'toast-top-right',
      closeButton: true
    }
  )
  ],

  providers: [
   SendFormsService,
   Proxy,
            CommonService,
            CanActivateThisRoute,
            {
              provide: HTTP_INTERCEPTORS,
              useClass: MyHttpInterceptor,
              multi: true
            }
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
