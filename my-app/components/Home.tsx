"use client";
import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faYoutube, faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';



const serviceList = [
  "UI/UX design",
  "Graphic design",
  "Logo design",
  "Branding",
  "Animation",
  "Illustration",
  "Web design",
  "Product design",
  "Mobile design"
];

const testimonials = [
  {
    name: "Milos Vidic",
    role: "CEO @goatmarketing",
    text: "Thanks to Handmade, we experienced a significant boost in website traffic...branding and logo design were exceptional...",
    source: "Clutch",
    rating: 5,
  },
  {
    name: "Rasesh Seth",
    role: "CEO @nextyn",
    text: "Vas was extremely easy to work with. He's a pro at Webflow...open to hearing you out...",
    source: "Upwork",
    rating: 5,
  },
  {
    name: "Goran Markovic",
    role: "Founder @viziya",
    text: "Working with Handmade on our website design was an exceptional experience...",
    source: "Clutch",
    rating: 5,
  },
  {
    name: "Chris Hjort",
    role: "PM @host",
    text: "I highly recommend Vasilije. Very flexible and very fast. Great ideas for big or small projects...",
    source: "Clutch",
    rating: 5,
  },
  {
    name: "Borger Erlendsson",
    role: "CEO @kozmoz",
    text: "True professional capable of delivering quality work within very tight time constraints...",
    source: "Clutch",
    rating: 5,
  },
  {
    name: "Jasper Zhang",
    role: "CEO @hyperbolic",
    text: "Vasilije did an outstanding job designing our website. He's highly skilled, professional and responsive.",
    source: "Clutch",
    rating: 5,
  },
];

const doubledTestimonials = [...testimonials,...testimonials]

const faqs = [
    "Is it really unlimited?",
    "Why wouldn't I just hire a freelancer?",
    "Why wouldn't I just hire a full-time designer?",
    "Can I pause, renew or cancel at any time?",
    "Are there any contracts?",
    "How do we communicate?",
    "What if I only have one design task?",
    "What is an active task?",
    "Who are the designers?",
    "How many designs can be done in a single month?",
    "Are there any refunds if I don’t like the designs?",
  ];

export default function HeroSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between font-montserrat sm:px-6 md:px-10 lg:px-20 xl:px-32 max-w-screen-2xl">
    <div className='fixed top-0 left-0 w-full h-screen z-0'> 
    <img
    src="/bricks.jpg"
    alt="background"
    className="w-full h-[200px] object-cover"
  />
  </div>
{/*Navbar*/}

      <div className="flex justify-between items-center px-6 py-2 text-sm fixed top-0 left-0 w-full z-50 bg-transparent text-white h-[120px]">
        <div>
          <h1 className='text-white-bold ml-7'>L O G O</h1>
        </div>
        <div className="space-x-6 hidden md:flex ml-7">
          <Link href="#"><span className="hover:text-yellow-400">Home</span></Link>
          <Link href="#portfolio"><span className="hover:text-yellow-400">Portfolio</span></Link>
          <Link href="#benefits"><span className="hover:text-yellow-400">Benefits</span></Link>
          <Link href="#services"><span className="hover:text-yellow-400">Services</span></Link>
          <Link href="#pricing"><span className="hover:text-yellow-400">Pricing</span></Link>
          <Link href="#faq"><span className="hover:text-yellow-400">FAQ</span></Link>
        </div>
        <button className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 mr-3">
          Book a demo <span className="text-yellow-500 ml-1 mt-9">{'>'}</span>
        </button>
      </div>
      
