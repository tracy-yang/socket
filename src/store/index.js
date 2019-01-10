import Vuex from 'vuex';
import Vue from 'vue';
import getters from './getters';
import user from './module/user';

Vue.use(Vuex);

export default new Vue.Store({
    modules:{
        user
    },
})

