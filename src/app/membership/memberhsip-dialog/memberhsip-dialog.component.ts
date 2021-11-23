import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memberhsip-dialog',
  templateUrl: './memberhsip-dialog.component.html',
  styleUrls: ['./memberhsip-dialog.component.scss']
})
export class MemberhsipDialogComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<MemberhsipDialogComponent>, private router : Router ){ }

  ngOnInit() {
  }

  closeDialog(response) {
    this.dialogRef.close(response);
  }

  GoToHome(){
    this.router.navigate(['']);
  }
}


