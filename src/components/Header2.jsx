import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Fonts.css'


function Header2() {
  return (
    <div>
      <div className='hidden xl:block xl:w-full xl:h-[40px] bg-white z-10  '>
        <ul className='two head-text flex gap-[50px] ms-[355px]  text-[14px] leading-5 '>
          <li className='mt-[8px] flex items-center '>Electronics <FontAwesomeIcon icon={faAngleDown} style={{ color: "#6f6d6d", }} className='w-[10px] h-[10px] ms-1' /> </li>
          <li className='mt-[8px]'>TVs & Appliances<FontAwesomeIcon icon={faAngleDown} style={{ color: "#6f6d6d", }} className='w-[10px] h-[10px] ms-1' /> </li>
          <li className='mt-[8px]'>Men<FontAwesomeIcon icon={faAngleDown} style={{ color: "#6f6d6d", }} className='w-[10px] h-[10px] ms-1' />  </li>
          <li className='mt-[8px]'>Women<FontAwesomeIcon icon={faAngleDown} style={{ color: "#6f6d6d", }} className='w-[10px] h-[10px] ms-1' /> </li>
          <li className='mt-[8px]'>Baby & Kids<FontAwesomeIcon icon={faAngleDown} style={{ color: "#6f6d6d", }} className='w-[10px] h-[10px] ms-1' /> </li>
          <li className='mt-[8px]'>Home & Furniture <FontAwesomeIcon icon={faAngleDown} style={{ color: "#6f6d6d", }} className='w-[10px] h-[10px] ms-1' /> </li>
          <li className='mt-[8px]'>Sports,Books & More<FontAwesomeIcon icon={faAngleDown} style={{ color: "#6f6d6d", }} className='w-[10px] h-[10px] ms-1' /> </li>
          <li className='mt-[8px]'>Flights</li>
          <li className='mt-[8px]'>Offer Zone</li>

        </ul>
      </div>
      {/* -----------------------------------------------------------------------------------------------responsive------------------------------------------------------------ */}
      <div className='flex xl:hidden w-full h-[48px] bg-white items-center justify-center'>
        <div className='w-1/2 flex items-center justify-center'>
          <svg width="20" height="20" viewBox="0 0 256 256">
            <path fill="none" d="M0 0h256v256H0z"></path>
            <path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="m144 168 40 40 40-40M184 112v96M48 128h72M48 64h136M48 192h56"></path>
          </svg>
          <p className='header-two pl-[8px] font-roboto '>Sort</p>
        </div>

        <div className='w-[1px] h-5 bg-gray-500 flex justify-center'>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
            <svg width="20" height="20" viewBox="0 0 256 256">
              <path fill="none" d="M0 0h256v256H0z"></path>
              <path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M148 172H40M216 172h-28"></path>
              <circle cx="168" cy="172" r="20" fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle>
              <path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M84 84H40M216 84h-92"></path>
              <circle cx="104" cy="84" r="20" fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle>
            </svg>
            <p className='header-two pl-[8px] font-roboto '>Filter</p>
        </div>


      </div>
      <hr />

    </div>
  )
}

export default Header2

