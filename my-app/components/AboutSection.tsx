// components/VideoTestimonialSection.tsx
"use client";
import React from "react";
import Image from "next/image";

export default function VideoTestimonialSection() {
  return (
    <div className="px-4 md:px-20 py-16 space-y-10 z-10">
      {/* Grid containing video and testimonial */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Video Section */}
        <div className='rounded-xl shadow-lg hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out'>
          <video className="w-full h-auto" autoPlay loop muted playsInline>
            <source src="/Myprojects.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Testimonial Section */}
        <div className="bg-[#141414] rounded-xl p-6 flex flex-col justify-center z-10 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out">
          <div className="flex flex-row justify-center mb-9">
            <Image src="/L-leaf.png" alt="left-leaf" width={200} height={400} />
            <p className="text-[16px] italic text-gray-300 mb-0 text-center mx-5">
              An absolute professional who consistently delivers exceptional work, even under the most demanding deadlines. I appreciated the insightful feedback and innovative ideas introduced throughout the design process, which greatly enhanced the final product.
            </p>
            <Image src="/R-leaf.png" alt="right-leaf" width={200} height={400} />
          </div>
          <div className="text-sm flex flex-row justify-center gap-6">
            <p>Wade Warren</p>
            <p>Founder @Lorem ipsum</p>
          </div>
        </div>
      </div>
       <div className="bg-[#141414] rounded-xl p-6 md:p-10 grid md:grid-cols-2 gap-6 z-10 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out">
          <div>
            <h2 className="text-[54px] font-100 leading-snug mb-4">Your dedicated<br />in-house design<br />team</h2>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-[16px] text-gray-300 mb-6">
              We are a global collective of diverse designers and developers, partnering with brands of all scales. What distinguishes us is our dedication to crafting memorable, user-friendly, and captivating experiences — it's what we excel at. The projects we deliver combine creative vision with practical execution, resulting in solutions that are both distinctive and impactful.
            </p>
          
            <div className='flex flex-row'>
              <div className="h-[40px] w-[2px] bg-white/10 mr-3" />
              <div>
              <p className="text-sm text-white">Lorem ipsum</p>
              <p className="text-xs text-gray-500">Founder and CEO</p>
              </div>
            </div>
            </div>
    </div>
    </div>
  );
}
