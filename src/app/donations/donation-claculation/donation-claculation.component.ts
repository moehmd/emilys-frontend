import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DonationDialogComponent } from '../donation-dialog/donation-dialog.component';

@Component({
  selector: 'app-donation-calculation',
  templateUrl: './donation-claculation.component.html',
  styleUrls: ['./donation-claculation.component.scss']
})
export class DonationClaculationComponent implements OnInit {
  X: number ;
  Y: number;
  Result: number;
  currentBtn: number;
  FirstDiv: boolean;
  SecondtDiv: boolean;
  ThirdDiv: boolean;
  FourthDiv: boolean;
    constructor(private router : Router, private dialogRef: MatDialog) { }

  OpenDialog(){
    const dialog = this.dialogRef.open(DonationDialogComponent,{
      width:'400px'
    })
  }

    ngOnInit(): void {
      this.FirstDiv = false;
      this.SecondtDiv = false;
      this.ThirdDiv = false;
      this.FourthDiv = false;
    }

    onCalc(){
      var roundNb ;
  roundNb =  Math.round((this.Y * 0.34 /100) * 100).toFixed(2);
  this.X = roundNb;
  this.FourthDiv = true;
  this.FirstDiv = false;
  this.SecondtDiv = false;
  this.ThirdDiv = false;

    }

    showDivF(divVal: number){
      var roundNb ;
      this.currentBtn = divVal;
  roundNb =  Math.round((divVal * 0.34 /100) * 100).toFixed(2);
      this.Result = roundNb;
  this.FirstDiv = true;
  this.SecondtDiv = false;
  this.ThirdDiv = false;
  this.FourthDiv = false;
    }

    showDivS(divVal: number){
      var roundNb ;
      this.currentBtn = divVal;
  roundNb =  Math.round((divVal * 0.34 /100) * 100).toFixed(2);
      this.Result = roundNb;
      this.SecondtDiv = true;
      this.FourthDiv = false;
      this.FirstDiv = false;
      this.ThirdDiv = false;
        }

        showDivT(divVal: number){
          var roundNb ;
          this.currentBtn = divVal;
  roundNb =  Math.round((divVal * 0.34 /100) * 100).toFixed(2);
          this.Result = roundNb;
          this.ThirdDiv = true;
          this.FourthDiv = false;
          this.FirstDiv = false;
          this.SecondtDiv = false;
            }
          }
