"use client"
import React from "react";
import Image from "next/image";
// import { TypeAnimation } from 'react-type-animation';
  

export default function HeroSection() {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12"> 
            <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl sm :text-5xl lg:text-6xl font-extrabold">
           <span className="text-transparent bg-clip-text bg-[#118B50]">
            Hi I&apos;m {""}
            </span>
            <br></br>
            Lara Pable
            {/* <TypeAnimation
      sequence={[
        'Lara',
        1000, 
        'Full Stack Web Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    /> */}
        </h1>
        <p className="text-[#ADB7BE] text-base sx:text-lg mb-6 lg:text-xl"> 
        I am an aspiring full-stack web developer. Throughout my coursework, I&apos;ve developed hands-on experience with different technologies and frameworks. 
        </p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="w-[250px] h-[250px] lg:w-[550px] lg:h-[550px] relative animate-pulse">
            <Image
            src="/images/helloo.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={600}
            height={600}/>
               
        </div>
        </div>
        </div>
         {/* CSS for background movement */}
         <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }


      `}</style>
    
    </section>
  );
}
