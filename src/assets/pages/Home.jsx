import React from 'react';
import bgHero from '../image/bg-hero.jpg';
import tekterImg from '../image/tekter.png';
import desainImg from '../image/desain.jpg';


const Home = () => {
  return (
    <div className=''>
      <div style={{ backgroundImage: `url(${bgHero})` }} className='h-screen bg-center bg-cover text-center'>
        <div className='w-full h-full bg-black/60 flex items-center'>
          <div className='w-full'>
            <p className='text-white font-pollerone drop-shadow-lg'>Wellcome To Our Website</p>
            <h1 className='text-white text-2xl poppins-extrabold drop-shadow-lg'>UKM RESTEK UNIM</h1>
          </div>
        </div>
      </div>
      <div>
        <div className='bg-gradient-to-b from-[#1C1235] to-[#101011] text-white py-5 w-full'>
          <div className='mb-4'>
            <h1 className='text-center font rubik-mono-regular'>Visi</h1>
            <p className='px-3 text-center'>Terwujudnya wadah pengembangan ilmu di bidang Rekayasa Teknologi bagi
              mahasiswa UNIM.
            </p>
          </div>
          <div className='mb-8'>
            <h1 className='text-center font rubik-mono-regular'>Misi</h1>
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
            <h1 className='text-center font rubik-mono-regular'>Divisi</h1>
            <div className='flex flex-col justify-center items-center gap-8 py-5 w-full border '>
              <div id='tekter-card' className='w-[90%] rounded-xl relative border'>
                <h1 className='text-center absolute font-bold text-white top-2 text-xl left-1/2 -translate-x-1/2'>TEKNOLGI TERPADU</h1>
                <img src={tekterImg} alt="" className='mt-10 w-[80%] mx-auto' />
                <p className='px-4 text-justify pb-4'>Divisi Teknologi Terpadu merupakandivisi yang
                  bertugas mengembangkan dan meneliti
                  software komputer seperti operasi sistem
                  aplikasi dan menciptakan project software
                  demi kepentingan penelitian yang lebih efisien</p>
              </div>
              <div id='tekter-card' className='w-[90%] rounded-xl relative border'>
                <h1 className='text-center absolute top-2 font-bold text-white text-xl  left-1/2 -translate-x-1/2'>KOMINFO</h1>
                <img src={tekterImg} alt="" className='mt-10 w-[80%] mx-auto' />
                <p className='px-4 text-justify pb-4'>
                  Divisi Kominfo merupakan divisi yang
                  bertugas untuk membuat project berupa desain
                  representatif, informatif, dan komunikatif
                  untuk mendukung program dan kegiatan Kominfo.
                  dan mengikuti perkembangan tren desain
                  terkini untuk menciptakan desain yang up to date.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home