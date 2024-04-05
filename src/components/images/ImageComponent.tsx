import Image from 'next/image';

const ImageComponent = () => {
  return (
    <div>
      {/* 
        Here, specify the width and height properties for the Image component 
        based on the original dimensions of the image.
      */}
      <Image 
        src="https://hips.hearstapps.com/hmg-prod/images/hoka-zinal-13085-1643565794.jpg?crop=1.00xw:0.849xh;0,0.151xh&resize=2048:*" 
        alt="Hoka Zinal" 
        width={2048}  // Specify the original width of the image
        height={1739} // Specify the original height of the image
      />
    </div>
  );
};

export default ImageComponent;
