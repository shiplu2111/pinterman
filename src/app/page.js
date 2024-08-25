import { RiHotelLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ImCoinDollar } from "react-icons/im";
import { PiGraduationCapLight } from "react-icons/pi";
export default function Home() {
  return (
    <main>
      <section className=" bg-gray-900 text-white min-h-screen">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Welcome To  PINTARMAN </h2>

      <p className="mt-4 text-gray-300">
      One Stop Solutions Center
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
    

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="https://wbtravelclub.com
"
      >
       
        <RiHotelLine  className='size-8 text-pink-500' />

        <h2 className="mt-4 text-xl font-bold text-white">Hotel & Tourism</h2>

        <p className="mt-1 text-sm text-gray-300">
        If you want to book your hotel or homestay, want to plan for a holiday tour, buy a airlines ticket, ferry ticket, bus ticket or package tour program. This is the right place to find out more please click the link below.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="https://buyonline.net.my/"
      >
        <MdOutlineShoppingCart  className='size-8 text-pink-500' />
       

        <h2 className="mt-4 text-xl font-bold text-white">Online Shop
 </h2>

        <p className="mt-1 text-sm text-gray-300">
        Looking for home & life style products you can buy online from PINTARMAN Online Shop. There are so many choices you choose your style or which one you like the most. Our store having all quality products.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="https://education.pintarman.com/"
      >
        <PiGraduationCapLight   className='size-8 text-pink-500' />

        <h2 className="mt-4 text-xl font-bold text-white">Education</h2>

        <p className="mt-1 text-sm text-gray-300">
        If you looking for online education to create your own skills in IT or want to learn any foreign language this the perfect place for you. We are proving online education for IT & Language courses. Education consultancy etc.
        </p>
      </a>
      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="https://digitalbdt.org/"
      >
        
        <ImCoinDollar  className='size-8 text-pink-500' />

        <h2 className="mt-4 text-xl font-bold text-white">Digital Finance</h2>

        <p className="mt-1 text-sm text-gray-300">
        This is the modern age of Digital Finance system and by 2030 if you don’t associate with any digital finance system you will be handicapped in the current modern society. We are providing digital asset & tools.
        </p>
      </a>
     
    </div>

    <div className="mt-12 text-center shadow-pink-500/10">
    <span class="relative flex justify-center">
  <div
    class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50"
  ></div>

  <span class="relative z-10  px-6">Copyright © 2001-2024 Zaas Management Sdn Bhd (1001860-X)</span>
</span>
    
    </div>
  </div>
</section>
    </main>
  );
}
