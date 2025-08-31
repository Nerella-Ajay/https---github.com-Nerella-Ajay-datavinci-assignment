import './index.css'

const images = [
  "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567783/modal-opener_hsusoq.png",
  "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567580/Item_Link3_gmpap8.png",
  "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567600/Item_Link4_utjkvc.png",
  "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567565/Item_Link2_j30vto.png",
  "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567547/Item_Link1_uwyph0.png",
  "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567805/modal-opener1_nt8iwv.png",
  "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567529/Item_Link_trlu8u.png",
]

const carouselImg = [
  "https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567767/List_mykjhi.jpg"
]

const CarouselsCard = () => {
  return (
    <div>

    <div className="carousel-container">
      <button className="arrow left">
        <img src="https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567217/Frame_14845786021_e1ug9j.png" alt="honey" />
      </button>

      <img src={carouselImg[0]} alt="honey" className='carousel-image'/>

      <button className="arrow right" >
        <img src="https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567201/Frame_1484578601_huwlny.png" alt="honey" />
      </button>
    </div>


      <div className='honey-images'>
        {images.map((image, idx) => (
          <img key={idx} src={image} alt="honey images" />
        ))}
      </div>
    </div>
  )
}

export default CarouselsCard
