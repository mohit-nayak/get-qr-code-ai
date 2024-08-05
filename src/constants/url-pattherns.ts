export const urlPatterns = {
  instagram:
    /^(https:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9_\/]+|@[\w]+|instaid:[\w]+)$/,
  facebook: /^https:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9\.\/]+$/,
  youtube:
    /^https:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_\-]+$/,
  googleDocs:
    /^https:\/\/(www\.)?docs\.google\.com\/document\/d\/[a-zA-Z0-9_\-]+\/edit$/,
  phoneRegex: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
}
