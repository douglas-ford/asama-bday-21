import "../Styles/ImageSwap.css";
const ImageSwap = (props) => {
  console.log(props.src)
  return (
    <div className="image-container">
      <img className="image1" src={props.src} alt="img" />
      <img
        className="image2"
        src={props.src2}
        alt="img"
      />
    </div>
  );
};

export default ImageSwap;
