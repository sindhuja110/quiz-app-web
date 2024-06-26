import * as Yup from "yup";

export const StationSchema = Yup.object().shape({
    stationCode: Yup.mixed().required(" StationCode Must be Required..!"),
    stationName: Yup.mixed().required(" StationName Must be Required..!").test(
        "capitalize-first-letter",
        "Station name must start with a capital letter",
        value => /^[A-Z].*/.test(value)
    ),
    city: Yup.mixed().required(" City Must be Required..!").test(
        "capitalize-first-letter",
        "City must start with a capital letter",
        value => /^[A-Z].*/.test(value)
    ),
    state: Yup.mixed().required("State Must be Required..!").test(
        "capitalize-first-letter",
        "State must start with a capital letter",
        value => /^[A-Z].*/.test(value)
    ),
    
    tamilStationName: Yup.mixed().required(" நிலையத்தின் பெயர் அவசியம் இருக்க வேண்டும்..!"),
    tamilCity: Yup.mixed().required(" நகரம் அவசியம் இருக்க வேண்டும்..!"),
    tamilState: Yup.mixed().required("மாநிலம் கட்டாயம் தேவை..!"),
    
    teluguStationName: Yup.mixed().required(" స్టేషన్ పేరు తప్పనిసరిగా అవసరం..!"),
    teluguCity: Yup.mixed().required(" నగరం తప్పనిసరిగా అవసరం..!"),
    teluguState: Yup.mixed().required("రాష్ట్రం తప్పనిసరిగా ఉండాలి..!"),
    
    kannadaStationName: Yup.mixed().required("ನಿಲ್ದಾಣದ ಹೆಸರು ಕಡ್ಡಾಯವಾಗಿರಬೇಕು..!"),
    kannadaCity: Yup.mixed().required(" ನಗರವು ಕಡ್ಡಾಯವಾಗಿರಬೇಕು..!"),
    kannadaState: Yup.mixed().required("ರಾಜ್ಯವು ಕಡ್ಡಾಯವಾಗಿರಬೇಕು..!"),
    
    hindiStationName: Yup.mixed().required(" स्टेशन का नाम आवश्यक होना चाहिए..!"),
    hindiCity: Yup.mixed().required(" शहर आवश्यक होना चाहिए..!"),
    hindiState: Yup.mixed().required("राज्य आवश्यक होना चाहिए..!"),
});
