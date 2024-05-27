import React from 'react'

export const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className=' bg-[#12141e] pt-12 mt-4'>
      {/* <div className="container">
        <div className=" sm:flex items-center justify-between md:gap-8">
          <div className=' w-full sm:w-1/2'>
            <h2 className=' text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
              Do you want to make beautiful and attractive product?
            </h2>
            <a href="#contact" className='flex items-center gap-2'>
              <button className=' bg-primaryColor text-white font-[500] py-2 px-4 rounded-[8px] hover:font-[500]
                             hover:bg-smallTextColor hover:text-white ease-in duration-700'>

                <i className="ri-mail-line"></i> Hire Me

              </button>
            </a>
          </div>
          <div className=' w-full sm:w-1/2'>
            <p className=' text-gray-300 leading-7 mt-4 sm:mt-0'>
              Builiding a project my client love have allways my passion.
              Being i web development industry for over 4years and serving more than 7milion happy client worldwide.
              I'm allways motivated to do more!
            </p>
            <div className=' flex gap-9 items-center mt-14'>
              <span
                className=' text-gray-300 text-[16px] font-[500]'>
                Follow me
              </span>
              <span >
                <a href="" className=' text-gray-300 text-[18px] font-[600]'>
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a href="" className=' text-gray-300 text-[18px] font-[600]'>
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a href="" className=' text-gray-300 text-[18px] font-[600]'>
                  <i className="ri-youtube-line"></i>
                </a>
              </span>
              <span>
                <a href="" className=' text-gray-300 text-[18px] font-[600]'>
                  <i className="ri-facebook-line"></i>
                </a>
              </span>

            </div>
          </div>

        </div>
        <div>
          <ul className=' flex items-center justify-center gap-10 mt-10'>
            <li><a className=' text-gray-400 font-[600]' href="#about">About</a></li>
            <li><a className=' text-gray-400 font-[600]' href="#services">Services</a></li>
            <li><a className=' text-gray-400 font-[600]' href="#portifolio">projects</a></li>
            <li><a className=' text-gray-400 font-[600]' href="#contact">Contact</a></li>
          </ul>
        </div>
      </div> */}

      {/* ======================== Footer bottom ======================= */}

      <div className=' bg-[#1b1e29] py-5 mt-14'>
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              {/* <div className="flex items-center gap-[10px]">
                <span className="w-[35] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full py-2 px-2 flex items-center justify-center">
                  B
                </span>
                <div className="leading-[20px]">
                  <h2 className='text-xl text-gray-400 font-[700]'>Bahati</h2>
                  <p className=' text-gray-400 font-[500] text-[16px]'>Personal</p>
                </div>
              </div> */}
            </div>
            <div>
              <p className=' text-gray-400 text-[14px]'>Copyright {year} developed by Omega All right reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


