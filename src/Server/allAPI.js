import CommonAPI from "./commonAPI";

const BASEURL = "http://localhost:3000";



 export const getdataAPI=async()=>{
    return await CommonAPI("GET",`${BASEURL}/students`,{})
 }

 export const deleteAPI=async(id)=>{
    return await CommonAPI("DELETE",`${BASEURL}/students/${id}`,{})
 }

export const addAPI = async (student) => {
  return await CommonAPI("POST", `${BASEURL}/students`, student);
};


export const editAPI=async(id,student)=>{
    return await CommonAPI("PUT",`${BASEURL}/students/${id}`,student)
}

export const getsingleEditAPI=async(id)=>{
   return await CommonAPI("GET",`${BASEURL}/students/${id}`,{})
}