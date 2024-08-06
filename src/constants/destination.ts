import { Icons } from "@/components/shared/icons";

export enum destinationEnum {
  url = 0,
  file = 1,
  sms = 2,
  email = 3,
  instagram = 4,
  facebook = 5,
  youtube = 6,
  googleDoc = 7,
}

export const scanDestinationData = [
  { id: 34234234, Icon: Icons.globe, label: "URL", value: destinationEnum.url },
  {
    id: 45645645,
    Icon: Icons.file,
    label: "File",
    value: destinationEnum.file,
  },
  {
    id: 2345644,
    Icon: Icons.message,
    label: "SMS",
    value: destinationEnum.sms,
  },
  {
    id: 3456346,
    Icon: Icons.mail,
    label: "Email",
    value: destinationEnum.email,
  },
  {
    id: 547645745,
    Icon: Icons.instagram,
    label: "Instagram",
    value: destinationEnum.instagram,
  },
  {
    id: 234523657,
    Icon: Icons.facebook,
    label: "Facebook",
    value: destinationEnum.facebook,
  },
  {
    id: 3256346,
    Icon: Icons.youtube,
    label: "Youtube",
    value: destinationEnum.youtube,
  },
  {
    id: 679678,
    Icon: Icons.google,
    label: "Google Doc",
    value: destinationEnum.googleDoc,
  },
];
