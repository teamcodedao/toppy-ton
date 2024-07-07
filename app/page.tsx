import Image from 'next/image';

import Heading from './heading';
import Socials from './socials';
import About from './about';
import Tokenomics from './tokenomics';
import Footer from './footer';

import toppy1Img from './toppy-1.png';
import toppy2Img from './toppy-2.svg';
import grassImg from './grass.svg';
import footerImg from './footer.png';

export default function Home() {
  return (
    <main className='min-h-screen'>
      {/* Section */}
      <div>
        <div className='relative mx-auto max-w-screen-2xl px-5 pt-12 sm:pt-20'>
          <h1 className='text-shadow relative z-10 flex justify-center gap-px text-center text-8xl uppercase text-primary [-webkit-text-stroke:1px_#000] sm:text-9xl'>
            <Heading />
          </h1>
          <Image
            src={toppy1Img}
            quality={100}
            priority
            alt=''
            className='relative z-20 mt-28 w-[880px] max-w-[50%] object-contain 2xl:max-w-full'
          />
          <div className='absolute inset-0 flex items-end justify-end'>
            <div className='relative'>
              <Image
                src={toppy2Img}
                priority
                alt=''
                className='w-[calc(50vw+80px)] object-cover object-bottom 2xl:w-auto'
              />
              <Socials />
            </div>
          </div>
          <img
            src='/planes.svg'
            alt=''
            className='img-planes absolute -top-5 left-0 z-0 sm:top-0'
          />
          <img
            src='/planes.svg'
            alt=''
            className='img-planes absolute -top-5 right-0 z-0 -scale-x-100 sm:top-0'
          />
        </div>
        <Image
          src={grassImg}
          priority
          alt=''
          className='relative z-30 -mt-20 h-[155px] w-full object-cover'
        />
      </div>

      <div>
        <div className='mx-auto max-w-screen-2xl'>
          <About />
        </div>
        <Image
          src={grassImg}
          priority
          alt=''
          className='relative z-30 -mt-20 h-[155px] w-full object-cover'
        />
      </div>

      <div>
        <div className='mx-auto max-w-screen-2xl'>
          <Tokenomics />
        </div>
        <Image
          src={grassImg}
          priority
          alt=''
          className='relative z-30 -mt-28 h-[155px] w-full object-cover'
        />
      </div>

      <div className='relative overflow-hidden'>
        <Image
          src={footerImg}
          quality={50}
          alt=''
          fill
          className='opacity-10 mix-blend-overlay'
        />
        <div className='mx-auto max-w-screen-2xl'>
          <Footer />
        </div>
      </div>
    </main>
  );
}
