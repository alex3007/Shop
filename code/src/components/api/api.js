import * as axios from "axios";

export const getItems = () => {
    return axios.get(`https://alex3007.github.io/Portfolio/data.json`).then(
        response =>{
            return response.data;
        }
    )
};

