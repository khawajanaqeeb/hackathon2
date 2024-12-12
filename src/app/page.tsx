

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="w-[1440px] h-[4835px]  bg-white border-2">
      <Header />
      <div className="w-[1440px] h-[812.53px] border-2">
        <div className="bg-[url('/bit.jpg')] bg-cover bg-center  w-[1440px] h-[1007.93px]  border-2 ">
          <div className="w-[1440px] h-[716.83px] border-2  ">
            <div className="w-[643px] h-[443px] mt-[20%] ml-[739px] rounded-[10px] bg-[#FFF3E3] border-2">
              <h2 className="w-[123px] h-[24px] mt-[10%] ml-[15%] text-[#333333] ">New Arrival</h2>
              <h2 className="w-[400px] h-[127px] ml-[15%] text-[52px] font-bold text-[#B88E2F]">Discover Our New Collection</h2>
              <p className="text-[#333333] font-medium text-lg w-[500px] h-[52px] mt-[10%] ml-[15%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
              <button className="text-[#FFFFFF] bg-[#B88E2F] w-[222px] h-[74px] mt-[2%] ml-[15%] pt-[25px] pr-[72px] pb-[25px] pl-[72px]">BUY Now</button>
            </div>
            <h2 className="w-[300px] h-[48px] mt-[20%] ml-[40%] font-bold text-[#333333] text-[32px]">Browse The Range</h2>
            <p className="text-[#666666] font-normal w-[559px] h-[28.71px]  ml-[36%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
            <div className="flex justify-evenly">
            <div className="mt-[2%]">
              <img src="/mg1.png" alt="dining" width={381} height={480} className="w-[381px] h-[480px] " /><h2 className="ml-[30%] mt-[1%] text-[#333333] text-2xl font-semibold">Dining</h2> 
            </div>
            <div className="mt-[2%]">
              <img src="/mg2.png" alt="living" className="w-[381px] h-[480px] " /><h2 className="ml-[30%] mt-[1%] text-[#333333] text-2xl font-semibold">Living</h2> 
            </div>
            <div className="mt-[2%]">
              <img src="/mg3.png" alt="bed room" className="w-[381px] h-[480px] " /><h2 className="ml-[30%] mt-[1%] text-[#333333] text-2xl font-semibold">Bed Room</h2> 
            </div>
            </div>
                  <div className="w-[1236px] h-[1084px]">
                    <h2 className="w-[269px] h-[48px] text-[#3A3A3A] font-">Our Products</h2>
                  
                  </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
