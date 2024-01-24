import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-10'>
        <div>
            <Image src="/LOGO.png" alt='logo' width={120} height={90}/>
    
        </div>
        <div>
            <button className='button-go' >
               <span> Go</span>
            </button>
        </div>
        

        </div>
  )
}

export default Navbar