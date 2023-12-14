import * as Yup from "yup";

export const signupSchema = Yup.object({
  fname: Yup.string().required("Enter your name").min(2, "Name must be at least 2 characters").max(25, "Name can't exceed 25 characters"),
  mobileno: Yup.number().typeError("Phone must be a number").required("Enter your phone number").test("len", "Phone number must be exactly 10 digits", (val) => val.toString().length === 10),
  address: Yup.string().min(4, "Address must be at least 4 characters").required("Enter your Address"),
  gender: Yup.string("select gender").required("A Gender is required").typeError("Gender is required"),
  language:Yup.array()
    .of(Yup.string())
    .min(1, 'Select at least one language')
    .required('Select at least one language')
});   