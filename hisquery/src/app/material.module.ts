import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatDialogModule} from '@angular/material/dialog'; 


@NgModule({
    imports: [MatButtonModule, MatButtonModule, MatToolbarModule, MatDialogModule],
    exports: [MatButtonModule, MatButtonModule, MatToolbarModule, MatDialogModule],
})
export class MaterialModule{}