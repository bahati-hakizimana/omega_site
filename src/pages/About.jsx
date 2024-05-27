import React, { useState } from 'react';
import aboutImg from "../components/assets/images/AUCA3.jpg"
import aboutImgBanner from "../components/assets/images/AUCA_RWANDA.jpg"
import imgs from "../components/assets/images/join1.png"
import { FaBookDead } from "react-icons/fa"
import { AiOutlineCheck } from "react-icons/ai"
import { Instructor } from './Instructor';


export const About = () => {
  return (
    <>
      <section className='about py-16'>
        <div className='container'>
          <div className='heading text-center py-12'>
            <h1 className='text-3xl font-semibold text-black'>Get Our story</h1>
            <span className='text-sm mt-2 block'> Our story start in 19th century when AUCA started at Rubavu District.</span>
          </div>
          {/* <div className='grid grid-cols-4 gap-5 mt-5 md:grid-cols-2'>
            <AboutCard color='bg-[#2D69F0]' icon={<FaBookDead size={50} />} title='4,000 Online courses' desc="You don't have to struggle alone, you've " />
            <AboutCard color='bg-[#DD246E]' icon={<FaBookDead size={50} />} title='4,000 Online courses' desc="You don't have to struggle alone, you've " />
            <AboutCard color='bg-[#8007E6]' icon={<FaBookDead size={50} />} title='4,000 Online courses' desc="You don't have to struggle alone, you've " />
            <AboutCard color='bg-[#0CAE74]' icon={<FaBookDead size={50} />} title='4,000 Online courses' desc="You don't have to struggle alone, you've " />
          </div> */}
        </div>
      </section>
      <AboutContent />
    </>
  )
}
export const AboutCard = (props) => {
  return (
    <div className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}>
      <div className='icon'>{props.icon}</div>
      <div className='text mt-5'>
        <h4 className='text-lg font-semibold my-3'>{props.title}</h4>
        <p className='text-sm'>{props.desc}</p>
      </div>
    </div>
  )
}

const faqs = [
  { question: "What is Educal?", answer: "Educal is an online learning platform offering a wide range of courses to help you achieve your educational goals." },
  { question: "How can I join Educal?", answer: "You can join Educal by signing up on our website and choosing the courses you are interested in." },
  { question: "What courses are available?", answer: "Educal offers courses in various fields including technology, business, art, and more." },
  { question: "What courses are available?", answer: "Educal offers courses in various fields including technology, business, art, and more." },
  { question: "What courses are available?", answer: "Educal offers courses in various fields including technology, business, art, and more." },
];

export const AboutContent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='mb-16'>
      <div className='container flex gap-4 md:flex-col'>
        <div className='left w-1/3 md:w-full mr-8 md:mr-0 relative'>
          <img src={aboutImg} alt='aboutImg' className=' rounded-xl' />
          <img src={aboutImgBanner} alt='aboutImg' className='rounded-xl absolute -bottom-14 -left-24 h-56 md:left-80' />
          <div className='img-group ml-24 mt-3'>
            <div>
              <img src={imgs} alt='' />
              <span className='text-[14px] flex justify-center items-center'>
                <div>
                Join over <label className='text-black text-sm'>4,000+</label> students
                </div>
                
              </span>
            </div>

          </div>
        </div>
        <div className='right w-2/3 md:w-full md:mt-16'>
          <div className='heading w-4/5 md:w-full'>
            <h1 className='text-3xl font-semibold text-black'>Achieve Your Goals With Educal</h1>
            <span className='text-sm mt-2 block leading-6'> The Adventist University of Central Africa (AUCA) known as MUDENDE is a Seventh-day Adventist Institution of Higher Learning which has a philosophy to operate on the basis of the Seventh-day Adventist worldview:”God is the Creator and Sustainer of the universe and the source of true knowledge. The entrance of sin caused man’s alienation from God, therefore the restoration of the relation between man and his God is the main aim of Adventist Christian Education that leads students to discover and understand the truth through critical thinking.</span>
            {/* <ul className='my-5'>
              <li className='text-sm flex items-center gap-5'>
                <AiOutlineCheck className='text-green-500' /> Upskill your organization.
              </li>
              <li className='text-sm flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-green-500' />
                Access more than 100K online courses
              </li>
              <li className='text-sm flex items-center gap-5'>
                <AiOutlineCheck className='text-green-500' />
                Learn the latest skills
              </li>
            </ul> */}
            <button className='px-5 py-2 border border-gray-300 bg-blue-600 text-white rounded-md text-sm'>Apply Now</button>
          </div>


        </div>
        <div className='faq mt-10'>
          <h2 className='text-2xl font-semibold'>Get Answer of your  Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className='faq-item mt-4 text-xl'>
              <div
                className='question cursor-pointer hover:text-green-500 text-lg font-medium border-b border-s-gray-400'
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
              </div>
              {activeIndex === index && (
                <div className='answer mt-2 text-sm'>
                  {faq.answer}
                  <button
                    className='ml-2 px-2 py-1 border border-gray-300 bg-blue-600 text-white rounded-md text-xs'
                    onClick={() => toggleAnswer(index)}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Instructor />
    </section>
  );
};
