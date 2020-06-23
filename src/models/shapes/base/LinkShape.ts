import { Shape } from './Shape';
import { ElementShape } from './ElementShape';

export class LinkShape extends Shape{

    public leftElement!: ElementShape
    public rightElement!: ElementShape
    constructor(leftElement: ElementShape, rightElement: ElementShape){
        super({})
        this.type = "Link"
        this.name = LinkShape.name
        this.leftElement = leftElement
        this.rightElement = rightElement


    }

}



