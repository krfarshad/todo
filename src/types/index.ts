import { Dispatch, SetStateAction } from "react";
import { FormikErrors } from "formik";

export interface OptionType {
  value: string;
  label: string;
}

export type SetStateProp<T> = Dispatch<SetStateAction<T>>;

export interface RouteHandle {
  breadcrumbItems: { href: string; label: string }[];
  pageTitle: string;
}
export type SetFieldValueProp<T> = (
  field: string,
  value: any,
  shouldValidate?: boolean
) => Promise<void | FormikErrors<T>>;

export type MenuItemProp = {
  href: string;
  label: string;
  children?: MenuItemProp[];
};

export type MobileMenuItemProp = {
  href: string;
  label: string;
  icon: any;
  children?: MenuItemProp[];
};
