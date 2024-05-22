import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
function imgToTxt() {
  return (
    <div id='navbar_top' className='background-color_custom'>
    <Header></Header>
    <section>
    <div className='container mt-5'>
    <div className='row justify-content-center'>
        <div className='col-lg-6 col-12'>
            <div className='d-flex text-center justify-content-center'>
            <h1>Free AI Image Generator Turn Text to Image</h1>
            </div>
        </div>
    </div>
    <div className='row justify-content-center'>
        <div className='col-lg-6 col-12'>
            <p className='page-1-text'>Capturing life's quirks and turning them into shareable memes, that's Michi Meme Maker's specialty</p>
        </div>
    </div>
    <div className='row justify-content-center'>
    <div className='col-lg-6 col-12 d-flex justify-content-center'>
        <button className='custom_button_1'>Creat your meme</button>
        </div>
    </div>
</div>
    </section>
    <Footer></Footer>
    </div>
  );
}

export default imgToTxt;
