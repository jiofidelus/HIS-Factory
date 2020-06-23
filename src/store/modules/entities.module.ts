import { Module } from "vuex";
import { ConcreteEntity } from '@/models/shapes/concretes/ConcreteEntity';
import { PatientEntity } from '@/models/shapes/concretes';


export interface ShapesModuleState{
    entities: ConcreteEntity[];
    currentEntity?: ConcreteEntity 
}

export const EntitiesModule: Module<ShapesModuleState, {}> = {
    namespaced: true,
    state: {
        entities : [],
        currentEntity : undefined
    },

    mutations:{
        SET_CURRENT_ENTITY(state, entity: ConcreteEntity){
            state.currentEntity = entity
        },
        ADD_ENTITY(state, entity: ConcreteEntity){
            state.entities.push(entity)
        }
    },

    actions:{
        createEntity({commit}, entityClassName){
            let entity: ConcreteEntity;
            try {
                switch (entityClassName) {
                    case 'PatientEntity':
                        entity = new PatientEntity()
                        break;
                
                    default:
                        entity = new ConcreteEntity()
                        break;
                }
                commit('ADD_ENTITY', entity)
                commit('SET_CURRENT_ENTITY', entity)
            } catch (error) {
                console.error(error)
                alert(error.message)
            }
        }

    }

}