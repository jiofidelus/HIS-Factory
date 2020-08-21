import { ConcreteEntity } from "./ConcreteEntity";
import ExamShape from '../shapes/concretes/ExamShape';

export class ExamEntity extends ConcreteEntity{

    addFields(){
        super.addFields();
    }

    createShape(){
        this.shape = new ExamShape()
    }
}