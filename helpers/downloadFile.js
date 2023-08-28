export default ({ fileData, fileMIMEType, fileName, openInNewTab }) => {
  let file;
  if (fileMIMEType) {
    file = new Blob([fileData], { type: fileMIMEType });
  } else {
    file = new Blob([fileData]);
  }
  const blobURL = URL.createObjectURL(file);
  const link = document.createElement("a");
  if (openInNewTab) {
    link.setAttribute("target", "_blank");
  } else {
    link.setAttribute("download", `${fileName || ""}`);
  }
  link.href = blobURL;
  link.click();
  URL.revokeObjectURL(link.href);
};
