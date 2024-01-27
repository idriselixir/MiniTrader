import Footer from '@/components/footer/Footer'
import Image from 'next/image'
import React from 'react'

const Four = () => {
  return (
    <div className='containerFour'>
      
        <div className='flex'>
            <div>
                <h1 className='text-white font-inter text-[48px] font-normal'>Select Trading Mode</h1>
                <p className='text-white font-inter text-base font-normal text-[21px]'>You want to trade by yourself like a pro? Go ahead. You want to copy the pros as they trade? We got you. You can Do It Yourself, useAutomated trading or choose from a pool of investment portfolios.<br/>
</p>
            </div>
            <div>
              <Image src="/Select.png" width={1022} height={575} />
            </div>
        </div>

        {/* -------------------------- */}
        <div className='flex  gap-[10rem]'  >
          <div>
            <Image src="/phonefile.png" width={500} height={300} alt="" />
          </div>
          <div>
            <h1 className='text-white font-inter text-[48px] font-normal'>Connect Your Wallet</h1>
            <p class="w-[441px] text-stone-50 text-[21px] font-normal ">After selecting  your risk module and trading mode, you can go ahead and connect  your wallet.</p>

          </div>
        </div>
        <div className='flex justify-center gap-10 flex-col'>
          <div className='flex justify-center gap-10'>
         <div>
          <h1 className='text-white font-inter text-[48px] font-normal'>Monitor Trade Progress & Withdraw funds</h1>
          <p class="w-[699px] text-stone-50 text-[21px] font-normal  ">Watch the growth steps that your investment grow by each day through a nice simple animated graph that's easy to understand and interpret .
<br/>Mini trade allows you to make more than one investment and you can easily switch between monitoring the different investments 
<br/></p>

          </div>
          <div className=''>
            <Image src="/last.png" width={273} height={377} />
          </div>
          </div>
        
        <Footer />
        </div>
        </div>
        
        
  )
}

export default Four