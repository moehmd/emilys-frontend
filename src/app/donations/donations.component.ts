import { DonationDialogComponent } from './donation-dialog/donation-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SendFormsService } from '../send-forms.service';
import { ToasterService } from '../core/Toaster/toaster.service';
import { Proxy } from '../core/services/proxy.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {

  memberData: FormGroup;
    constructor(public http: HttpClientModule, private toastrService: ToasterService,public DataService: Proxy, private fb: FormBuilder,private matDialog: MatDialog) { }

    ngOnInit(): void {
      this.memberData = this.fb.group({
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        Address : ['', Validators.required],
        PostalCode: ['', Validators.required],
        City: ['', Validators.required],
        amount: ['', Validators.required],
        email: ['', Validators.email],
      });
    }

    onSubmit(){
      this.DataService.DonationForm(this.memberData.value).subscribe(
        data => {
          data = this.memberData.value;
          this.toastrService.showSuccess("Merci ! Votre don nous aidera probablement à sauver des vies.");
          },
          error => {
            this.toastrService.showWarning("Désolé, veuillez réessayer.");
          });
    }

    // openDialog(): void {
    //   this.matDialog.open(DonationDialogComponent, {
    //     panelClass: 'custom-dialog-container' });
    // }



  }
