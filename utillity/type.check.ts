import { KeyboardTypeOptions, StyleProp, ViewStyle, TextStyle, TextInput, ImageStyle } from "react-native"
import {
  Ref
} from "react";
import { UseFormStateReturn, Control } from 'react-hook-form';


export type propType = {
  children: any;
  type: "text24" | "text20" | "text16" | "text14" | "text12";
  sx?: any;
}

export type SignUpType = {
  fullName: string,
  phoneNumber: string,
  email: string,
  language: string,
  password: string
}

export type RootStackType = {
  register1?: SignUpType;
  register2?: SignUpType;
  verify?: SignUpType;
  login: SignUpType
  vendor: SignUpType
  menu: SignUpType
  createMenu: SignUpType
  option: SignUpType
  Profile: SignUpType
  addResturant: SignUpType
  createBulkItem: any, 
  createItem: any
};
export type SignUpType2 = {
  businessName: string,
  businessPhoneNumber: string,
  businessEmail: string,
  businessAddress: string
}

export type LoginInType = {
  email: string,
  password: string
}


export interface menuPropType {
  protein: string;
  fat: string;
  carb: string;
  calorie: string;
  name: string | Blob
  description: string | Blob
  menuId: string | Blob
  image: { uri: string, name: string, type: string }
  price: string | Blob
  deliveryOption: string | Blob
  preparationTime: string | Blob
  selectPack: string | Blob
  leastOrder: string | Blob
  mostOrder: string | Blob
  tag: string | Blob
  priceDescription: string | Blob
  healthStat: any
}

export interface inputPropType {
  type: string,
  name: any,
  children?: any,
  sx?: { wrapper?: any, textInput?: any },
  placeholder?: string,
  editable?: boolean,
  defaultValue?: string,
  keyboardType?: KeyboardTypeOptions,
  hidden?: boolean,
  multiLine?: boolean,
  label?:string
  control: any;
  ref?: Ref<TextInput> | undefined;
  errors: UseFormStateReturn<SignUpType | LoginInType>['errors'];
}

export interface paymentPropType {
  selectBank: string;
  accountNumber: string;
  accountName: string;
}


export interface textInputMethodType {
  clear?: () => void;
}


export interface DropdownInputProps {
  errors: UseFormStateReturn<any>['errors'];
  control: any;
  name: string;
  type?: "dropdown";
  label?: String;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  selectedTextStyle?: StyleProp<TextStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  iconStyle?: StyleProp<ImageStyle>;
  defualtValue?: dropDownDataType | string;
  data: dropDownDataType[] | any;
}

type dropDownDataType = {
  label: string | number;
  value: string | number;
};

export interface phoneInputProps {
  style?: StyleProp<ViewStyle>;
  label?: string;
  defaultValue?: string;
  countryCode?: any;
  control: any,
  errors: UseFormStateReturn<any>['errors'];
}

export type categoryType = {
  title: string
}

export type OpeningHours = {
  day: string;
  openingTime: string;
  closingTime: string;
};

export type FormData = {
  operation: OpeningHours[];
  orderAmount: number;
  tags: string;
};