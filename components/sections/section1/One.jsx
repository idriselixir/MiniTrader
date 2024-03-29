import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";

const One = () => {
  return (
    <div className="containerOne">
            <Navbar />
    <div className="pl-[130px] flex flex-col pt-[89px] gap-7">
    <div class="text-white text-7xl font-extrabold font-['Inter'] leading-[108px]">World's first intuitive <br/>way to grow & <br/>Manage Funds</div>

    

        
<div class="text-stone-100 text-4xl font-medium font-['Inter'] leading-[54px]">Growing wealth or savings is as important as <br/>having a job even if you have just one dollar as savings.</div>

<div>
    <button className="button-second">
       <span className="go">Go</span>
       <Image src="/arow.png"  width={24} height={24} />

    </button>
</div>
    </div>
  

    </div>
  );
};

export default One;
