import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-yellow-100">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-yellow-100 ">Blog</h2>
            <p className="text-xl font-bold text-black-100">Welcome to Twinmo, the AI-powered experimentation platform revolutionizing product development</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-yellow-500" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  {/* <Image className="rounded-full"  alt="Testimonial 01" /> */}
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current  text-[#F1c232]" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg  text-black-100 grow">In the realm of personal care appliances, where safety and effectiveness are paramount, Twinmo.ai shines. Whether you’re developing hair dryers, electric toothbrushes, curling irons, or any other appliances that play a key role in personal grooming and hygiene, our platform is designed to make your testing processes more efficient and reliable. With Twinmo.ai, you can seamlessly manage test procedures and data, ensuring every product you launch is a reflection of quality and care.</blockquote>
              <div className="text-gray-700 font-medium mt-6 text-center pt-5 border-t border-gray-700">
                <cite className="text-black-100 font-bold not-italic"></cite><a className="text-black-100 hover:text-gray-200  font-bold hover:text-black-100 transition duration-150 ease-in-out" href="#0">Personal Care Appliances</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-yellow-500" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  {/* <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" /> */}
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current  text-[#F1c232]" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-black-100 grow">In a world where the kitchen is the heart of the home, and the appliances therein are integral to cooking efficiency and culinary creativity, Twinmo.ai steps in as the trusted companion for engineers. We help you ensure that your toasters, ovens, microwaves, and mixers not only meet the highest safety standards but also perform at their best, enhancing the cooking experience for your end users. Our platform streamlines the intricate process of experiment documentation, real-time data tracking, and insightful analytics, thereby accelerating your product development cycle.</blockquote>
              <div className="text-gray-700 text-center font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-black-100 font-bold not-italic"></cite><a className="text-black-100  hover:text-gray-200 font-bold transition duration-150 ease-in-out" href="#0">Kitchen Appliances</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-yellow-500" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  {/* <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" /> */}
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current  text-[#F1c232]" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-black-100 grow">Testrunz could be used by researchers and students from different institutions to collaborate on experiments. This could help to break down barriers between different disciplines and to foster new ideas. Testrunz has the potential to be a valuable tool for both research and education. It could help to make scientific research more accessible and to prepare the next generation of scientists.</blockquote>
              <div className="text-gray-700 text-center font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-black-100 font-bold not-italic"></cite><a className="text-black-100 font-bold hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Research & Education</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
