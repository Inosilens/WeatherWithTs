export const dynamicBackground = (name: string) => {
    switch (name) {
        case "Tomsk"       :
            return "../img/Tomsk.jpg";
        case "Timiryazevskiy" :
            return "../img/Timiryazevskoe.jpg";
        case"Seversk"        :
            return "../img/Seversk.jpg";
        case"Iglakovo"         :
            return "../img/Iglakovo.jpg";
        case"Luchanovo"     :
            return "../img/Luchanovo.jpg";
        case"Bogashevo"      :
            return "../img/Bogashevo.jpg";
        case"Kaltay"        :
            return "../img/Kaltay.jpg";
        case"Moryakovskiy Zaton"  :
            return "../img/Zaton.jpg";
        case"Karbysheva"     :
            return "../img/Karbysheva.jpg";
        case"Samus`"        :
            return "../img/Samus.jpg";
        case"Aleksandrovskoye"  :
            return "../img/Aleksandrovskoe.jpg";
        case"Mel'nikovo"     :
            return "../img/Melnikovo.jpg";
        case "Tayga"          :
            return "../img/Tayga.jpg";
        case"Kozhevnikovo"    :
            return "../img/Kojevnikovo.jpg";
        case"Krasnyy Yar"    :
            return "../img/Krasniy.jpg";
        default :
            return null
    }
}