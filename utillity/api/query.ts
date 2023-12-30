import axios from "axios"
import { clearAuthData, getCachedAuthData } from "../helpers/storage"
// const Api = process.env.EXPO_END_POINT

export const getOrder = async (data:any): Promise<any> => {
  const token = await getCachedAuthData('user-token')
  const vendorId = await getCachedAuthData("vendorData")
  return await axios.get(`https://afrilish-version-2-0.onrender.com/api/v1/order?vendorId=${vendorId._id}${data?.queryKey[1]}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })
};

export const getVendor = async (): Promise<any> => {
  const token = await getCachedAuthData('user-token')
  return await axios.get(`https://afrilish-version-2-0.onrender.com/api/v1/partner/vendor`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    }
  )
};

export const getCategory = async (): Promise<any> => {
  const token = await getCachedAuthData("user-token");
  const vendorId = await getCachedAuthData("vendorData")
  return await axios.get(`https://afrilish-version-2-0.onrender.com/api/v1/menu?vendorId=${vendorId._id}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
};

export const getItem = async (data: any): Promise<any> => {
  const token = await getCachedAuthData('user-token')
  return await axios.get(`https://afrilish-version-2-0.onrender.com/api/v1/item?${data?.queryKey[1]}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
};
