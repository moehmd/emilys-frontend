import { Proxy } from 'src/app/core/services/proxy.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToasterService } from '../core/Toaster/toaster.service';
import { NousContacterDialogComponent } from './nous-contacter-dialog/nous-contacter-dialog.component';

@Component({
  selector: 'app-nous-contacter',
  templateUrl: './nous-contacter.component.html',
  styleUrls: ['./nous-contacter.component.scss']
})
export class NousContacterComponent implements OnInit {
  userData: FormGroup;

    submitted: boolean;

    title = "Example Angular 8 Material Dialog";

    constructor(private DataService: Proxy,private toastrService : ToasterService ,private fb: FormBuilder, private matDialog: MatDialog) {
      this.submitted = false;
  }

    ngOnInit(): void {
      this.submitted = false;
      this.userData = this.fb.group({
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        email : ['', Validators.email],
        HelpOrExp: ['', Validators.required],
        msgUser: ['', Validators.required]
      });

    }
    openDialog(): void {
      this.matDialog.open(NousContacterDialogComponent, {
        panelClass: 'custom-dialog-container' });
    }

  sendDataAsFormBody() {
  this.DataService.ContactUsForm(this.userData.value).subscribe(
    data => {
      data = this.userData.value;
    this.toastrService.showSuccess("Merci ! Votre e-mail a bien été reçu.");
      },
      error => {
        this.toastrService.showWarning("Désolé, veuillez réessayer.");
      }
    );
  }
  }
