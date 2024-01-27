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


        <div className='flex justify-center'> 
            <div className='pl-[100px]'>
            <h1 className="w-[699px] text-stone-50 text-[32px] font-normal    ">Risk Selection</h1>
            <p className="w-[699px] text-stone-50 text-[21px] font-normal ">Select your investment pln according to your risk appetite. We provide you with three models to invest in. You can use one or many. Trade however you wish.
<br/></p>


            </div>
            
              <div>
            <Image src="/threecards.png"   width={1200} height={900} />
            </div>
            
        </div>


        <div className="flex ">
          <div>
            <Image src="/phonedash.png" width={977} height={872} alt=""  />
            
          </div>
          <div>
            <h1 className='text-white font-inter text-[48px] font-normal 
'> Selecting Timespan</h1>
            <p className='text-white font-inter text-base font-normal text-[21px] 
'>The risk model automatically selects a time span for you but you can extend the time as you wish within the investment plan that you chose.
</p>
          </div>

        </div>

    </div>
  )
}

export default Three