"use client";

import React from "react";
import Image from "next/image";

export default function PortfolioSection() {
  return (
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

  );
};


