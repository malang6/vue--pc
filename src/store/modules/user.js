import {reqRegister,reqLogin,reqExit} from "@api/user"

export default {
    state:{
        name:localStorage.getItem("name") ||"",
        token: localStorage.getItem("token") || ""
    },
    getters:{},
    actions:{
        async register({commit},{phone,password,code}){
            await reqRegister({phone,password,code});
            console.log(commit)
        },
        async login({commit},{phone,password}){
            const user = await reqLogin(phone,password)
            commit("LOGIN",user)
        },
        async exit({commit}){
            await reqExit()
            commit("EXIT")
        } 

    },
    mutations:{
        LOGIN(state,user){
            state.name = user.name
            state.token = user.token
        },
        EXIT(state){
            state.name = ""
            state.token = ""
        }
    }
}