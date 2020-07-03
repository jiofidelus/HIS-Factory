import { ConcreteEntity } from './ConcreteEntity';
import { TextField } from '@/models/database/fields/TextField';

export class PatientEntity extends ConcreteEntity {
    addFields(){
        super.addFields();
        this.fields.push(new TextField("Patient name", "name", true))
    }
}