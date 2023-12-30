import axios from "axios"
import { clearAuthData, getCachedAuthData } from "../storage";
const Api = "https://afrilish-version-2-0.onrender.com/api/v1"

export const createUser = async (data: any): Promise<any> => {
  return await axios.post(`${Api}/user`, data)
};

export const verifyUser = async (data: any): Promise<any> => {
  return await axios.post(`${Api}/user/verify`, data)
};

export const resendOtp = async (data: any): Promise<any> => {
  console.log(data)
  return await axios.post(`${Api}/user/resend-otp`, data)
};

export const loginUser = async (data: any): Promise<any> => {
  return await axios.post(`${Api}/user/login-code`, data)
};

export const Loginverify = async (data: any): Promise<any> => {
  return await axios.post(`${Api}/user/login`, data)
};

export const LoginresendOtp = async (data: any): Promise<any> => {
  console.log(data)
  return await axios.post(`${Api}/user/login-code`, data)
};










export const createVendor = async (data: any): Promise<any> => {
  const token = await getCachedAuthData('signup-token')
  return await axios.post(`${Api}/partner/vendor`, data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${token}`,
      },
    }
  )
};

export const editVendor = async (data: any): Promise<any> => {
  const token = await getCachedAuthData('user-token')
  const vendorId = await getCachedAuthData("vendorData")
  return await axios.patch(`${Api}/partner/vendor/${vendorId._id}`, data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${token}`,
      },
    }
  )
};

export const editResturant = async (data: any): Promise<any> => {
  const token = await getCachedAuthData('user-token')
  const vendorId = await getCachedAuthData("vendorData")
  return await axios.patch(`${Api}/partner/vendor/${vendorId._id}`, data,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }
  )
};

export const createCategory = async (data: any): Promise<any> => {
  const vendorId = await getCachedAuthData("vendorData")
  const token = await getCachedAuthData('user-token')
  return await axios.post(`${Api}/menu`, { ...data, vendorId: vendorId._id },
    {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${token}`,
      },
    }
  )
};

export const createItem = async (data: any): Promise<any> => {
  const vendorId = await getCachedAuthData("vendorData")
  const token = await getCachedAuthData('user-token')
  return await axios.post(`${Api}/item`, data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${token}`,
      },
    }
  )
};

export const createOperations = async (data: any): Promise<any> => {
  const vendorId = await getCachedAuthData("vendorData")
  const token = await getCachedAuthData('user-token')
  return await axios.patch(`${Api}/partner/vendor/operation/${vendorId._id}`, data,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }
  )
};

export const outOfStock = async (data: any): Promise<any> => {
  const { value, id } = data
  const token = await getCachedAuthData('user-token')
  return await axios.patch(`${Api}/item/${id}`, value,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
};

export const onLine = async (data: any): Promise<any> => {
  const vendorId = await getCachedAuthData("vendorData")
  const token = await getCachedAuthData('user-token')
  return await axios.patch(`${Api}/partner/vendor/${vendorId._id}`, data,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
};