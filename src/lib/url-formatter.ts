export const getSmsFormatURL = (code:string , mobileNumber:string, message?:string) => {
    if(message?.length! > 1){
        return `SMSTO:${mobileNumber}:${message}`
    }
    return `SMSTO:${mobileNumber}`

}

export const getEmailFormatURL = (email:string , subject?:string , message?:string) => {
    return `mailto:${email}?subject=${encodeURIComponent(subject!)}&body=${encodeURIComponent(message!)}`;
}

export const getInstagramFormatURL = (instaURL:string) => {

    if(instaURL?.startsWith("@")){
        return `https://www.instagram.com/${instaURL?.substring(1)}`
    }
    return instaURL
}

export const getFacebookFormatURL = (facebookURL:string) => {}

export const getYoutubeFormatURL = (youtubeURL:string) => {}

