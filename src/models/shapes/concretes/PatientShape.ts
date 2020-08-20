import { ElementShape } from "../base/ElementShape";
import { joint } from '@/plugins/rappid';


export default class PatientShape extends ElementShape{

    constructor(){
        super()
        this.root = new joint.shapes.standard.Rectangle()
        this.root.position(this.top, this.left)
        this.root.resize(this.width, this.height)
        this.root.attr({
            body:{
                
            },
            label: {
                text: 'Patient',
                
            }
        })
    }

    
    
    
}