import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContactDialogComponent>, private router : Router) { }
  ngOnInit(): void {
  }
  closeDialog(response) {
    this.dialogRef.close(response);
  }

  GoToHome(){
    this.router.navigate(['']);
  }
}
