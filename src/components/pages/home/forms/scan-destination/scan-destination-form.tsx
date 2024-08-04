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
  switch (currentIndex) {
    case 0:
      return <UrlForm />
    case 1:
      return <FileForm />
    case 2:
      return <SmsForm />
    case 3:
      return <EmailForm />
    case 4:
      return <InstagramForm />
    case 5:
      return <FaceBookForm />
    case 6:
      return <YoutubeForm />
    case 7:
      return <GoogleDocForm />

    default:
      return <UrlForm />
  }
}

export default ScanDestinationForm
