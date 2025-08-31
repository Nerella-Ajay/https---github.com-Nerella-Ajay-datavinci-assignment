import { useState } from "react";

import { Info } from 'lucide-react';

import Modal from "../Modal";
import ProductGallery from "../ProductGallery";
import "./index.css";

const certificates = [
    "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567333/certifications_j5e6al.png",
    "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567354/certifications1_xgsnwi.png",
    "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567366/certifications2_nllshf.png",
    "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567386/certifications3_jeb6mp.png",
    "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567402/certifications4_uyimdb.png",
    "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567424/certifications5_qqvomy.png",
];

const products = [
    {
        id: 1,
        name: 'UMF 20+',
        image: 'https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567515/image1_i2s9wx.png',
        options: ['250g'],
        basePrice: 150.00
    },
    {
        id: 2,
        name: 'UMF 24+',
        image: 'https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567497/image_edyogk.png',
        options: ['250g'],
        basePrice: 180.00
    },
    {
        id: 3,
        name: 'Wooden Spoon',
        image: 'https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567475/image_152_wu6a1p.png',
    },
];

const originalPrice = 478.75;
const discountedPrice = 430.88;
const deliveryMinDate = 'Jun 9';
const deliveryMaxDate = 'Jun 13';
const afterpayPrice = 13.97;

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [showModal, setShowModal] = useState(false);

    const increaseQty = () => setQuantity(quantity + 1);
    const decreaseQty = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const handleOptionChange = (productId, event) => {
        setSelectedOptions(prev => ({
        ...prev,
        [productId]: event.target.value
        }));
    };

    return (
    <div className="details">
        <h2 className="title">
        Manuka Honey <br /> UMF<sup>TM</sup>24+ <br /> MGO
        1122+
        </h2>

    <button className="subtitle" onClick={() => setShowModal(true)}>
        <img
            src="https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567140/Button_-_Learn_More_about_Afterpay_-_Opens_a_dialog_SVG_g1bwn1.png"
            alt="information-icon"
        />{" "}
        What is UMF and MGO?
    </button>

    {showModal && (
        <Modal onClose={() => setShowModal(false)} />
    )}

    <div className="rating-container">
        <h3 className="text-style">The Optimiser</h3>
        <div className="review-container">
            <div className="rating"></div>
            <p className="review-text">825 Reviews</p>
        </div>
    </div>

    <p className="text-style">
        For those times in life when quality comes first.This pure UMF
        <sup>TM</sup>24+ Manuka Honey is powerfully active, sourced from wild
        and rugged locations around Aotearoa New Zealand and great for almost
        all uses. It has a full, delicious flavour and your body will love you
        for it.
    </p>

    <div className="certificates">
        {certificates.map((image) => (
        <img
            key={image}
            src={image}
            alt="certificate"
            className="certificate-img"
        />
        ))}
    </div>

    <ProductGallery />

    <p className="price">Payment options(select one)</p>
    <div className="payment-main-container">
        <div className="payment-container">
            <button className="purchacse-button">
            <div className="button-text-alignment">
                <p>One-time purchase</p>
                <p>$55.88USD</p>
            </div>
            </button>

            <button className="subscribe-button">
            <div className="button-text-alignment">
                <p>Subscribe & save20%</p>
                <p>$44.70USD</p>
            </div>
            </button>
        </div>

        <div className="subscription-conatiner">
        <img
            src="https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567293/Vector_v5j5se.png"
            alt="refresh"
            className="icon-size"
        />
            <p className="about-subscription">What is a Subscription?</p>
        </div>
    </div>

    <div className="size-options">
        <p>Select Quantity</p>
        <div className="options">
        <div className="quantity-button">
            <button className="qunatity-text" onClick={decreaseQty}>&#8722;</button>
            <p className="qunatity-text">{quantity}</p>
            <button className="qunatity-text" onClick={increaseQty}>&#43;</button>
        </div>
            <button className="cart-button"> Add to Cart</button>
        </div>
    </div>


        <div className="page-container">
        <div className="main-card">
        
          {/* Header */}
        <div className="beauty-bundle-container">
            <div className="header title">
                <button className="header-button left">
                    <img src="https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567217/Frame_14845786021_e1ug9j.png" alt="left" size={24} />
                </button>
                <h1 className="header-title">Beauty Bundle</h1>
                <button className="header-button right">
                    <img src="https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567201/Frame_1484578601_huwlny.png" alt="right" size={24} />
                </button>
            </div>

            <div className="product-container">
                <div className="product-container-images">
                {products.map((product, index) => (
                <div key={product.id} className="product-item">
                    <div className="product-image-container">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                    />
                    {index < products.length - 1 && (
                        <span className="plus-icon">&#43;</span>
                    )}
                    </div>
                    <p className="product-name">{product.name}</p>

                    {product.options && product.options.length > 0 && (
                        <select
                        className="product-select"
                        value={selectedOptions[product.id] || product.options[0]}
                        onChange={(e) => handleOptionChange(product.id, e)}
                        >
                        {product.options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                        </select>
                    )}
                    </div>
                ))}
                </div>
    
                <div className="pricing-section">
                    <div className="price-container">
                        <span className="original-price">${originalPrice.toFixed(2)} USD</span>
                        <span className="discounted-price">${discountedPrice.toFixed(2)} USD</span>
                        <span className="save-badge">Save 10%</span>
                    </div>
                    <button className="add-to-cart-button">
                        ADD BUNDLE TO CART
                    </button>
                </div>

            </div>

        </div>

          {/* Reward Points */}
        <div className="rewards-section">
            <div className="rewards-icon-container">
                <img src="https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567448/Colourclub_Logo_e6j73t.png" alt="Reward points icon" className="rewards-icon" />
            </div>
            <p className="rewards-text">
                Colourclub members earn up to <span className="bold">56</span> reward points when buy this item. Sign up or log in
            </p>
        </div>

          {/* Delivery and Afterpay */}
        <div className="delivery-afterpay-section">
            
            <div className="delivery-grid">
                <div>
                    <p className="title-text">DELIVERY</p>
                    <p className="subtitle">FREE DELIVERY ON ORDERS OVER $30</p>
                </div>
                <div className="text-right">
                    <p className="title-text">ESTIMATED DELIVERY DATE:</p>
                    <p className="subtitle">{deliveryMinDate} - {deliveryMaxDate}</p>
                </div>
            </div>

            <hr />
            
            <p className="subtitle">AFTER PAY</p>
            <div className="afterpay-container">
                <p className="subtitle">or 4 interest-free payments of ${afterpayPrice.toFixed(2)} with</p>
                <img src="https://res.cloudinary.com/dwnmq44oa/image/upload/v1756636724/Button_-_Afterpay_logo_-_Opens_a_dialog_SVG_iezz4z.png" alt="after pay"/>
                <Info size={16} className="subtitle" />
            </div>
            <hr />

            </div>

          {/* UMF Scale and Taste Profile */}
            <div className="umf-taste-section">
            <div className="umf-scale-section">
                <h3 className="subtitle">UMF<sup>TM</sup> SCALE</h3>
                <div className="umf-list">
                {[10, 15, 20, 24, 26, 28, 30].map(umf => (
                    <div key={umf} className={`umf-item umf-${umf} ${umf === 24 ? 'active' : 'inactive'}`}>
                    UMF<sup>TM</sup> {umf}+
                    </div>
                ))}
                </div>
            </div>

            <div className="taste-profile-section">
                <h3 className="subtitle">TASTE PROFILE</h3>
                <div className="bar-container">
                <div className="bar-fill" style={{ width: '100%' }}></div>
                <div className="bar-marker"></div>
                </div>
                <div className="bar-labels">
                <span>Clean & Intense</span>
                <span>Bold & Intense</span>
                </div>
            </div>
            </div>
        </div>
        </div>



    </div>
    );
};

export default ProductDetails;
