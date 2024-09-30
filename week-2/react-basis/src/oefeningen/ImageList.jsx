const ImageList = () => {
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <ul>
      {images.map((image) => (
        <li key={image}>
          <img src={image} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default ImageList;
