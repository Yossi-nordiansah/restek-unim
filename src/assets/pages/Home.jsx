import React from 'react';
import bgHero from '../image/bg-img.png'

const Home = () => {
  return (
    <div className=''>
      <div style={{ backgroundImage: `url(${bgHero})` }} className='h-screen bg-center bg-cover text-center'>
        <div className='w-full h-full bg-black/50 flex items-center'>
          <div className='w-full'>
            <p className='text-white font-pollerone'>Wellcome To Our Website</p>
            <h1 className='text-white text-2xl font-poppins_extrabold'>UKM RESTEK UNIM</h1>
          </div>
        </div>
      </div>
      <div>
        <div className='bg-gradient-to-b from-[#1C1235] to-[#101011] text-white py-5 w-full'>
          <div className='mb-4'>
            <h1 className='text-center font font-rubikmono_one'>Visi</h1>
            <p className='px-3 text-center'>Terwujudnya wadah pengembangan ilmu di bidang Rekayasa Teknologi bagi
              mahasiswa UNIM.
            </p>
          </div>
          <div  className='mb-4'>
            <h1 className='text-center font font-rubikmono_one'>Misi</h1>
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
          <h1 className='text-center font font-rubikmono_one'>Divisi</h1>
          <div>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home