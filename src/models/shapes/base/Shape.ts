export class Shape{

    private _id!: number 
    public root: any|undefined
    public type = Shape.name
    public name = Shape.name
    public top: number = 0
    public left: number = 0
    public width: number = 100
    public height: number = 100

    
    public get id() : number {
        return this._id
    }

    public constructor({top = 0, left = 0}){
        this.top = top
        this.left = left
        this._id =  Date.now()
    }
    
    createShape(){
        
    }

    applySelectedStyle(){

    }

    applyUnselectedStyle(){

    }
    
}