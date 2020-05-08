import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  hidePassword = true;
  constructor(public dialogRef: MatDialogRef<LoginModalComponent>) { 

  }

  ngOnInit(): void {
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

  toggleVisibility(event: Event){
    event.preventDefault();
    this.hidePassword = !this.hidePassword;
  }

}
