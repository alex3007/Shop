import * as axios from "axios";
export const serverUrl = `https://todoalexserver.herokuapp.com/`;
export const api = {

    getItems() {
        return axios.get(serverUrl)
    },
    getBuingItems() {
        return axios.get(serverUrl+`basket`)
    },
    addBuingItem(item){
        return axios.post(serverUrl, {item: item}
        )
    },
    deleteBuingItem(id){
        return axios.delete(serverUrl, {data:{id: id}}
        )
    },
    updateBuingItem(id,text){
        return axios.put(serverUrl, {id: id, text:text}
        )
    },

    login(email) {
        return axios.post(serverUrl+`auth`, { email:email});
    }
}