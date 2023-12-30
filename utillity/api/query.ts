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
  return await axios.get(`${Api}/user/vendor`)
};

export const getCategory = async (): Promise<any> => {
  const token = await getCachedAuthData("user-token");
  const vendorId = await getCachedAuthData("vendorData")
  return await axios.get(`${Api}/menu?vendorId=${vendorId._id}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
};

export const getItem = async (data: any): Promise<any> => {
  const token = await getCachedAuthData('user-token')
  return await axios.get(`${Api}/item?${data?.queryKey[1]}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
};
