import axios from "axios";

const CommonAPI=(method,url,data)=>{
    const object={
        method,
        url,
        data
    }
    return axios(object).then(res=>{
        return res
    }).catch(err=>{
        console.log(err);
        
    })

    

}
export default CommonAPI