{/*Home*/}

      <div className="text-center px-4 md:px-20 py-6 mt-25 z-10 mb-25">
        <div className="flex justify-center mb-4">
          <div className="bg-[#1c1c1c] border border-gray-700 px-4 py-3 rounded-full text-sm flex items-center">
            <span className="mr-2 text-yellow-400">5.0</span>
            <span className="mr-2 text-yellow-400">★★★★★</span>
            <span className="text-gray-400">11 reviews</span>
          </div>
        </div>
        <h1 className="text-[70px] font-500 leading-tight mb-6">
          Partner with a Full-Service<br />
          Design Team for All Your<br />
          Creative Needs
        </h1>
        <p className="text-[16px] text-gray-400 mb-8">
          Skip the hassle of finding the perfect full-time designer or studio
        </p>
        <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-medium hover:bg-white transition-all duration-300">
          Connect -us<span className="text-black-700 ml-1 mt-5">{'>'}</span>
        </button>
      </div>
{/*About*/}

      <div className="px-4 md:px-20 py-16 space-y-10 z-10">
        <div className="grid md:grid-cols-2 gap-6">
        <div className='rounded-xl shadow-lg hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out'>
         <video
           className="w-full h-auto "
           autoPlay
           loop
           muted
           playsInline
        >
        <source src="/Myprojects.mp4" type="video/mp4" />
           Your browser does not support the video tag.
        </video>
      </div>  



          
          <div className="bg-[#141414] rounded-xl p-6 flex flex-col justify-center z-10 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out">
            <div className = "flex flex-row justify-center mb-9">
            <Image src = "/L-leaf.png" alt =  "left-leaf" width = {200} height = {400} />   
            <p className="text-[16px] italic text-gray-300 mb-0 text-center mx-5">
              An absolute professional who consistently delivers exceptional work, even under the most demanding deadlines. I appreciated the insightful feedback and innovative ideas introduced throughout the design process, which greatly enhanced the final product.
            </p>
            <Image src = "/R-leaf.png" alt =  "left-leaf" width = {200} height = {400}/>
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

        
        <div className="text-center text-gray-500 text-sm mt-10 z-10">
          <p className="mb-0 text-[16px]">As seen and loved on:</p>
        </div>
        <div className="relative w-full h-20 overflow-hidden bg-black">
          <div className="flex w-[200%] animate-scroll">
            <img src="/add-pic.png" alt="logos" className="h-20 w-auto" />
            <img src="/add-pic.png" alt="logos" className="h-20 w-auto" />
          </div>
        </div>




      </div>

