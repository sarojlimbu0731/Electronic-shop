import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "./Schema";
import "../../dist/CheckoutStyle.css"


const onSubmit =() =>{

}

const Checkout = () => {
  const {values,errors, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      fullname: "",
      baddress:"",
      daddress:"",
      tnumber:"",
      cdate:""
    },
    validationSchema:basicSchema,
    onSubmit
  });
  return (
    <div className="checkout-page">
      <form autoComplete="off" onSubmit={handleSubmit}>
       <div>
       <label htmlFor="fullname">FullName</label>
        <input
          value={values.fullname}
          onChange={handleChange}
          type="text"
          id="fullname"
          placeholder="Enter your Name"
          onBlur={handleBlur}
          className={errors.fullname ? "input-error":""}
        />
       </div>
        <div>
        <label htmlFor="baddress">Billing Address</label>
        <input
          value={values.baddress}
          onChange={handleChange}
          type="text"
          id="baddress"
          placeholder="Billing Address"
          onBlur={handleBlur}
        />
        </div>
        <div>
        <label htmlFor="daddress">Delivery Address</label>
        <input
          value={values.daddress}
          onChange={handleChange}
          type="text"
          id="daddress"
          placeholder="Delivery Address"
          onBlur={handleBlur}
        />
        </div>
        <div>
        <label htmlFor="tbumber">Telephone Number</label>
        <input
          value={values.tnumber}
          onChange={handleChange}
          type="number"
          id="tnumber"
          placeholder="Telephone Number"
          onBlur={handleBlur}
        />
        </div>
        <div>
        <label htmlFor="cdate">Current Date</label>
        <input
          value={values.cdate}
          onChange={handleChange}
          type="date"
          id="cdate"
          placeholder="current date"
          onBlur={handleBlur}
        />
        </div>
        <div>
            <button className="button" >Place Order</button>
        </div>

      </form>
    </div>
  );
};

export default Checkout;
