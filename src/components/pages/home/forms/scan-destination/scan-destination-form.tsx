import { destinationEnum } from "@/constants/destination"
import EmailForm from "./email-form"
import FaceBookForm from "./facebook-form"
import FileForm from "./file-form"
import GoogleDocForm from "./google-doc-form"
import InstagramForm from "./instagram-form"
import SmsForm from "./sms-form"
import UrlForm from "./url-form"
import YoutubeForm from "./youtube-form"

interface ScanDestinationFormProps {
  currentIndex: number
}

const ScanDestinationForm = ({ currentIndex }: ScanDestinationFormProps) => {
  const { email, facebook, file, googleDoc, instagram, sms, url, youtube } =
    destinationEnum

  switch (currentIndex) {
    case url:
      return <UrlForm />
    case file:
      return <FileForm />
    case sms:
      return <SmsForm />
    case email:
      return <EmailForm />
    case instagram:
      return <InstagramForm />
    case facebook:
      return <FaceBookForm />
    case youtube:
      return <YoutubeForm />
    case googleDoc:
      return <GoogleDocForm />
    default:
      return <UrlForm />
  }
}

export default ScanDestinationForm
