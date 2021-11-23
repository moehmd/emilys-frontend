import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './proxy.service';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { MatSnackBar } from '@angular/material';

@Injectable()
export class CommonService {
  // public APIUrl = 'http://localhost:5000/api/Data';
  public APIUrl = 'https://webapi-cq3.conveyor.cloud/api/Data';

  public ticket = '';
  private isLoading: BehaviorSubject<boolean>;
  Is_Logged_In = new BehaviorSubject<boolean>(false);
  UI_Direction = new BehaviorSubject<string>('ltr');
  User: User[]=[];
 Username: string;

  //AZURE_BLOB_IMAGES_CONTAINER =  "";
  //constructor(private snackBar: MatSnackBar) { }
  constructor(private snackBar: MatSnackBar) {
    this.isLoading = new BehaviorSubject<boolean>(false);
   }

   setValue(newValue): void {
    this.isLoading.next(newValue);
  }

  getValue(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  ShowMessage(message: string, d: number = 6000) {
    this.snackBar.open(message, '', {duration: d});

  }

  Handle_Exception(msg) {
    if ((msg != null) && (msg !== '')) {
      this.ShowMessage(msg , 3000);
    }
  }
}
