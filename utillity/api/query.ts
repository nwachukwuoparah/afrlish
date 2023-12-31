import axios from "axios"
import { clearAuthData, getCachedAuthData } from "../storage";
const Api = "https://afrilish-version-2-0.onrender.com/api/v1"

export const getOrder = async (data: any): Promise<any> => {
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
  return await axios.get(`${Api}/user/vendor?vendorType=restaurantVendor`)
};

export const getCategory = async (data: any): Promise<any> => {
  return await axios.get(`${Api}/menu?vendorId=${data?.queryKey[1]}`)
};

export const getItem = async (data: any): Promise<any> => {
  return await axios.get(`${Api}/user/item${data?.queryKey[1]}`)
};
