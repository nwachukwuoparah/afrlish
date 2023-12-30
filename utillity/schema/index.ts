import * as yup from "yup"



export const signUpSchems = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  phone: yup.string().required('Phone number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  language: yup.string().required('Language is required')
})

export const loginSchems = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required')
})


export const addResturant = yup.object().shape({
  name: yup.string().required("Business Name is required"),
  email: yup.string().required("Business Email is required").email("Invalid email format"),
  phone: yup.string().required("Business Phone Number is required"),
  address: yup.string().required("Business address is required")
})


export const optionsSchems = yup.object().shape({
  orderAmount: yup.string().required("Min order is required"),
  restaurantTags: yup.string().required("Tags is required"),
})



export const paymentSchems = yup.object().shape({
  bank: yup.string().required("Bank is required"),
  account: yup.string().required("Account number is required"),
  name: yup.string().required("Account name is required")
})


export const menuSchems = yup.object().shape({
  name: yup.string().required("Item Name is required").matches(/^[A-Za-z\s]+$/, 'Invalid characters.'),
  description: yup.string().required("Describe item is required").matches(/^[A-Za-z0-9\s]+$/, 'Invalid characters.'),
  menuId: yup.string().required("Meal category is required"),
  image: yup.mixed().required("Image is required"),
  price: yup.string().required("Price is required").matches(/^\d+(\.\d+)?$/, 'Price must be a number.'),
  deliveryOption: yup.string().required("Devivry Option is required"),
  preparationTime: yup.string().required("Preparation time is required").matches(/^[A-Za-z0-9\s]+$/, 'Invalid characters.'),
  selectPack: yup.string().required("Select pack is required"),
  leastOrder: yup.string().required("Least order is required").matches(/^\d+(\.\d+)?$/, 'Price must be a number.'),
  mostOrder: yup.string().required("Most order is required").matches(/^\d+(\.\d+)?$/, 'Price must be a number.'),
  tag: yup.string().required("Tag is required")
    .matches(/^#[A-Za-z]+$/, 'Invalid tag. Use only # and letters.'),
  priceDescription: yup.string().required("Price description is required").matches(/^[A-Za-z0-9\s]+$/, 'Invalid characters.'),
  calorie: yup.string().matches(/^\d+(\.\d+)?$/, 'Calorie must be a number.'),
  carb: yup.string().matches(/^\d+(\.\d+)?$/, 'Carb must be a number.'),
  fat: yup.string().matches(/^\d+(\.\d+)?$/, 'Fat must be a number.'),
  protein: yup.string().matches(/^\d+(\.\d+)?$/, 'Protein must be a number.'),
})

export const bulkItemSchems = yup.object().shape({
  name: yup.string().required("Item Name is required")
    .matches(/^[A-Za-z\s]+$/, 'Invalid characters.'),
  description: yup.string().required("Description item is required")
    .matches(/^[A-Za-z0-9\s]+$/, 'Invalid characters.'),
  priceDescription: yup.string().required("Price description item is required")
    .matches(/^[A-Za-z0-9\s]+$/, 'Invalid characters.'),
  menuId: yup.string().required("Meal category is required"),
  image: yup.mixed().required("Image is required"),
  deliveryOption: yup.string().required("Delivry Option is required"),
  preparationTime: yup.string().required("Preparation time is required")
    .matches(/^[A-Za-z0-9\s]+$/, 'Invalid characters.'),
  tag: yup.string()
    .required('Tag is required')
    .matches(/^#[A-Za-z]+$/, 'Invalid tag. Use only # and letters.'),
  calorie: yup.string().matches(/^\d+(\.\d+)?$/, 'Calorie must be a number.'),
  price: yup.string().required("Price is required").matches(/^\d+(\.\d+)?$/, 'Price must be a number.'),
  guestSize: yup.string().required("Guest Size is required"),
  carb: yup.string().matches(/^\d+(\.\d+)?$/, 'Carb must be a number.'),
  fat: yup.string().matches(/^\d+(\.\d+)?$/, 'Fat must be a number.'),
  protein: yup.string().matches(/^\d+(\.\d+)?$/, 'Protein must be a number.'),
  leastOrder: yup.string().matches(/^\d+(\.\d+)?$/, 'Least order must be a number.'),
  mostOrder: yup.string().matches(/^\d+(\.\d+)?$/, 'Most order must be a number.'),
  selectPack: yup.string().required("Select pack is required")
})

export const categorySchems = yup.object().shape({
  title: yup.string().required('Menu category is required'),
})


