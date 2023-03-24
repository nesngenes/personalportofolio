import React from 'react'
import HeaderSocials from '../HeaderSocials/HeaderSocials'

import './styles.css'

const WhoAmi = () => {
  return (
    <div className='who-am-i'>
        <h2 className='scrool-down'>Scrool Down</h2>

        <div className='brief-intro'>
          <h2>Who am i </h2>
          <p>Hai! Saya Agnes, mahasiswa kelas karyawan jurusan Teknik Informatika Universitas Esa Unggul. Sekarang (pada semester 5 ini) saya sedang cuti kuliah dikarenakan faktor ekonomi dan saat ini saya sedang membutuhkan pekerjaan. <br/> <br />Saya memang belum memiliki pengalaman bekerja, tetapi saya telah mempelajari Web Development dengan menggunakan MongoDB, Express.js, React JS, dan Node.js selama kurang lebih 2 tahun. Untuk saat ini saya sedang berfokus mendalami Frontend dengan menggunakan CSS dan Figma sebagai UI design toolnya. Saya juga akan terus belajar dan berkembang menjadi pribadi maupun developer yang lebih baik.</p>
        </div>

        <HeaderSocials />
    </div>
  )
}

export default WhoAmi