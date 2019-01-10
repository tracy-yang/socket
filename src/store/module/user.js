const user = {
    state: {
        userId:'',
        userName:'',
        headerImg:''
    },
    mutations:{
        USERID(state,id){
            state.userId = id;
        },
        USERNAME(state,name){
            state.userName = name;
        },
        HEADERIMG(state,imgUrl){
            state.headerImg = imgUrl;
        },
        
    },
    actions:{
        // HEADERIMGACTION(context){
        //     context.commit('HEADERIMG');
        // },
        USERID({commit},id){
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

