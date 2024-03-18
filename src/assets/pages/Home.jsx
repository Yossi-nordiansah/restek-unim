import React from 'react';
import bgHero from '../image/bg-hero.jpg';
import tekterImg from '../image/tekter.png';
import desainImg from '../image/desain.png';
import crs1 from '../image/crs1.jpg';
import crs2 from '../image/crs2.jpg';
import crs3 from '../image/crs3.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false
  }

  return (
    <div className=''>
      <div className='h-screen relative'>
        <div className='w-full absolute z-10 flex items-center h-screen'>
          <div className='w-full'>
            <p className='text-white font-pollerone drop-shadow-lg text-center xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-base text-sm '>Wellcome To Our Website</p>
            <h1 className='text-white xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-xl poppins-extrabold drop-shadow-lg text-center '>UKM RESTEK UNIM</h1>
          </div>
        </div>
        <Slider {...settings} className='overflow-x-hidden overflow-y-hidden h-full w-full'>
          <div>
            <img src={crs3} alt="" className='brightness-[.4] h-screen object-cover w-full' />
          </div>
          <div>
            <img src={crs2} alt="" className='brightness-[.4] h-screen object-cover w-full' />
          </div>
          <div>
            <img src={crs1} alt="" className='brightness-[.4] h-screen object-cover w-full' />
          </div>
        </Slider>
      </div>

      <div>
        <div className='bg-gradient-to-b from-[#1C1235] to-[#101011] text-white py-5 w-full'>
          <div className='mb-4'>
            <h1 className='text-center font rubik-mono-regular text-lg'>Visi</h1>
            <p className='px-3 text-center'>Terwujudnya wadah pengembangan ilmu di bidang Rekayasa Teknologi bagi
              mahasiswa UNIM.
            </p>
          </div>
          <div className='mb-8'>
            <h1 className='text-center font rubik-mono-regular text-lg'>Misi</h1>
            <ol className='px-3 text-center'>
              <li>1. Menampung mahasiswa UNIM untuk menyalurkan minat, bakat, dan
                ilmu praktisi pengetahuan di bidang Rekayasa Teknologi.
              </li>
              <li>2. Menampung mahasiswa UNIM dalam menyalurkan hasil-hasil
                penelitian yang telah dibuat/dipublikasikan di seminar nasional.
              </li>
            </ol>
          </div>
          <div>
            <h1 className='text-center font rubik-mono-regular text-lg'>Divisi</h1>
            <div className='flex flex-col justify-center py-5 w-full'>
              <div id='tekter-card' className='md:w-[80%] mx-auto md:flex flex-row border'>
                <div className='md:w-[70%] w-[80%] md:ml-0 mx-auto flex items-center'>
                  <div className='border'>
                  <h1 className='w-full font-bold text-white top-2 text-2xl mb-5 text-center md:text-left'>TEKNOLGI TERPADU</h1>
                  <p className='text-justify text-xl'>Divisi Teknologi Terpadu merupakandivisi yang
                    bertugas mengembangkan dan meneliti
                    software komputer seperti operasi sistem
                    aplikasi dan menciptakan project software
                    demi kepentingan penelitian yang lebih efisien</p>
                  </div>
                </div>
                <img src={tekterImg} alt="" className='mt-10 md:w-[30%] mx-auto border' />
              </div>
              <div id='kominfo-card' className='w-[80%] mx-auto rounded-xl relative flex gap-20 flex-row-reverse'>
                <div className='w-[70%] flex items-center'>
                  <div>
                  <h1 className='w-full font-bold text-white top-2 text-2xl mb-5'>KOMINFO</h1>
                  <p className='text-justify pb-4 text-xl'>Divisi Kominfo merupakan divisi yang
                  bertugas untuk membuat project berupa desain
                  representatif, informatif, dan komunikatif
                  untuk mendukung program dan kegiatan Kominfo.
                  dan mengikuti perkembangan tren desain
                  terkini untuk menciptakan desain yang up to date.</p>
                  </div>
                </div>
                <img src={desainImg} alt="" className='mt-10 w-[30%] mx-auto' />
              </div>

{/*               
              <div id='tekter-card' className='w-[90%] rounded-xl relative '>
                <h1 className='text-center absolute top-2 font-bold text-white text-xl  left-1/2 -translate-x-1/2'>KOMINFO</h1>
                <img src={desainImg} alt="" className='mt-10 w-[80%] mx-auto' />
                <p className='px-4 text-justify pb-4'>
                  Divisi Kominfo merupakan divisi yang
                  bertugas untuk membuat project berupa desain
                  representatif, informatif, dan komunikatif
                  untuk mendukung program dan kegiatan Kominfo.
                  dan mengikuti perkembangan tren desain
                  terkini untuk menciptakan desain yang up to date.</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;