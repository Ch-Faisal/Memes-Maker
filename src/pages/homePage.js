import React, { useState,useEffect,useRef } from 'react';
import '../css/HomePage.css';
import Header from './layout/header';
import Footer from './layout/footer';
import { toPng } from 'html-to-image';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
function HomePage() {
  const divRef = useRef(null);
  const defaultImages = {
    meme: 'assets/mouse1.png',
    hat: '',
    face: '',
    front: '',
    accessory: '',
    shirt: '',
    pant: '',
    bg: '',
  };
  const memeOptions = ['mouse1.png', 'mouse2.png', 'mouse3.png', 'mouse4.png', 'mouse5.png','mouse4.png', 'mouse1.png'];
  const hatOptions = ['hat6.jpg','hat1.png', 'hat1.png', 'hat1.png', 'hat1.png', 'hat1.png'];
  const hatsOptions = ['hat1.png', 'hat1.png', 'hat1.png', 'hat1.png', 'hat1.png'];
  const faceOptions = ['hat6.jpg','face1.png', 'face2.png', 'face3.png', 'face4.png', 'face5.png'];
  const facesOptions = ['face1.png', 'face2.png', 'face3.png', 'face4.png', 'face5.png'];
  const frontOptions = ['hat6.jpg','glasses1.png', 'glasses1.png', 'glasses3.png', 'glasses4.png', 'glasses5.png'];
  const frontsOptions = ['glasses1.png', 'glasses1.png', 'glasses3.png', 'glasses4.png', 'glasses5.png'];
  const accessoryOptions = ['hat6.jpg','accessory1.png', 'accessory2.png', 'accessory4.png', 'accessory5.png', 'accessory1.png'];
  const shirtOptions = ['hat6.jpg','shirt1.png', 'shirt4.png', 'shirt5.png', 'shirt1.png', 'shirt4.png'];
  const pantOptions = ['hat6.jpg','pent1.png', 'pent4.png', 'pent5.png', 'pent1.png', 'pent5.png'];
  const bgOptions = ['hat6.jpg', 'bg1.png', 'bg4.png', 'bg5.png', 'bg1.png','bg5.png'];
  const bgsOptions = ['bg1.png', 'bg4.png', 'bg5.png', 'bg1.png','bg5.png'];
  const [selectedImages, setSelectedImages] = useState(defaultImages);
useEffect(() => {
    const hatImage = document.getElementsByClassName('hat-image')[0];
    if (hatImage) {
      hatImage.style.display = selectedImages.hat ? 'block' : 'none';
    }

    const faceImage = document.getElementsByClassName('face-image')[0];
    if (faceImage) {
      faceImage.style.display = selectedImages.face ? 'block' : 'none';
    }

    const frontImage = document.getElementsByClassName('front-image')[0];
    if (frontImage) {
      frontImage.style.display = selectedImages.front ? 'block' : 'none';
    }

    const accessoryImage = document.getElementsByClassName('accessory-image')[0];
    if (accessoryImage) {
      accessoryImage.style.display = selectedImages.accessory ? 'block' : 'none';
    }

    const shirtImage = document.getElementsByClassName('shirt-image')[0];
    if (shirtImage) {
      shirtImage.style.display = selectedImages.shirt ? 'block' : 'none';
    }
    const pentImage = document.getElementsByClassName('pant-image')[0];
    if (pentImage) {
      pentImage.style.display = selectedImages.pant ? 'block' : 'none';
    }
    const bgImage = document.getElementsByClassName('bg-image')[0];
    if (bgImage) {
      bgImage.style.display = selectedImages.bg ? 'block' : 'none';
    }
  }, [selectedImages]);

const handleImageSelect = (category, image) => {
    if (category === 'hat' && image === `assets/${hatOptions[0]}`) {
      setSelectedImages(prevState => ({ ...prevState, hat: '' }));
    } else if (category === 'face' && image === `assets/${faceOptions[0]}`) {
      setSelectedImages(prevState => ({ ...prevState, face: '' }));
    } else if (category === 'front' && image === `assets/${frontOptions[0]}`) {
      setSelectedImages(prevState => ({ ...prevState, front: '' }));
    } else if (category === 'accessory' && image === `assets/${accessoryOptions[0]}`) {
      setSelectedImages(prevState => ({ ...prevState, accessory: '' }));
    } else if (category === 'shirt' && image === `assets/${shirtOptions[0]}`) {
      setSelectedImages(prevState => ({ ...prevState, shirt: '' }));
    } else if (category === 'pant' && image === `assets/${pantOptions[0]}`) {
        setSelectedImages(prevState => ({ ...prevState, pant: '' }));
      }
      else if (category === 'bg' && image === `assets/${bgOptions[0]}`) {
        setSelectedImages(prevState => ({ ...prevState, bg: '' }));
      }
    else {
      setSelectedImages(prevState => ({ ...prevState, [category]: image }));
    }
  };
  const handleReset = () => {
    setSelectedImages(defaultImages);
  };
  const handleGenerateRandom = () => {
    const randomMemeIndex = Math.floor(Math.random() * memeOptions.length);
    const randomHatIndex = Math.floor(Math.random() * hatsOptions.length);
    const randomFrontsIndex = Math.floor(Math.random() * frontsOptions.length);
    const randomFacesIndex = Math.floor(Math.random() * facesOptions.length);
    const randomBgsIndex = Math.floor(Math.random() * bgsOptions.length);
    setSelectedImages({
      meme: `assets/${memeOptions[randomMemeIndex]}`,
      hat: `assets/${hatsOptions[randomHatIndex]}`,
      front: `assets/${frontsOptions[randomFrontsIndex]}`,
      face: `assets/${facesOptions[randomFacesIndex]}`,
      bg: `assets/${bgsOptions[randomBgsIndex]}`,
    });
  };
  const handleDownload = async () => {
    console.log("clicked");
  
    if (divRef.current === null) {
      console.error("divRef is null");
      return;
    }
  
    try {
      const dataUrl = await toPng(divRef.current, { cacheBust: true });
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'image-preview.png';
      link.click();
    } catch (err) {
      console.error('Oops, something went wrong!', err);
    }
  };
  // const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImages({ ...selectedImages, meme: reader.result });
        toastr.success("Image Uploaded Successfully");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='background-color_custom'>
<Header></Header>
<section>
<div className='container mt-5'>
    <div className='row justify-content-center'>
        <div className='col-lg-6 col-12'>
            <div className='d-flex text-center justify-content-center'>
            <img src='assets/section-1-img-1.png' alt='logo' className='img-fluid custom_width_img'/>
            <h1>Solana</h1>
            </div>
            <h1 className='text-center'><span className='custom_gradient'>Meme</span> Maker</h1>
        </div>
    </div>
    <div className='row justify-content-center'>
        <div className='col-lg-6 col-12'>
            <p className='page-1-text'>Capturing picture's and turning them into shareable memes, That's Meme Maker's speciality</p>
        </div>
    </div>
    <div className='row justify-content-center'>
    <div className='col-lg-6 col-12 d-flex justify-content-center'>
        <button className='custom_button_1'>Create your meme</button>
        </div>
    </div>
</div>
<div className='container mt-5'>
<div className='row d-flex justify-content-center'>
          <div className='col-md-4 col-12 mt-4'>
          <div className='image-preview' ref={divRef} style={{ backgroundImage: `url(${selectedImages.bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor:"black", }}>
  {selectedImages.meme && <img src={selectedImages.meme} style={{ width:"268px", height:"350px"}} className='selected-image meme-image' alt='Image1' />}
  {selectedImages.hat && <img src={selectedImages.hat} className='hat-image' alt='Image2' />}
  {selectedImages.face && <img src={selectedImages.face} className='face-image' alt='Image3' />}
  {selectedImages.front && <img src={selectedImages.front} className='front-image' alt='Image4' />}
  {selectedImages.accessory && <img src={selectedImages.accessory} className='accessory-image' alt='Image5' />}
  {selectedImages.shirt && <img src={selectedImages.shirt} className='shirt-image' alt='Image6' />}
  {selectedImages.pant && <img src={selectedImages.pant} className='pant-image' alt='Image7' />}
</div>
          </div>
        </div>
    <div className='row justify-content-center'>
        <div className='col-md-7 col-12'>
        <h2 className='heading_2 text-md-start text-center'>Create Your Mouse</h2>
        </div>
        <div className='col-md-5 col-12 d-flex justify-content-md-end justify-content-center'><button className='custom_button_2' data-bs-toggle="modal" data-bs-target="#exampleModal">Upload File</button></div>
    </div>
    <div className='row mt-3 justify-content-center'>
        <div className='col-lg-6 col-12 d-flex justify-content-center'>
        <input type="text" id="search" name="q" placeholder="Search..." className='custom_input_design'/>
        </div>
    </div>
    <div className='row'>
          <div className='col-lg-6 col-12 custom_slider_color mt-3'>
            <h5 className='slider_heading'>Meme Library</h5>
            <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={5} navigation>
              {memeOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`assets/${option}`}
                    width='70'
                    height='61'
                    onClick={() => handleImageSelect('meme', `assets/${option}`)}
                    alt='sliderImg'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-6 col-12 custom_slider_color mt-3'>
            <h5 className='slider_heading'>Hats</h5>
            <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={5} navigation>
              {hatOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`assets/${option}`}
                    width='70'
                    height='61'
                    onClick={() => handleImageSelect('hat', `assets/${option}`)}
                    alt='sliderImg1'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-6 col-12 custom_slider_color mt-3'>
             <h5 className='slider_heading'>Face</h5>
             <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={5} navigation>
               {faceOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`assets/${option}`}
                    width='70'
                    height='61'
                    onClick={() => handleImageSelect('face', `assets/${option}`)}
                    alt='sliderImg2'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-6 col-12 custom_slider_color mt-3'>
             <h5 className='slider_heading'>Front Accessories</h5>
             <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={5} navigation>
               {frontOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`assets/${option}`}
                    width='70'
                    height='61'
                    onClick={() => handleImageSelect('front', `assets/${option}`)}
                    alt='sliderImg3'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-6 col-12 custom_slider_color mt-3'>
             <h5 className='slider_heading'>Back Accessories</h5>
             <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={5} navigation>
               {accessoryOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`assets/${option}`}
                    width='70'
                    height='61'
                    onClick={() => handleImageSelect('accessory', `assets/${option}`)}
                    alt='sliderImg4'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-6 col-12 custom_slider_color mt-3'>
             <h5 className='slider_heading'>Outfit</h5>
             <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={5} navigation>
               {shirtOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`assets/${option}`}
                    width='70'
                    height='61'
                    onClick={() => handleImageSelect('shirt', `assets/${option}`)}
                    alt='sliderImg5'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-6 col-12 custom_slider_color mt-3'>
             <h5 className='slider_heading'>Pant</h5>
             <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={5} navigation>
               {pantOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`assets/${option}`}
                    width='70'
                    height='61'
                    onClick={() => handleImageSelect('pant', `assets/${option}`)}
                    alt='sliderImg6'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-6 col-12 custom_slider_color mt-3'>
             <h5 className='slider_heading'>Background</h5>
             <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={5} navigation>
               {bgOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`assets/${option}`}
                    width='70'
                    height='61'
                    onClick={() => handleImageSelect('bg', `assets/${option}`)}
                    alt='sliderImg7'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className='row mt-5 mb-2 justify-content-center'>
          <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3'>
            <button className='custom-button-3' onClick={handleReset}>
              <img src='assets/fi_7134699.png' className='me-2' alt='btnImage1' />
              Reset File
            </button>
          </div>
          <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3'>
            <button className='custom-button-4' onClick={handleGenerateRandom}>
              <img src='assets/Group.png' className='me-2' alt='btnImage2' />
              Generate Random
            </button>
          </div>
          <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3'>
          <button className='custom-button-5' onClick={handleDownload}>
              <img src='assets/fi_7268609.png' className='me-2' alt='btnImage3' />
              Download
            </button>
          </div>
        </div>
</div>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
    <button type="button" className="btn-close1 ms-4" data-bs-dismiss="modal" aria-label="Close"><img src="assets/Vector.png" alt='close'/></button>
      <div className="modal-body">
        <div className='container'>
          <div className='row mt-3'>
            <div className='col-4'>
              <div className='modal_box'>
                <p className='box_text'>Inside</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='modal_box1'>
                <p className='box_text'>Below</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='modal_box1'>
                <p className='box_text'>More</p>
              </div>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between'>
            <img src='assets/block1.png' className='modal_img' alt='popupimg1'/>
            <img src='assets/block2.png' className='modal_img' alt='popupimg2'/>
            <img src='assets/block3.png' className='modal_img' alt='popupimg3'/>
            <img src='assets/block2.png' className='modal_img' alt='popupimg4'/>
            <img src='assets/block3.png' className='modal_img' alt='popupimg5'/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between'>
            <img src='assets/block5.png' className='modal_img' alt='popup1img1'/>
            <img src='assets/block4.png' className='modal_img' alt='popup1img2'/>
            <img src='assets/block2.png' className='modal_img' alt='Ipopup1img3'/>
            <img src='assets/block3.png' className='modal_img' alt='popup1img4'/>
            <img src='assets/block5.png' className='modal_img' alt='popup1img5'/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between'>
            <img src='assets/block3.png' className='modal_img' alt='popup2img1'/>
            <img src='assets/block1.png' className='modal_img' alt='popup2img2'/>
            <img src='assets/block3.png' className='modal_img' alt='popup2img3'/>
            <img src='assets/block2.png' className='modal_img' alt='popup2img4'/>
            <img src='assets/block1.png' className='modal_img' alt='popup2img5'/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between'>
            <img src='assets/block5.png' className='modal_img' alt='popup3img1'/>
            <img src='assets/block2.png' className='modal_img' alt='popup3img2'/>
            <img src='assets/block5.png' className='modal_img' alt='popup3img3'/>
            <img src='assets/block4.png' className='modal_img' alt='popup3img4'/>
            <img src='assets/block2.png' className='modal_img' alt='popup3img5'/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between'>
            <img src='assets/block2.png' className='modal_img' alt='popup4img1'/>
            <img src='assets/block3.png' className='modal_img' alt='popup4img2'/>
            <img src='assets/block1.png' className='modal_img' alt='popup4img3'/>
            <img src='assets/block3.png' className='modal_img' alt='popup4img4'/>
            <img src='assets/block5.png' className='modal_img' alt='popup4img5'/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between'>
            <img src='assets/block5.png' className='modal_img' alt='popup5img1'/>
            <img src='assets/block1.png' className='modal_img' alt='popup5img2'/>
            <img src='assets/block5.png' className='modal_img' alt='popup5img3'/>
            <img src='assets/block2.png' className='modal_img' alt='popup5img4'/>
            <img src='assets/block3.png' className='modal_img' alt='popup5img5'/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-6 d-flex justify-content-start'>
            <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
              <button className='modal_button_custom' onClick={handleButtonClick}>Upload image</button>
            </div>
            <div className='col-6 d-flex justify-content-end'>
              <button className='modal_button_custom'>Past image URL</button>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12'>
              <img src='assets/OrImage.png' className='img-fluid' alt='Imge'/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12'>
            <button className='modal_button_custom w-100'>Search Memes</button>
            </div>
          </div>
          <div className='row nt-3'>
            <div className='col-12 d-flex gap-3 modal_checkbox'>
            <div className="checkbox-container">
    <input type="checkbox" id="myCheckbox"/>
    <label for="myCheckbox">Indude NSFW</label>
  </div>
  <div className="checkbox-container">
    <input type="checkbox" id="myCheckbox"/>
    <label for="myCheckbox">Transprant Background</label>
  </div>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12'>
            <button className='modal_button_custom w-100'>Recent Templates</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
<Footer></Footer>
    </div>
  );
}

export default HomePage;
