import { FieldEntity } from '@/models/database/fields/FieldEntity';
import { TextField } from '@/models/database/fields/TextField';
import { ElementShape } from '../shapes/base/ElementShape';
import { Shape } from '../shapes/base/Shape';
import { PatientShape } from '../shapes/concretes';
import { joint } from '@/plugins/rappid';

export class ConcreteEntity {
    shape!: ElementShape
    fields: FieldEntity[] = []

    constructor(){
        this.addFields()
        this.createShape()
    }
    
    public get type() : string {
        return this.constructor.name
    }

    protected addFields(){
        this.fields.push(new TextField("identifier", "id", true, true))
    }
    
    protected createShape(){

    }


    
}