import Image from 'next/image'
import React from 'react'

const Three = () => {
  return (
    <div className="containerThree">
        <div className='flex '>
            <div className='flex-1 pl-[20px]'>
                <Image src="/started.png" width={369} height={338} />
            </div>
            <div>
            <h1 className="w-[699px] text-stone-50 text-5xl font-normal  leading-[73.69px] ">Getting Started</h1>
            <p className="w-[699px] text-stone-50 text-[21px] font-normal  leading-loose">Select Go to start using mini trade ,and make passive income with our preselected automated trading bots and other investment platforms aggregated to one place for your convenience. Grow your savings on mini trade with our curated savings options and rest assured that your assets will grow on minitrade.</p>
            </div>
        </div>


        <div className='flex justify-center gap-[100px]'> 
            <div>
            <h1 className="w-[699px] text-stone-50 text-[32px] font-normal  leading-[49px] pt-[100px] ">Risk Selection</h1>
            <p className="w-[699px] text-stone-50 text-[21px] font-normal  leading-loose flex-1">Select your investment pln according to your risk appetite. We provide you with three models to invest in. You can use one or many. Trade however you wish.
<br/></p>


            </div>
            <div className='pt-[100px]'>
            <Image src="/threecards.png" width={758} height={1195}  />
            </div>
        </div>


        <div></div>
    </div>
  )
}

export default Three