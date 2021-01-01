import * as axios from "axios";
export const serverUrl = `http://localhost:80/`;
export const api = {
    getItems() {
        return axios.get(serverUrl)
    },
    addItem(id,text){
        return axios.post(serverUrl, {id: id, text:text}
        )
    },
    deleteItem(id){
        return axios.delete(serverUrl, {data:{id: id}}
        )
    },
    saveUpdatedText(id,text){
        return axios.put(serverUrl, {id: id, text:text}
        )
    },
    toggleMarkDone(id,filterLabel){
        return axios.put(serverUrl, {id: id, filterLabel:filterLabel}
        )
    }
}