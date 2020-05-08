import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon'




@NgModule({
    imports: [
        MatButtonModule, 
        MatButtonModule,
        MatToolbarModule, 
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule, 
        MatButtonModule, 
        MatToolbarModule, 
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule
    ],
})
export class MaterialModule{}