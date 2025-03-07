import React from 'react';
import logo1 from '../assets/Container.png';
import logo2 from '../assets/Container (1).png';
import logo3 from '../assets/Container (2).png';
import logo4 from '../assets/Container (3).png';
import logo5 from '../assets/Container (4).png';
import logo6 from '../assets/Container (5).png';

function Clients() {
  return (
    <section className="text-center py-4">
      <div className="text-[35px] font-semibold text-black">
        <span className="bg-gradient-to-r from-[#80BBEB] via-[#89A3D5] to-[#254A76] bg-clip-text text-transparent font-extrabold">
          64.0k
        </span>
        &nbsp;businesses and individuals have <br /> signed with&nbsp;
        <span className="bg-gradient-to-r from-[#80BBEB] via-[#89A3D5] to-[#254A76] bg-clip-text text-transparent font-extrabold">
          DocuTech
        </span>
      </div>

      {/* Logo Row */}
      <div className="flex justify-center items-center gap-8 mt-8">
        <img src={logo1} alt="Client 1" className="h-[28px] w-[162px] object-contain" />
        <img src={logo2} alt="Client 2" className="h-[52px] w-[162px] object-contain" />
        <img src={logo3} alt="Client 3" className="h-[60px] w-[162px] object-contain" />
        <img src={logo4} alt="Client 4" className="h-[16px] w-[162px] object-contain" />
        <img src={logo5} alt="Client 5" className="h-[62px] w-[162px] object-contain" />
        <img src={logo6} alt="Client 6" className="h-[34px] w-[162px] object-contain" />
      </div>
    </section>
  );
}

export default Clients;
