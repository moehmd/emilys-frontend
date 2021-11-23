import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation-dialog',
  templateUrl: './donation-dialog.component.html',
  styleUrls: ['./donation-dialog.component.scss']
})
export class DonationDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DonationDialogComponent>, private router: Router) { }

  ngOnInit() {
  }
  closeDialog(response) {
    this.dialogRef.close(response);
  }

  GoToHome(){
    this.router.navigate(['']);
  }
}

