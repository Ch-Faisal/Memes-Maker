import React from 'react';
import '../css/HomePage.css';
import Header from './layout/header';
import Footer from './layout/footer';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function HomePage() {
  return (
    <div className='background-color_custom'>
<Header></Header>
<section>
<div className='container mt-5'>
    <div className='row justify-content-center'>
        <div className='col-lg-6 col-12'>
            <div className='d-flex text-center justify-content-center'>
            <img src='assets/section-1-img-1.png' className='img-fluid custom_width_img'/>
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
    <div className='row'>
        <div className='col-12'>
            <img src='assets/Rectangle4.png' className='w-100 img-fluid custom-img-border-1'/>'
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
        <h5 className='slider_heading'>Mouse Library</h5>
        <Swiper
      modules={[Navigation,A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
    >
      <SwiperSlide><img src='assets/slider-img1.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img1.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img1.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img1.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img1.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img1.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img1.png' width='70' height='70'/></SwiperSlide>
    </Swiper>
        </div>
        <div className='col-lg-6 col-12 custom_slider_color mt-3'>
        <h5 className='slider_heading'>Hats</h5>
        <Swiper
      modules={[Navigation,A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
    >
      <SwiperSlide><img src='assets/slider-img2.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img2.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img2.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img2.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img2.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img2.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img2.png' width='70' height='70'/></SwiperSlide>
    </Swiper>
        </div>
    </div>
    <div className='row'>
        <div className='col-lg-6 col-12 custom_slider_color mt-3'>
        <h5 className='slider_heading'>Face</h5>
        <Swiper
      modules={[Navigation,A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
    >
      <SwiperSlide><img src='assets/slider-img3.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img3.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img3.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img3.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img3.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img3.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img3.png' width='70' height='70'/></SwiperSlide>
    </Swiper>
        </div>
        <div className='col-lg-6 col-12 custom_slider_color mt-3'>
        <h5 className='slider_heading'>Front Accessory</h5>
        <Swiper
      modules={[Navigation,A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
    >
      <SwiperSlide><img src='assets/slider-img4.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img4.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img4.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img4.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img4.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img4.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img4.png' width='70' height='70'/></SwiperSlide>
    </Swiper>
        </div>
    </div>
    <div className='row'>
        <div className='col-lg-6 col-12 custom_slider_color mt-3'>
        <h5 className='slider_heading'>Back Accessory</h5>
        <Swiper
      modules={[Navigation,A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
    >
      <SwiperSlide><img src='assets/slider-img5.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img5.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img5.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img5.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img5.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img5.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img5.png' width='70' height='70'/></SwiperSlide>
    </Swiper>
        </div>
        <div className='col-lg-6 col-12 custom_slider_color mt-3'>
        <h5 className='slider_heading'>OutFit</h5>
        <Swiper
      modules={[Navigation,A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
    >
      <SwiperSlide><img src='assets/slider-img6.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img6.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img6.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img6.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img6.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img6.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img6.png' width='70' height='70'/></SwiperSlide>
    </Swiper>
        </div>
    </div>
    <div className='row'>
        <div className='col-lg-6 col-12 custom_slider_color mt-3'>
        <h5 className='slider_heading'>Pant</h5>
        <Swiper
      modules={[Navigation,A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
    >
      <SwiperSlide><img src='assets/slider-img7.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img7.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img7.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img7.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img7.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img7.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img7.png' width='70' height='70'/></SwiperSlide>
    </Swiper>
        </div>
        <div className='col-lg-6 col-12 custom_slider_color mt-3'>
        <h5 className='slider_heading'>Background</h5>
        <Swiper
      modules={[Navigation,A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
    >
      <SwiperSlide><img src='assets/slider-img8.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img8.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img8.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img8.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img8.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img8.png' width='70' height='70'/></SwiperSlide>
      <SwiperSlide><img src='assets/slider-img8.png' width='70' height='70'/></SwiperSlide>
    </Swiper>
        </div>
    </div>
    <div className='row mt-5 mb-2 justify-content-center'>
        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3'>
            <button className='custom-button-3'><img src='assets/fi_7134699.png' className='me-2'/>Reset File</button>
        </div>
        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3'>
            <button className='custom-button-4'><img src='assets/Group.png' className='me-2'/>Generate Random</button>
        </div>
        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3'>
            <button className='custom-button-5'><img src='assets/fi_7268609.png' className='me-2'/>Download</button>
        </div>
    </div>
</div>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
    <button type="button" className="btn-close1 ms-4" data-bs-dismiss="modal" aria-label="Close"><img src="assets/Vector.png"/></button>
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
            <img src='assets/block1.png' className='modal_img'/>
            <img src='assets/block2.png' className='modal_img'/>
            <img src='assets/block3.png' className='modal_img'/>
            <img src='assets/block2.png' className='modal_img'/>
            <img src='assets/block3.png' className='modal_img'/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between'>
            <img src='assets/block5.png' className='modal_img'/>
            <img src='assets/block4.png' className='modal_img'/>
            <img src='assets/block2.png' className='modal_img'/>
            <img src='assets/block3.png' className='modal_img'/>
            <img src='assets/block5.png' className='modal_img'/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between'>
            <img src='assets/block3.png' className='modal_img'/>
            <img src='assets/block1.png' className='modal_img'/>
            <img src='assets/block3.png' className='modal_img'/>
            <img src='assets/block2.png' className='modal_img'/>
            <img src='assets/block1.png' className='modal_img'/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between'>
            <img src='assets/block5.png' className='modal_img'/>
            <img src='assets/block2.png' className='modal_img'/>
            <img src='assets/block5.png' className='modal_img'/>
            <img src='assets/block4.png' className='modal_img'/>
            <img src='assets/block2.png' className='modal_img'/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between'>
            <img src='assets/block2.png' className='modal_img'/>
            <img src='assets/block3.png' className='modal_img'/>
            <img src='assets/block1.png' className='modal_img'/>
            <img src='assets/block3.png' className='modal_img'/>
            <img src='assets/block5.png' className='modal_img'/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between'>
            <img src='assets/block5.png' className='modal_img'/>
            <img src='assets/block1.png' className='modal_img'/>
            <img src='assets/block5.png' className='modal_img'/>
            <img src='assets/block2.png' className='modal_img'/>
            <img src='assets/block3.png' className='modal_img'/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-6 d-flex justify-content-start'>
              <button className='modal_button_custom'>Upload image</button>
            </div>
            <div className='col-6 d-flex justify-content-end'>
              <button className='modal_button_custom'>Past image URL</button>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12'>
              <img src='assets/OrImage.png' className='img-fluid'/>
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
