import React from 'react'

function Yes() {
  let age = 30;
  return (
    <div>
      <div className='hidden xl:block h-[65px] w-[1385px] bg-white '>
        <div className='p-[16px]'>
          <div className='flex items-center gap-[8px]' >
            <span className='text-[16px] font-sans ' >Did you find what you were looking for?</span>
            <span className='border border-1 py-[6px] px-[28px] text-[14px] '>
              Yes

            </span>
            <span className='border border-1 py-[6px] px-[28px] text-[14px]'>
              No

            </span>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Yes
