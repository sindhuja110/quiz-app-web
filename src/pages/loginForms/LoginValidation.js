import * as Yup from "yup";

export const LogAndRegSchema = Yup.object().shape({
  email: Yup.string()
    .transform((value) => value.trim())
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),
    
    password: Yup.string()
    .transform((value) => value.trim())
    .required("Password is required ")
    .min(8, "Password should be at least 8 characters"),
    
 
});
