import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';




@NgModule({
    imports: [
        MatButtonModule, 
        MatButtonModule,
        MatToolbarModule, 
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule
    ],
    exports: [
        MatButtonModule, 
        MatButtonModule, 
        MatToolbarModule, 
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule
    ],
})
export class MaterialModule{}