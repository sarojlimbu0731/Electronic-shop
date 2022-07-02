import * as yup from "yup";

export const basicSchema= yup.object().shape({
    fullname:yup.string().required("fullname is required"),
    baddress:yup.string().required("Billing address required"),
    daddress:yup.string().required("Delivery address is required"),
    tnumber:yup.number().positive().min(10).required("please enter your Telephone number "),
    cdate:yup.date().required("enter the current date")
})