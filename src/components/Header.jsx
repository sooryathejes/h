import React from 'react'
import './Fonts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



function Header() {
  return (
    <div>
      <nav className='hidden xl:block  w-full h-10 bg-blue-500 xl:h-[55px]'>
        <div className='flex'>
          <div className='flex xl:gap-[10px]'>
            {/* logo---start */}
            <div className='flex   xl:ms-[390px] xl:py-[10px] xl:w-[75px] xl:h-[35px]'>
              <div className=''>
                <a href="#">
                  <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                    alt=""
                    className='xl:w-[75px] xl:h-[20px] '
                  />
                </a>
                <div className='flex xl:gap-[3px] xl:w-[75px] xl:h-[15px] '>
                  <a className='a text-white text-sans text-italic xl:text-[11px]' href="#">
                    Explore</a>
                  <span style={{ color: 'rgb(255, 229, 0)' }} className='b text-yellow-300 xl:text-[11px] '>Plus</span>

                  <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" className='xl:w-[10px] xl:h-[10px] xl:mt-[2px]' />

                </div>
              </div>
            </div>
            {/* logo---end */}

            {/* search--start */}
            <div className='flex shadow-lg items-center rounded-sm'>
              <input
                type="text"
                placeholder='mobiles'
                className='text-black xl:w-[523px] xl:h-[37px] placeholder:pl-3 placeholder:text-[12px] placeholder:text-black'
              />
              <button className='bg-white xl:w-[42px] xl:h-[37px]'>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className=''
                  style={{ color: "#075ced" }}
                />
              </button>
            </div>

            {/* search ---end*/}
            <div className=''>
              <div className='xl:py-[10px] xl:mt-0 xl:ms-[28px]'>
                <button className='nav-fonts bg-white text-blue-600 font-sans xl:w-[123px] xl:h-[31px] xl:text-[16px] '>
                  Login
                </button>
              </div>
            </div>
            <ul className='nav-fonts flex gap-[35px] ms-[29px] text-white items-center'>
              <li >Become a Seller</li>


              <li class="flex text-white gap-1">
                More
                <svg
                  className=" h-4  xl:mt-[3px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.838l3.71-3.61a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>              </li>



              <li className="flex space-x-2 items-center ">
                <svg className="GAbRIN mt-1" width="16" height="15.8" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="cziJ98"
                    d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                    fill="#fff"
                  />
                </svg>
                <span>Cart</span>
              </li>
            </ul>


          </div>
        </div>
      </nav>
      {/* -------------------------------------------------------------------------------------------------responsive----------------------------------------------------- */}
      <nav className='flex xl:hidden bg-white w-full border border-b boder-1 h-13' >
        <div className='flex items-center justify-left'>
          <div className='flex w-[42px] justify-center items-center flex-shrink-0'>
            <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg" className='justify-center'><path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
          </div>
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-ea579c.png" alt="" className='w-[23px] h-[23px]' />
          <div className='flex pl-[12px] w-[81px] text-[16px] items-center font-roboto'>
            mobiles
          </div>
        </div>
        <div className='flex items-center justify-end w-full'>
          <div className='flex w-[42px] h-[50px] justify-center items-center flex-shrink-0'>
            <svg height="30" width="30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.0012 0H0.0012207V32H32.0012V0Z"></path>
              <path d="M15.0012 21.9999C18.8671 21.9999 22.0011 18.8659 22.0011 14.9999C22.0011 11.134 18.8671 8 15.0012 8C11.1352 8 8.00122 11.134 8.00122 14.9999C8.00122 18.8659 11.1352 21.9999 15.0012 21.9999Z" stroke="#111112" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M19.9524 19.95L24.0024 24" stroke="#111112" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>

          <div className='flex w-[42px] h-[50px] justify-center items-center flex-shrink-0'>
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 23H8.56185C8.32766 23 8.1009 22.9178 7.9211 22.7678C7.7413 22.6177 7.61987 22.4093 7.57797 22.1789L4.2402 3.82112C4.19831 3.5907 4.07688 3.3823 3.89708 3.23225C3.71728 3.08219 3.49052 3 3.25633 3H1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M9 28C10.3807 28 11.5 26.8807 11.5 25.5C11.5 24.1193 10.3807 23 9 23C7.61929 23 6.5 24.1193 6.5 25.5C6.5 26.8807 7.61929 28 9 28Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M24 28C25.3807 28 26.5 26.8807 26.5 25.5C26.5 24.1193 25.3807 23 24 23C22.6193 23 21.5 24.1193 21.5 25.5C21.5 26.8807 22.6193 28 24 28Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M5 8H26.8018C26.9483 8 27.0929 8.03218 27.2256 8.09425C27.3583 8.15633 27.4757 8.2468 27.5695 8.35925C27.6634 8.4717 27.7314 8.6034 27.7687 8.74504C27.8061 8.88667 27.8119 9.03478 27.7857 9.17889L26.1493 18.1789C26.1074 18.4093 25.986 18.6177 25.8062 18.7678C25.6264 18.9178 25.3996 19 25.1654 19H7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>

          <div className='flex w-[90px] justify-center'>
            <span className='text-[16px] font-roboto '>Login</span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
