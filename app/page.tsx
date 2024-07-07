import Image from 'next/image';

import Socials from './socials';

import toppy1Img from './toppy-1.png';
import toppy2Img from './toppy-2.svg';
import grassImg from './grass.svg';

export default function Home() {
  return (
    <main className='min-h-screen'>
      {/* Section */}
      <div>
        <div className='relative pt-12 sm:pt-20 mx-auto max-w-screen-2xl px-5'>
          <h1 className='text-shadow text-center text-8xl sm:text-9xl uppercase text-primary [-webkit-text-stroke:1px_#000] relative z-10'>
            $TOPPY
          </h1>
          <Image
            src={toppy1Img}
            quality={100}
            priority
            alt=''
            className='mt-28 w-[880px] max-w-[50%] 2xl:max-w-full object-contain relative z-20'
          />
          <div className='absolute inset-0 flex justify-end items-end'>
            <div className='relative'>
              <Image
                src={toppy2Img}
                priority
                alt=''
                className='w-[calc(50vw+80px)] 2xl:w-auto object-cover object-bottom'
              />
              <Socials />
            </div>
          </div>
          <img
            src='/planes.svg'
            alt=''
            className='absolute -top-5 sm:top-0 left-0 img-planes z-0'
          />
          <img
            src='/planes.svg'
            alt=''
            className='absolute -top-5 sm:top-0 right-0 scale-x-[-1] img-planes z-0'
          />
        </div>
        <Image
          src={grassImg}
          priority
          alt=''
          className='-mt-20 w-full h-[155px] object-cover relative z-30'
        />
      </div>
    </main>
  );
}
