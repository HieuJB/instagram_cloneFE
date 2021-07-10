import axios from "axios";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

import router from "@/router.js";


const state = {
    user : '',
    token:'',
    notification_success:'',
    notification_error:'',
    mail:'',
    api_url: 'http://127.0.0.1:8000/api/'
};
const getters = {
    
};
const actions = {
    async handleRegistraion({ commit },data){
        commit("HANDLE_MAIL")
        const response = await axios.post(`${state.api_url}user/register`,data);
        commit("HANDLE_REGISTRATION", response.data)
    },
    async handleLogin({ commit },data){
        const response = await axios.post(`${state.api_url}user/login`,data);
        commit("HANDLE_LOGIN",response.data);
        console.log(response.data);
    }
};
const mutations = {
    HANDLE_MAIL(state){
        state.mail=true;
    },
    HANDLE_REGISTRATION(state,data){
        if(!data.status){
            state.notification_error=data.message;state.mail=false;
            setTimeout(()=>{state.notification_error=''},3000);
        }else{
            state.notification_success=data.message;state.mail=false;
            createToast(data.message, {
                position: 'top-right',
                showIcon: 'true',
                type: 'success',
                transition: 'slide',
                timeout: 2000
        });}},
    HANDLE_LOGIN(state,data){
        if(data.status){
            state.token = data;
            localStorage.setItem('token',data.token);
            router.push("/home");
        }else{
            if(data.message_err){
                createToast(data.message, {
                    position: 'top-right',
                    showIcon: 'true',
                    type: 'success',
                    transition: 'slide',
                    timeout: 2000
            })}else{
                state.notification_error = data.message;
                setTimeout(()=>{state.notification_error=''},3000);
            }
        }
    },
};
const authModule = {state,actions,mutations,getters,};
export default authModule;