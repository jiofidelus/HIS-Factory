import { Component, OnInit } from '@angular/core';
import { LoginModalComponent } from 'src/app/components/login-modal/login-modal.component';
import { RegisterModalComponent } from 'src/app/components/register-modal/register-modal.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  appTitle: string  = "HISQuery";
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLoginModal(): void{
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: "400px"
    })
  }

  openRegisterModal(): void{
    const dialogRef = this.dialog.open(RegisterModalComponent, {
      width: "400px"
    })
  }

}
