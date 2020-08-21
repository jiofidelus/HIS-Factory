import Vue from 'vue'
import {createNamespacedHelpers} from 'vuex'
const {mapActions, mapState} = createNamespacedHelpers('project/entities')
export default Vue.extend({
    computed:{
        ...mapState(['currentEntity', 'entities'])
    },
    methods:{
        ...mapActions(['createEntity', 'updateCurrentEntity'])
    }
})