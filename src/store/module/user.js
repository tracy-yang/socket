import Cookies from 'js-cookie'
const user = {
    state: {
        userId:Cookies.get('userId'),
        userName:Cookies.get('userName'),
        headerImg:''
    },
    mutations:{
        USERID(state,id){
            state.userId = id;
            Cookies.set('userId',id);
        },
        USERNAME(state,name){
            state.userName = name;
            Cookies.set('userName',name);
        },
        HEADERIMG(state,imgUrl){
            state.headerImg = imgUrl;
        },
        
    },
    actions:{
        HEADERIMGACTION(context){
            context.commit('HEADERIMG');
        },
        USERID({commit},id){
            console.log(id,7777);
            commit('USERID',id);
        },
        USERNAME({commit},name){
            commit('USERNAME',name);
        },
        HEADERIMG({ commit },imgUrl){
            commit('HEADERIMG',imgUrl);
        },

        
    }
}

export default user;

