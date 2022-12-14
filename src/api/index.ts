import { AxiosInstance } from "axios";
import instance from "./axios-instance";


class Services {
    axiosInstance:AxiosInstance = instance
    get = (endpoint:string) => {
        return new Promise ( (resolve, reject) =>{

            this.axiosInstance.get(endpoint)
            .then(
                res => res.data
            ).then(
                
                data => resolve(data) 
            ).catch(
                err => reject(err)
            )
        })
    }
}

export default Services