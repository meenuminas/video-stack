import { commonApi } from "./commonStructure"
import { BASEURL } from "./baseUrl"



////video add
 export const addVideoApi=async(bodyData)=>{
    return await commonApi('POST',`${BASEURL}/videos`,bodyData)
}

///get all vedio
export const getVideoApi=async()=>{
    return await commonApi('GET',`${BASEURL}/videos`,{})
}

//delet the vedio
export const deleteVideoApi=async(id)=>{
    return await commonApi('DELETE',`${BASEURL}/videos/${id}`)
}


///add category
export const addCateApi=async(bodyData)=>{
    return await commonApi('POST',`${BASEURL}/categories`,bodyData)
}

///get category

export const getCateApi=async()=>{
    return await commonApi('GET',`${BASEURL}/categories`,{})
}

//delete category
export const deleteCateApi=async(id)=>{
    return await commonApi('DELETE',`${BASEURL}/categories/${id}`)
}

//get single video
export const getVideo=async(id)=>{
    return await commonApi('GET',`${BASEURL}/videos/${id}`,{})
}

////update category
export const updateCateApi=async(id,bodyData)=>{
    return await commonApi('PUT',`${BASEURL}/categories/${id}`,bodyData)
}

///add history
export const addHistory=async(bodyData)=>{
    return await commonApi('POST',`${BASEURL}/histories`,bodyData)
}

//get history
export const getHistoryApi=async()=>{
    return await commonApi('GET',`${BASEURL}/histories`,{})
}

//delete history

export const deleteHistApi=async(id)=>{
    return await commonApi('DELETE',`${BASEURL}/histories/${id}`)
}


