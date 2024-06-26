import * as Yup from "yup";

export const TrainSchema = Yup.object().shape({
    TrainNo: Yup.string()
        .required("Train number is required.")
        .matches(/^\d{5}$/, "Train number must contain exactly five digits."),

    TrainName: Yup.string().required("Train name is required."),

    tamilTrainName: Yup.string().required("ரயிலின் பெயர் கண்டிப்பாக இருக்க வேண்டும்."),

    teluguTrainName: Yup.string().required("రైలు పేరు తప్పనిసరిగా ఉండాలి."),

    kannadaTrainName: Yup.string().required("ರೈಲಿನ ಹೆಸರು ಕಡ್ಡಾಯವಾಗಿರಬೇಕು."),

    hindiTrainName: Yup.string().required("ट्रेन का नाम आवश्यक है."),
});

