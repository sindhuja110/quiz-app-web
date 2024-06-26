import * as Yup from "yup";

export const LoaclTrainSchema = Yup.object().shape({
    trainNo:Yup.string()
    .required("Train number is required.")
    .matches(/^\d{5}$/, "Train number must contain exactly five digits."),
    trainName:Yup.mixed().required(" TrainName must be Required..!"),
    type:Yup.mixed().required("Type enter end date"),
    zone: Yup.mixed().required("Zone In Time must be Required..!"),
    updatedOn:Yup.mixed().required("UpdatedOn Time must be Required..!"),
    from:Yup.mixed().required("From Time must be Required..!"),
    departure:Yup.mixed().required("Departure Time must be Required..!"),
    to:Yup.mixed().required("To Time must be Required..!"),
    arrival:Yup.mixed().required(" Arrival must be Required..!"),
    duration:Yup.mixed().required(" Duration must be Required..!"),
    distance:Yup.mixed().required("Distance must be Required..!"),
    speed: Yup.mixed().required("Speed In Time must be Required..!"),
    halts:Yup.mixed().required("Halts Time must be Required..!"),
    sClasses:Yup.mixed().required("SClasses Time must be Required..!"),
    sRunsOn:Yup.mixed().required("SRunsOn Time must be Required..!"),
    trainID:Yup.mixed().required("TrainID Time must be Required..!")
});
