import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nous-contacter-dialog',
  templateUrl: './nous-contacter-dialog.component.html',
  styleUrls: ['./nous-contacter-dialog.component.scss']
})
export class NousContacterDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NousContacterDialogComponent>, private router : Router) { }

  ngOnInit() {
  }
  closeDialog(response) {
    this.dialogRef.close(response);
  }

  GoToHome(){
    this.router.navigate(['']);
  }
}
