import Image from "next/image";
import React from "react";

const Two = () => {
  return (
    <div className="containerTwo">
      <div className="flex-1 pt-[50px] pl-[100px]">
        <Image src="/webstockimage.png" width={559} height={594} />
      </div>

      <div className="flex-1 flex flex-col  gap-[10px]">
        <div className="text-white font-thin text-[50px] ">
          {" "}
          <strong>MiniTrade</strong> is the ‘Web3 Amazon’
          <br />
          for growing your wealth.
        </div>

        <div className="text-white">
          Never miss savings opportunities, staking and even high-performing new
          crypto listings
        </div>
        <div className="text-white font-thin text-[21px]">
          MiniTrade aggregates the best performing assets globally including
          crypto, stocks, managed portfolios, private companies (startups), new
          listings, bonds, staking & savings, and even predictions (gaming,
          betting & etc)
        </div>
        <div>
          <button className="button-third">
            Learn More
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Two;
