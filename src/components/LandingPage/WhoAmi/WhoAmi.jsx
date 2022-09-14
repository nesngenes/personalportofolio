import React from 'react'
import HeaderSocials from '../HeaderSocials/HeaderSocials'

import './styles.css'

const WhoAmi = () => {
  return (
    <div className='who-am-i'>
        <h2 className='scrool-down'>Scrool Down</h2>

        <div className='brief-intro'>
          <h2>Who am i </h2>
          <p>Halo! Saya agnes, mahasiswi kelas karyawan jurusan Teknik Informatika universitas esa unggul. Selama 2 tahun terakhir, saya telah belajar mendalami web development dengan menggunakan MongoDB, Express.js, React, dan Node.js. Saya juga akan terus belajar dan berkembang untuk menjadi pribadi maupun developer yang lebih baik.</p>
        </div>

        <HeaderSocials />
    </div>
  )
}

export default WhoAmi