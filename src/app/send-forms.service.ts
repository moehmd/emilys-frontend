
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class SendFormsService {
  pdfSrc = "http://localhost:5000/api/Data/Get_PDF";
BaseUrL = 'https://api.association-emilys.com/api/Data';
  url = 'https://api.association-emilys.com/Data/Data';
   memberURL = 'https://api.association-emilys.com/api/Data/memberData';
   donateURL = 'https://api.association-emilys.com/api/Data/Donations';
dateURL = 'http://localhost:5000/api/Data/GetDate';

    constructor (private ApiCaller : HttpClient ) { }

    sendData(items): Observable<any>{

      return this.ApiCaller.post(this.url, items, {
        headers: { 'Content-type': 'application/json;charset=utf-8' }
      });

    }

    sendMembersData(items): Observable<any>{

      return this.ApiCaller.post(this.memberURL, items, {
        headers: { 'Content-type': 'application/json;charset=utf-8' }
      })

    }

    sendDonationsData(items): Observable<any>{

      return this.ApiCaller.post(this.donateURL, items, {
        headers: { 'Content-type': 'application/json;charset=utf-8' }
      })

    }

    Test_PDF(): Observable<any>{

      return this.ApiCaller.get(this.pdfSrc, {
        headers: { 'Content-type': 'application/pdf; charset=utf-8' }
      })

    }


}
