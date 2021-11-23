import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router} from '@angular/router';
import { ContactDialogComponent } from 'src/app/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private router : Router, private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  GoToMembers() {
    this.router.navigate(['/Adhésion']);
  }

  GoToDonations(){
    this.router.navigate(['/AvantLesDons'])
  }

  openDialog(): void {
    this.matDialog.open(ContactDialogComponent, {
      panelClass: 'contact-dialog-container' });
  }


}
