const Base64Image = (base64String, alt, ...props) => {
  const imageSrc = `data:image/jpg;base64,${base64String.Base64Image}`;
  return <img src={imageSrc} alt={alt} {...props} />;
};

export default Base64Image;
