export class FieldEntity{

    name: string
    shortName: string
    required: boolean
    readonly: boolean

    
    public get type() : string {
        return this.constructor.name
    }
    

    constructor(name: string, shortName: string, required: boolean = true, readonly: boolean = false ){
        this.name = name
        this.shortName = shortName
        this.required = required
        this.readonly = readonly
    }

    
}