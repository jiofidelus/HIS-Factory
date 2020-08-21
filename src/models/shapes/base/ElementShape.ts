import { Shape } from './Shape';

export class ElementShape extends Shape{
    

    constructor(){
        super({})
        this.type = "element"
        this.name = ElementShape.name

        this.createShape()
        this.applySelectedStyle()
    }

    applyUnselectedStyle(){
        this.root.attr('body/stroke', "#555")
        this.root.attr('label/fill', "#555")
    }

    applySelectedStyle(){
        this.root.attr('body/stroke', "dodgerblue")
        this.root.attr('label/fill', "dodgerblue")
    }
}