{/*how it works*/}
   
  <div className="w-full flex justify-center py-8 z-10">
  <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-yellow-400 via-30% to-transparent shadow-[0_0_30px_8px_rgba(250,204,21,0.4)] rounded-full"></div>
  </div>
  <div className="px-4 md:px-20 py-20 text-center z-10">
        <div className="inline-block bg-yellow-500/10 text-yellow-300 px-4 py-3 rounded-full text-sm mb-6">
          How it works?
        </div>
        <h2 className="text-[54px] font-200 leading-snug mb-4">
          Pay and get started <br /> the same day
        </h2>
        <p className="text-[16px] text-gray-400 mb-12">
          No unnecessary bureaucracy. We focus on getting your ideas and problems solved.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-[#1c1c1c] rounded-xl p-6 text-left hover:shadow-md transition-shadow">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-300/10 text-yellow-300 text-sm font-medium mb-4">
              1
            </div>
            <h4 className="text-[20px] font-200 mb-2">Subscribe to a plan</h4>
            <p className="text-sm text-gray-400">
              Select a plan that fits your needs and jump on a onboarding call.
            </p>
          </div>

          
          <div className="bg-[#1c1c1c] rounded-xl p-6 text-left hover:shadow-md transition-shadow z-10">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-300/10 text-yellow-300 text-sm font-medium mb-4">
              2
            </div>
            <h4 className="text-[20px] font-200 mb-2">Add a task</h4>
            <p className="text-sm text-gray-400">
              List your first task on our shared Trello board by specifying the requirements.
            </p>
          </div>

          
          <div className="bg-[#1c1c1c] rounded-xl p-6 text-left hover:shadow-md transition-shadow">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-300/10 text-yellow-300 text-sm font-medium mb-4">
              3
            </div>
            <h4 className="text-[20px] font-200 mb-2">Enjoy results</h4>
            <p className="text-sm text-gray-400">
              Receive your completed tasks in 2-4 business days.
            </p>
          </div>
        </div>
      </div>

{/*Portfolio*/}

      <section id="portfolio" className="px-4 md:px-20 py-20 z-10">
        <div className="inline-block bg-yellow-500/10 text-yellow-300 px-4 py-3 rounded-full text-sm mb-6">
          Portfolio
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mb-10 ">
          <h2 className="text-[54px] font-200 max-w-lg">Exceptional work you deserve</h2>
          <p className="text-[16px] text-gray-400 max-w-md mt-9 md:mt-9">
            From tech startups to healthcare giants, e-commerce pioneers to fintech, we’ve left our mark on diverse domains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[url('/slippery.jpg')] rounded-xl overflow-hidden flex flex-col justify-end h-[400px] bg-cover hover:scale-95 transform transition duration-300">
            
            <div className="p-4">
              <p className="text-sm text-gray-400">Slippery moneys – commerce platform for high risk industries</p>
            </div>
          </div>

          <div className="bg-[url('/hybrid.jpg')] rounded-xl overflow-hidden flex flex-col justify-end h-[400px] bg-cover hover:scale-95 transform transition duration-300">
            
            <div className="p-4">
              <p className="text-sm text-gray-400">Hybrid capital – digital currency</p>
            </div>
          </div>

          <div className="bg-[url('/betero.jpg')] rounded-xl overflow-hidden flex flex-col justify-end h-[400px] bg-cover hover:scale-95 transform transition duration-300">
            
            <div className="p-4">
              <p className="text-sm text-gray-400">Betero – sports betting platform</p>
            </div>
          </div>

          <div className="bg-[url('/exec.jpg')] rounded-xl overflow-hidden flex flex-col justify-end h-[400px] bg-cover hover:scale-95 transform transition duration-300">
            
            <div className="p-4">
              <p className="text-sm text-gray-400">Exec – employees financial wellness saas</p>
            </div>
          </div>

          <div className="bg-[url('/voltage.jpg')] rounded-xl overflow-hidden flex flex-col justify-end h-[400px] bg-cover hover:scale-95 transform transition duration-300">
            <div className="p-4">
              <p className="text-sm text-gray-400">Voltage – accessible clean energy startup</p>
            </div>
          </div>

          <div className="bg-[url('/hyperbola.jpg')] bg-cover rounded-xl overflow-hidden flex flex-col justify-end h-[400px] hover:scale-95 transform transition duration-300">
            
            <div className="p-4">
              <p className="text-sm text-gray-400 ">Hyperbolic – a decentralized data transmission startup</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-medium hover:bg-white transition-all duration-300">
            See all works →
          </button>
        </div>
      </section>

{/*Benefits*/}

      <section id="benefits" className="px-4 md:px-20 py-20 z-10">
        <div className="inline-block bg-yellow-500/10 text-yellow-300 px-4 py-3 rounded-full text-sm mb-6 ">
          Benefits
        </div>
        <h2 className="text-[54px] font-200 leading-snug mb-16 text-center">
          Unlock a world of design<br /> potential with us
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[url('/fast.png')] bg-cover flex flex-col justify-end h-[400px] rounded-xl p-6 text-left hover:scale-95 transform transition duration-300">
            
            <h4 className="text-[20px] font-200 mt-4 mb-2">Fast turnaround</h4>
            <p className="text-sm text-gray-400">Expect the first draft within 48–72 hours, from Monday to Saturday.</p>
          </div>

          <div className="bg-[url('/unlimited.png')] bg-cover flex flex-col justify-end h-[400px] rounded-xl p-6 text-left hover:scale-95 transform transition duration-300">
            
            <h4 className="text-[20px] font-200 mt-4 mb-2">Unlimited requests</h4>
            <p className="text-sm text-gray-400">Enjoy the freedom of unlimited designs, tailored to meet your every need.</p>
          </div>

          <div className="bg-[url('/always.png')] bg-cover flex flex-col justify-end h-[400px] rounded-xl p-6 text-left hover:scale-95 transform transition duration-300">
            
            <h4 className="text-[20px] font-200 mt-4 mb-2">Always in sync</h4>
            <p className="text-sm text-gray-400">Stay in sync with real-time updates and seamless communication, all via Slack.</p>
          </div>

          <div className="bg-[url('/pause.png')] bg-cover flex flex-col justify-end h-[400px] rounded-xl p-6 text-left hover:scale-95 transform transition duration-300">
            
            <h4 className="text-[20px] font-200 mt-4 mb-2">Pause or cancel anytime</h4>
            <p className="text-sm text-gray-400">Flexibility at your fingertips—pause or cancel your subscription anytime.</p>
          </div>

          <div className="bg-[url('/trello.png')] bg-cover flex flex-col justify-end h-[400px] rounded-xl p-6 text-left hover:scale-95 transform transition duration-300">
            
            <h4 className="text-[20px] font-200 mt-4 mb-2">Trello task management</h4>
            <p className="text-sm text-gray-400">Expertise in crafting designs that not only captivate but also drive results.</p>
          </div>

          <div className="bg-[url('/worry.png')] bg-cover flex flex-col justify-end h-[400px] rounded-xl p-6 text-left hover:scale-95 transform transition duration-300">
            
            <h4 className="text-[20px] font-200 mt-4 mb-2">Worry free pricing</h4>
            <p className="text-sm text-gray-400">Get all your design needs covered for just 2,150/month.</p>
          </div>
        </div>
      </section>

{/*Services*/}

<section id="services" className="px-4 md:px-20 py-20 text-center z-10">
    <div className="inline-block bg-yellow-500/10 text-yellow-300 px-4 py-1 rounded-full text-sm mb-6">
          Services
    </div>
    <h2 className="text-[54px] font-200 leading-snug mb-12">
          All you want, <br /> delivered on time
    </h2>

    <div className="relative w-[50%] mx-auto overflow-hidden rounded-xl space-y-6">
  
    <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#111] to-transparent z-20" />
    <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#111] to-transparent z-20" />

  {/* Top Row */}
        <div className="flex animate-marquee whitespace-nowrap gap-1 mt-4 relative z-10">
             {Array(2).fill(serviceList).flat().map((item, i) => (
                <span
                   key={`top-${i}`}
                   className="bg-[#1c1c1c] text-white text-sm px-4 py-2 rounded-full border border-[#2a2a2a] hover:bg-yellow-500 hover:text-black transition"
                >
                   {item}
                </span>
             ))}
        </div>

  {/* Bottom Row */}
  <div className="flex animate-marquee-reverse whitespace-nowrap gap-1 mt-4 relative z-10">
    {Array(2).fill(serviceList).flat().map((item, i) => (
      <span
        key={`bottom-${i}`}
        className="bg-[#1c1c1c] text-white text-sm px-4 py-2 rounded-full border border-[#2a2a2a] hover:bg-yellow-500 hover:text-black transition"
      >
        {item}
      </span>
    ))}
  </div>
</div>


      </section>

{/*Pricing*/}  

       <section id="pricing" className="px-4 md:px-20 py-20 text-center z-10">
        <div className="inline-block bg-yellow-500/10 text-yellow-300 px-4 py-1 rounded-full text-sm mb-6">
          Pricing
        </div>
        <h2 className="text-[54px] font-200 leading-snug mb-16">
          Choose the relevant plan to build,<br />grow and fasten your team
        </h2>

        <div className="grid md:grid-cols-3 gap-6 justify-center">
          {/* Standard Plan */}
          <div className="bg-[#1c1c1c] rounded-xl p-6 text-left flex flex-col justify-between hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out">
            <div>
              <h4 className="text-sm text-gray-400 mb-1">STANDARD</h4>
              <div className="text-[32px] font-bold">$2,150<span className="text-base font-normal">/month</span></div>
              <a href="#" className="underline text-sm text-gray-300 mb-4 inline-block">One request at a time</a>
              <ul className="text-sm space-y-2 mb-6">
                {[
                  "Unlimited requests",
                  "~48 hour delivery",
                  "Unlimited brands",
                  "Weekly meetings",
                  "Pause or cancel anytime",
                  "Managed via Slack and Trello",
                  "All services except Webflow",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <span className="text-yellow-400">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <button className="bg-yellow-400 text-black w-full py-3 rounded-full font-semibold hover:bg-white">Subscribe →</button>
              <button className="border border-gray-700 w-full py-3 rounded-full font-semibold text-white hover:bg-white hover:text-black">Book a demo</button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-[#1c1c1c] rounded-xl p-6 text-left flex flex-col justify-between relative hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out">
            <div>
              <span className="absolute top-0 right-0 bg-yellow-800 text-yellow-300 text-xs px-3 py-1 rounded-bl-xl">Faster ⚡</span>
              <h4 className="text-sm text-gray-400 mb-1">PRO</h4>
              <div className="text-[32px] font-bold">$3,150<span className="text-base font-normal">/month</span></div>
              <a href="#" className="underline text-sm text-gray-300 mb-4 inline-block">Double the requests</a>
              <ul className="text-sm space-y-2 mb-6">
                {[
                  "Unlimited requests",
                  "~48 hour delivery",
                  "Unlimited brands",
                  "Weekly meetings",
                  "Pause or cancel anytime",
                  "Managed via Slack and Trello",
                  "All services and Webflow",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <span className="text-yellow-400">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <button className="bg-yellow-400 text-black w-full py-3 rounded-full font-semibold hover:bg-white">Subscribe →</button>
              <button className="border border-gray-700 w-full py-3 rounded-full font-semibold text-white hover:bg-white hover:text-black">Book a demo</button>
            </div>
          </div>

          {/* Project-Based Plan */}
         <div className='flex flex-col'>
          <div className="bg-[#1c1c1c] rounded-xl p-6 text-left flex flex-col justify-between h-[50%] hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out">
            <div>
              <h4 className="text-sm text-gray-400 mb-1">PROJECT-BASED</h4>
              <p className="text-sm text-gray-300 mb-6">
                For a custom fee delivered in milestones. Ideal for specific goals. Custom project scope.
              </p>
              <ul className="text-sm space-y-2 mb-6">
                {[
                  "Fixed scope of work",
                  "Delivered in milestones",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <span className="text-yellow-400">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <button className="border border-gray-700 w-full py-3 rounded-full font-semibold text-white hover:bg-yellow-500">Send email</button>
            </div>
          </div>
             {/* Referral Section */}
        <div className="mt-8 bg-[#1c1c1c] p-6 rounded-xl h-[50%] hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out">
          <h4 className="text-lg font-semibold mb-2">Refer & earn</h4>
          <p className="text-sm text-gray-300 mb-4">Receive $150 for each referral!</p>
          <button className="border border-gray-700 w-full py-3 rounded-full font-semibold text-white hover:bg-yellow-500">Join now</button>
        </div>
      </div> 
      </div>
        

       
      </section>

{/*Insights*/}      

      <section id="insights" className="px-4 md:px-20 py-20 text-center z-10">
        <div className="inline-block bg-yellow-500/10 text-yellow-300 px-4 py-1 rounded-full text-sm mb-6">
          Insights
        </div>
        <h2 className="text-[54px] font-200 leading-snug mb-12">
          Frequently asked<br />questions
        </h2>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="bg-[#1c1c1c] rounded-lg px-4 py-3 text-left cursor-pointer hover:scale-103 transform transition duration-300"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between ">
                <span>{question}</span>
                <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
              </div>
              {openIndex === index && (
                <p className="text-gray-400 text-sm mt-3">
                  This is a sample answer to the question. Replace with actual answers as needed.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

{ /* FAQ */}
   <section id="faq" className="px-4 md:px-20 py-20s text-white font-montserrat z-10">
      <div className="text-center mb-12">
        <div className="inline-block bg-yellow-500/10 text-yellow-300 px-4 py-1 rounded-full text-sm mb-4">
          Testimonials
        </div>
        <h2 className="text-[54px] font-200 leading-snug">
          Read what our clients are<br />saying about us
        </h2>
      </div>

      <div className="w-[60%] mx-auto relative h-[500px] overflow-hidden">
        {/* Fade top and bottom */}
        <div className="absolute top-0 h-16 w-full bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 h-16 w-full bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

        {/* Scrolling content */}
        <div className="animate-marquee grid grid-cols-1 sm:grid-cols-2 gap-4">
          {doubledTestimonials.map((t, index) => (
            <div key={index} className="bg-[#1c1c1c] rounded-xl p-6 flex flex-col justify-between">
              <div className="font-semibold mb-1">{t.name}</div>
              <div className="text-sm text-gray-400 mb-3">{t.role}</div>
              <p className="text-sm mb-4">"{t.text}"</p>
              <div className="text-sm text-gray-400">
                <span className="font-semibold text-white mr-1">{t.source}</span>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

<style jsx>{`
  @keyframes scroll-down {
    0% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(0);
    }
  }
  .animate-marquee {
    animation: scroll-down 30s linear infinite;
  }
`}</style>
    </section>

{/*last section*/}

    <div className="text-center space-y-4 z-10 mt-21">
    <h2 className="text-2xl md:text-3xl font-light">Need more clarity?</h2>
    <h3 className="text-2xl md:text-3xl font-light">Get in touch!</h3>
    <button className="mt-6 bg-yellow-500 hover:bg-white text-black font-medium px-6 py-3 rounded-full transition">
      Book a demo →
    </button>
  </div>

  
  <div className="mt-20 px-6 md:px-12 py-6 z-10 bg-transparent">
    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 ">
      <p className="mb-4 md:mb-0">© 2024 All Rights Reserved</p>
      
      <div className="flex space-x-4">
      <FontAwesomeIcon icon={faLinkedinIn} className="text-white hover:bg-yellow-500" />
      <FontAwesomeIcon icon={faYoutube} className="text-white hover:bg-yellow-500" />
      <FontAwesomeIcon icon={faBehance} className="text-white hover:bg-yellow-500" />
      <FontAwesomeIcon icon={faDribbble} className="text-white hover:bg-yellow-500" />
      <FontAwesomeIcon icon={faCopyright} className="text-white hover:bg-yellow-500" />
    </div>
   
    </div>
  </div>
  <div className='fixed bottom-0 right-0 w-full h-screen z-0'> 
    <img
    src="/bricks.jpg"
    alt="background2"
    className="w-full h-[200px] object-cover"
  />
  </div>
</div>
    
  );
}
