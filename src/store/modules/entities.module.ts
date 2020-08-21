import { Module } from "vuex";
import { ConcreteEntity } from '@/models/entities/ConcreteEntity';
import { PatientEntity, ExamEntity } from '@/models/entities';


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
            if(entity != state.currentEntity){
                state.currentEntity?.shape.applyUnselectedStyle()
                entity.shape.applySelectedStyle()
                state.currentEntity = entity

            }
        },
        ADD_ENTITY(state, entity: ConcreteEntity){
            state.entities.push(entity)
        }
    },


    actions:{
        updateCurrentEntity({state, commit}, model){
            state.entities.find((e) => {
                if(e.shape.root == model){

                    commit('SET_CURRENT_ENTITY', e)
                    console.log("Trouvé")
                    return true
                }
            })
        },
        createEntity({commit}, entityClassName){
            let entity: ConcreteEntity;
            try {
                switch (entityClassName) {
                    case 'PatientEntity':
                        entity = new PatientEntity()
                        break;
                    case 'ExamEntity':
                        entity = new ExamEntity()
                        break;
                    
                
                    default:
                        entity = new ConcreteEntity()
                        break;
                }
                commit('ADD_ENTITY', entity)
                commit('SET_CURRENT_ENTITY', entity)
            } catch (error) {
                console.error("createEntity: " + error)
                alert(error.message)
            }
        }

    }

}