import { EntitiesModule } from './entities.module'

const state = function(){
    return {
        name: ''
    }
}

const modules = {
    entities: EntitiesModule
}

export default {
    namespaced: true,
    state,
    modules
}