import Image from 'next/image'
import React from 'react'

const Three = () => {
  return (
    <div className="containerThree">
        <div className='flex justify-between'>
            <div>
                <Image src="/started.png" width={269} height={238} />
            </div>
            <div>
            <h1 class="w-[699px] text-stone-50 text-5xl font-normal font-['Inter'] leading-[73.69px]">Getting Started</h1>
            <p class="w-[699px] text-stone-50 text-[21px] font-normal font-['Inter'] leading-loose">Select Go to start using mini trade ,and make passive income with our preselected automated trading bots and other investment platforms aggregated to one place for your convenience. Grow your savings on mini trade with our curated savings options and rest assured that your assets will grow on minitrade.</p>
            </div>
        </div>


        <div></div>
        <div></div>
    </div>
  )
}

export default Three