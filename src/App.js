import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const info = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam illo neque mollitia aut quo nobis consequatur aliquam voluptate perferendis excepturi.";
  const category = "Sneaker";

  return (
    
    <div className='container'>
      <div className='row justify-content-center shadow my-5'>
        <div className='col col-lg-6 col-md-6 col-12 colImg p-0'>
          <div className="foto m-auto d-block">
            <img src="img/piero2.jpg" alt="" />
          </div>
        </div>
        <div className='col col-lg-6 col-md-6 col-12 colDesk'>
          <div className="deskripsi px-4 py-lg-0 py-md-0 py-3">
            <p className='Cate'>{category}</p>
            <h1 className='title'>Piero Terraflex</h1>
            <p className='price mt-2'>Rp.250.000</p>
            <p className="info">{info}</p>
            <button className='btn pb-2 mb-4 px-3 shadow mt-lg-0 mt-md-0 mt-2'>View details <i class="bi bi-chevron-right"></i></button>
            <p className='btn-bott mt-lg-3 mt-md-1 mt-3 text-lg-start text-md-start text-end'>
              <a href='' className='px-2 py-1'><i class="bi bi-instagram"></i></a>
              <a href='' className='px-2 py-1'><i class="bi bi-facebook"></i></a>
              <a href='' className='px-2 py-1'><i class="bi bi-whatsapp"></i></a>
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
