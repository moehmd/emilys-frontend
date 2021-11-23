import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToasterService } from '../core/Toaster/toaster.service';
import { SendFormsService } from '../send-forms.service';
import { MemberhsipDialogComponent } from './memberhsip-dialog/memberhsip-dialog.component';
import { Proxy } from '../core/services/proxy.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {
  @Input() Type: string;
 memberData: FormGroup;

  constructor(
    public routes: Router,
    public http: HttpClientModule,
    public DataService: Proxy,
    private fb: FormBuilder,
    private toastrService : ToasterService
  ) { }

  ngOnInit(): void {
    this.memberData = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Address : ['', Validators.required],
      PostalCode: ['', Validators.required],
      City: ['', Validators.required],
      Type: ['', Validators.required],
      email: ['', Validators.email],
    });

  }
  test() {
  }

  onSubmit() {

    this.DataService.MembershipForm(this.memberData.value).subscribe(
      (data) => {
      data = this.memberData.value;
      this.toastrService.showSuccess("Merci de votre adhésion! Le nombre fait la force! ");
      },

      (error) => {
        this.toastrService.showWarning("Désolé, veuillez réessayer.");
      }
    );
  }


  getTypes() {
    return [
      { id: '1', name: 'Adhésion' },
      { id: '2', name: 'Renouvellement' },

    ];
  }

  getWay(){
    return [
      { id: '1', name: 'Bank ID' },
      { id: '2', name: 'Location' },
    ];
  }
}
