import React from 'react'
import './Fonts.css'

function Sidebar() {
  return (
    <div>
      <div className='hidden xl:block bg-white w-[270px] text-[18px] ' >
        <div className='filter pt-[16px] pl-[16px] pb-[12px] text-[18px] font-sans '>
          Filters
        </div>
        <hr />
        <div className='p-[16px] ' >
          <div className='cat pb-[5px] text-[12px] font-sans' >
            CATEGORIES
          </div>
          <div className='mob flex items-center  py-[5px] text-[14px] font-sans text-gray-500 gap-1' >
            <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="IZmjtf"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="gray" class="P3pAQJ"></path></svg>
            Mobiles & Accessories
          </div>
          <div className='mobiles py-[5px] text-[14px] ms-2 font-sans pl-[5px]' >
            Mobiles
          </div>

        </div>
        <hr />
        <div className='p-[16px]'>
          <div className='side text-[13px]' >
            PRICE
          </div>
          <div className='mt-[20px]' >

            <input type="range"
              className='w-[238px] h-[13px]' />
          </div>
          <div className="flex items-center justify-between mt-2">
            <input
              type="number"
              min="0"
              placeholder="Min"
              className="border border-gray-300 xl:w-24 xl:h-5 placeholder:xl:text-[14px]"
            />
            <span className="text-[14px] font-sans">to</span>
            <input
              type="number"
              max="30000"
              placeholder="₹30000+"
              className="border border-gray-300 xl:w-24  xl:h-5  placeholder:xl:text-[14px]"
            />
          </div>
        </div>
        <hr />
        <div className='side flex p-[16px] text-[13px]' >
          BRAND
          <svg
            className="flex items-center justify-end w-3  ms-44  "
            fill="none"
            stroke="gray"
            strokeWidth="3"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(90)"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>        </div>
        <hr />
        <div className='p-[16px] flex gap-2' >
          <input type="checkbox" />
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" className='w-[77px] h-[21px] ' />
          <span className=" flex ms-28 items-center justify-center  text-[12px] text-gray-500 border border-1 rounded-full w-[20px] h-[20px] 	">?</span>
        </div>
        <hr />
        <div className='side p-[16px] text-[13px]' >
          BRAND
        </div>
        <hr />
        <div className='side p-[16px] text-[13px]' >
          BRAND
        </div>
        <hr />
        <div className='side p-[16px] text-[13px]' >
          BRAND
        </div>
        <hr />
        <div className='side p-[16px] text-[13px]' >
          BRAND
        </div>
        <hr />
        <div className='side p-[16px] text-[13px]' >
          BRAND
        </div>
        <hr />

      </div>
    </div>
  )
}

export default Sidebar
