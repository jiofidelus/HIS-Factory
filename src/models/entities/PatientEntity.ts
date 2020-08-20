import { ConcreteEntity } from './ConcreteEntity';
import { TextField } from '@/models/database/fields/TextField';
import { PatientShape } from '../shapes/concretes';
import Vue from 'vue'

export class PatientEntity extends ConcreteEntity {
    
    

    addFields(){
        super.addFields();
    
        this.fields.push(new TextField("Patient name", "name", true))
    }

    createShape(){
        this.shape = new PatientShape()
    }
}