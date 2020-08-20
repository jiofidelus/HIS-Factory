import { Shape } from './Shape';

export class ElementShape extends Shape{
    

    constructor(){
        super({})
        this.type = "element"
        this.name = ElementShape.name

        
    }
}