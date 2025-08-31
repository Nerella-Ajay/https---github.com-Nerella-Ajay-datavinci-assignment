import { useState } from "react";
import "./index.css";

const ProductGallery = () => {
    const images = [
    "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567615/Label_Label_paints_qrheel.png",
    "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567649/Label_Label_paints2_udbuon.png",
    "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567666/Label_Label_paints3_fmpqvi.png",
    "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567682/Label_Label_paints4_hibck0.png",
    "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567708/Label_Label_paints5_i7evct.png",
    "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567725/Label_Label_paints6_zxzbmr.png",
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);


    return (
    <div>
        <p className="product-size">Size(Select One)</p>
        <p className="variant-quantity">Variant: 125g | 4.4oz</p>

    <div className="thumbnails">
        <img src={selectedImage} alt="Product" className=""/>
        {images.map((img, index) => (
        <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className= {selectedImage === img ? "active" : ""}
            onClick={() => setSelectedImage(img)}
        />
        ))}
    </div>

    </div>
    
    );
};

export default ProductGallery;
