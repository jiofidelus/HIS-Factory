import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegisterModalComponent>) { 

  }

  ngOnInit(): void {
  }

  onNoClick(): void{
    this.dialogRef.close();
  }
}
