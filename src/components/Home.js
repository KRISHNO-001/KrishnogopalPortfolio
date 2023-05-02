import React from 'react'
import profilepic from '../assests/me.jpg'
import { AiOutlineSafetyCertificate, AiOutlineSend } from 'react-icons/ai'
import { FaGraduationCap, FaQuoteRight } from 'react-icons/fa'
import { GrDocumentDownload } from 'react-icons/gr'
import { IoMdSchool } from 'react-icons/io'
import {FaQuoteLeft  } from 'react-icons/fa'
import resume from "../assests/Resume.pdf"
import devWork from "../assests/devwork.jpg"
import zigzag from "../assests/elements/zigzags.png"
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import { ImSortNumericAsc } from 'react-icons/im'
export const Home = () => {
  
  
  const[formData,setformData] =useState({ firstname:'',lastname:'',email:'',message:''
 

  })
  async function submitHandler(e){
    e.preventDefault();
    const config ={
      SecureToken:"dea5fe67-7e97-47a2-82f2-38cfa19f5942",      
      To : 'spondhon3@gmail.com',
      From :'spondhon3@gmail.com',
      Subject : "Connection request Recieved from your portfolio",
      Body : `${formData.firstname} ${formData.lastname} wants to connect Email: ${formData.email} Message:${formData.message}  `
    };
    if(window.Email){
      console.log(window.Email);
      await window.Email.send(config).then(console.log('done'));
    }
    console.log(formData);
    
    setformData({firstname:'' ,lastname:'',email:'',message:''});
    
    toast.success('Sent Succesfully');

  }
  function changeHandler(event){
    
    event.preventDefault();
    const{name,value} = event.target;
     setformData((prev)=>{
       
      return{
          ...prev,
          [name]:value
      } 
     })
  }
  

  return (
    <div className='min-w-screen overflow-x-hidden scroll-smooth '>
      <div className='flex flex-col w-[100%] mx-auto justify-center items-center mt-20'>
        <div className='flex sm:flex-col justify-around w-screen sm:items-center space-x-4'>
          <div className=' flex sm:items-center gap-3'>
            <div className='animate-pulse mt-10 sm:mt-0 sm:w-[20px] md:self-start'><img src={zigzag}   /></div>
             
            <img src={profilepic} className='border-[15px] sm:border-[5px]  border-white  rounded-md mt-10 sm:mt-4 sm:w-[150px] ' width={300} />
            
              <div className='rotate-180 animate-pulse sm:w-[20px]'><img src={zigzag}  /></div>
          </div>  
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-[50px] sm:text-[30px] text-violet-100 sm:mt-4 sm:mb-6'>Hi , I am <span className='text-[60px] sm:text-[35px] ml-2 font-bold font-logo'>Krishno</span></h2>

            <h1 className=' text-[40px] text-center sm:text-[26px] text-white font-semibold mt-4 sm:mt-2 '>I am a Full Stack Developer </h1>
            <p className='text-[35px] sm:text-[25px] text-center text-blue-900  font-logo animate-pulse mt-4'>"Transforming complex problems into elegant solutions through code."</p>
            <a href="#contact" className='bg-violet-900 flex px-6 py-3 text-lg mt-6 text-white items-center gap-4 rounded-sm'>Contact Me <AiOutlineSend /></a>
          </div>
        </div>



        <div className='flex flex-col gap-6 items-center'>
          <div className='flex flex-col items-center'><h1 className='text-[40px] sm:text-[30px] mt-10 text-purple-900 font-semibold'>About Me</h1>
            <div className='w-[50%] h-[2px]  bg-violet-700'>

            </div>
          </div>

          <div className='min-h-max w-[90vw] flex flex-col rounded-lg pb-6 items-center relative shadow-lg shadow-violet bg-white'>
            <div className='absolute top-[20px] text-violet-300 left-[20px]'><FaQuoteLeft fontSize={30}/></div>
            <div className='absolute bottom-[20px] text-violet-300 right-[20px]'><FaQuoteRight fontSize={30}/></div>
            <p className='text-[30px] mt-4 mb-4'>My Introduction</p>

            <div className='flex sm:flex-col justify-around items-center'>
              <img src={devWork} className='w-[350px] sm:w-[200px] animate-pulse sm:h-[200px] mb-4 sm:mb-2' />
              <div className='flex flex-col items-center'>
                <p className='px-5 text-[20px]  leading-wider sm:text-[15px] md:max-w-[50%] sm:mt-[-5px]'>Hello, my name is <span className='text-[22px] sm:text-[18px] font-semibold'>Krishno Gopal Das</span>, and I recently graduated
                  with a degree in computer science. I am excited to apply the skills and knowledge I have gained through my coursework
                  and projects. Throughout my academic career, I have developed a solid foundation in programming languages such as<span className='font-semibold text-indigo-800'> C, Javascript,  Python, and C++,</span>  also in core  CS Subjects like
                  <span className='font-semibold text-indigo-800'> DBMS ,Operating Systems,Data structures</span> as well as experience in
                  web development and database management. I am also experienced in utilizing various software tools such as Git , and SQL.</p>
                <a href={resume} className='bg-blue-500 hover:bg-blue-600 transition-all duration-2000ms  flex px-6
               py-3 text-lg mt-8 text-white max-w-max items-center rounded-sm gap-4' download >Resume<GrDocumentDownload />
                </a>
              </div>
            </div>

          </div>
          <div className='min-h-max w-[96vw] relative flex flex-col rounded-md pb-6 items-center sm:px-2 bg-gray-100'>
            <p className='text-[30px] mt-4 mb-4 flex items-center gap-10'><FaGraduationCap />Education</p>

            <div className='min-w-[2px] mt-4 top-[80px] absolute min-h-[320px] sm:mr-4 sm:ml-4 bg-blue-600'>

            </div>
            <div className='flex flex-col mt-4 gap-6 items-center min-w-[40%] sm:min-w-[100%]'>
              <div className='flex justify-around gap-6 sm:gap-3 self-start
                 text-[20px] sm:text-[15px]'><IoMdSchool fontSize={30} /><h2>B.Tech<br />in  CSE<br /><span className='text-[12px] sm:text-[11px] text-gray-500 font-semibold text-center leading-3'>NSHM knowledge <br /> Campus , DURGAPUR<br />
                  MAKAUT UNIVERSITY,<br/> CGPA - 8.54</span></h2></div>

              <div className='flex justify-around gap-6 sm:gap-1 self-end 
                text-[18px] sm:text-[15px]'><IoMdSchool fontSize={30} /><h2>Senior Secondary<br /><span className='text-[12px] text-gray-500 font-semibold text-center leading-3'>DAV Public School <br /> CBSE - 70%<br />
                </span></h2></div>

              <div className='flex justify-around gap-6 sm:gap-1 self-start
                 text-[18px] sm:text-[15px]'><IoMdSchool fontSize={30} /><h2>Secondary<br /><span className='text-[12px] text-gray-500 font-semibold text-center leading-3'>DAV Public School <br /> CBSE - 87%<br />
                </span></h2></div>
            </div>

          </div>

        </div>
        <div id="contact" className='min-h-max w-[60vw] sm:w-[90vw] items-center  flex flex-col border-[1px] pb-4 border-violet-200 mt-[40px]'>
          <h2 className='text-white font-semibold text-[45px] sm:text-[35px]'>Contact Me
          </h2>
          <form  onSubmit={submitHandler} className="flex flex-col sm:items-center sm:w-[90%] w-[70%] mx-auto space-y-10  sm:space-y-5 mt-[40px] px-2">
            <div className='flex sm:flex-col  items-center gap-6'>
              <div className='flex flex-col  gap-1  '>
                <label htmlFor="firstname" className="font-semibold text-xl text-white">First Name</label>
                <input type='text' placeholder="First Name" name="firstname" onChange={changeHandler} value={formData.firstname}
                  className=" border py-1 px-2 font-semibold  rounded-md h-[45px] bg-violet-200 border-violet-100 "
                 required />
              </div>
              <div className='flex flex-col  gap-1  '>
                <label htmlFor="lastname" className="font-semibold text-xl  text-white">Last Name</label>
                <input type='text' placeholder="Last Name" name="lastname" onChange={changeHandler} value={formData.lastname}
                  className=" border py-1 px-2 font-semibold rounded-md h-[45px] bg-violet-200 border-violet-100 "
                  required  />
              </div>
            </div>
            <div className='flex flex-col '>
              <label htmlFor="lastname" className="font-semibold text-xl text-white">Email</label>
              <input type='email' placeholder="Email" name="email" onChange={changeHandler} value={formData.email}
                className=" border py-1 px-2 font-semibold min-w-max rounded-md h-[40px] bg-violet-200 border-violet-100 "
                required  />
            </div>
            <div className='flex flex-col gap-1  '>
              <label htmlFor="message" className="font-semibold text-xl text-white">Message</label>
              < textarea id="message" name='message' rows={10} cols={25} placeholder='Type your message here' onChange={changeHandler} value={formData.message}
                className=" border py-5 px-2 font-semibold rounded-md h-[100px] bg-violet-200 border-violet-500 "
              />
            </div>
            <button className='bg-violet-900 flex px-6 py-3
             text-lg mt-6 text-white items-center gap-4 self-end rounded-sm'><AiOutlineSend /></button>
          </form >
        </div>
      </div>
    </div >
  )
}
