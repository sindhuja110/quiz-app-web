import * as Yup from "yup";

export const NotificationSchema = Yup.object().shape({
    title:Yup.mixed().required(" Title Must be Required..!"),
    body:Yup.mixed().required(" Subtitle Must be Required..!"),
    image:Yup.mixed().required(" Image Must be Required..!"),
   
    
});
