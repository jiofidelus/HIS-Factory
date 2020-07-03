import { Shape } from '../base/Shape';
import { FieldEntity } from '@/models/database/fields/FieldEntity';
import { TextField } from '@/models/database/fields/TextField';

export class ConcreteEntity {
    shape!: Shape
    fields: FieldEntity[] = []

    constructor(){
        this.addFields()
    }
    
    public get type() : string {
        return this.constructor.name
    }

    public addFields(){
        this.fields.push(new TextField("identifier", "id", true, true))
    }
    
}