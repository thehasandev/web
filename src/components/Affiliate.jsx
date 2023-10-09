import React, { useState } from 'react'
import Container from './Container'

import {BiDollar} from "react-icons/bi"
import { AiFillSetting,AiOutlineClose} from "react-icons/ai"
import {IoMdAdd} from "react-icons/io"
import { Link } from 'react-router-dom'
function Affiliate() {
 const [modal,setModal] =useState(false)


  return (
    <>
    <div className={`px-4 xl:px-0 ${modal && "bg-[gray] h-screen blur-[2px]"}`}>
    <section className='mt-5'>
        <Container>
          <h2 className='font-roboto mb-8 font-bold text-3xl text-[#444444]'>Affiliate</h2>
          <div className='flex flex-wrap justify-center md:justify-start gap-5'>
            <div className='w-[400px] bg-[#292933] py-10 flex justify-center items-center'>
                <div className='text-center'>
                    <span className='flex justify-center'>
                      <BiDollar className='font-roboto font-bold text-5xl text-white '/>
                    </span>
                    <h3 className='font-roboto mt-2 mb-3 font-normal text-xl text-white'>Affiliate Balance</h3>
                    <h1 className='font-roboto font-bold text-5xl text-white'>$10.000</h1>
                </div>
            </div>

                  <div className='w-[400px] bg-[#DFDFE6] hover:bg-[#292933] group duration-200  py-10 flex justify-center items-center'>
              <Link to="/configer-setting">
                      <div className='text-center'>
                          <div className='h-[80px] w-[80px] bg-[#292933] group-hover:bg-white group-hover:text-[#292933] duration-200 rounded-full mx-auto flex items-start justify-center'>
                            <AiFillSetting className='font-roboto font-bold text-5xl h-full text-white  group-hover:text-[#292933] duration-200'/>
                          </div>
                          <h3 className='font-roboto mt-2 mb-3 font-normal text-xl text-[#111111] group-hover:text-white duration-200'>Configure Payout</h3>
                        
                      </div>
              </Link>
                  </div>

            <div onClick={()=>{setModal(!modal)}} className='w-[400px] bg-[#DFDFE6] hover:bg-[#292933] group duration-200 py-10 flex justify-center items-center'>
                <div className='text-center'>
                    <div className='h-[80px] w-[80px] bg-[#292933] group-hover:bg-white group-hover:text-[#292933] duration-200 rounded-full mx-auto flex items-start justify-center'>
                      <IoMdAdd className='font-roboto cursor-pointer  font-bold text-5xl h-full text-white group-hover:text-[#292933] duration-200'/>
                    </div>
                    <h3 className='font-roboto mt-2 mb-3 font-normal text-xl text-[#292933] group-hover:text-white duration-200'>Affiliate Withdraw Request</h3>
                   
                </div>
            </div>

          </div>

        </Container>
    </section>

    <section className='my-12'>
        <Container>
            <div className='flex justify-between items-center border-solid border border-[#444444] p-4'>
                <div className='md:w-9/12 w-1/2'>
                  <textarea className='w-full border border-solid border-[#DFDFE6]'></textarea>
                </div>
                <div className='md:w-2/12'>
                  <button className='bg-[#D00906] py-4 px-16 font-roboto text-white text-lg font-medium'>Copy Url</button>
                </div>
            </div>
        </Container>
    </section>


         
    





    </div>
         
         {
          modal &&
              <div className={`md:w-[700px] w-[400px] bg-white py-10 px-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}>
                <h2 className='font-roboto  font-normal text-sm md:text-3xl text-[#111111] flex justify-between items-center'>Affiliate Withdraw Request  <AiOutlineClose onClick={()=>{setModal(false)}} className='cursor-pointer'/></h2>
               
                <label className='mr-5 font-roboto   font-normal text-xl text-[#111111]'>Amount *</label>
                <input type="text" className='md:w-[500px] px-5 py-4 my-5 border-solid border border-[#666666]'/>
                <div className='flex justify-end mr-8'>
                  <button className='bg-[#D00906] py-4 md:px-16 px-8 font-roboto text-white text-lg font-medium'>Confirm</button>  
                </div>
              </div>
         }
    </>
  )
}

export default Affiliate