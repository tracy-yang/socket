import fetch from '../..//util/fetch';

export function login(userName,password){
    let data = {
        userName,
        password
    };
    return fetch({
        url: 'login',
        method: 'post',
        data
    })
}