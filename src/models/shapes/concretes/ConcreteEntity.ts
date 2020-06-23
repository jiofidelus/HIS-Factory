import { Shape } from '../base/Shape';
import { FieldEntity } from '@/models/database/fields/FieldEntity';

export class ConcreteEntity {
    shape!: Shape
    fields: FieldEntity[] = []
}