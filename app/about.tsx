import Image from 'next/image';

import toppyImg from './toppy-3.png';
import thinkImg from './think.svg';

export default function About() {
  return (
    <div className='relative pt-5'>
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
      <h2 className='text-heading text-shadow relative -rotate-3 text-center'>
        ABOUT $TOPPY
      </h2>
      <div className='relative mt-8 flex justify-center'>
        <Image
          src={toppyImg}
          priority
          quality={100}
          alt=''
          className='max-w-[min(70%,595px)]'
        />
      </div>
      <div className='relative mx-auto -mt-6 flex w-fit justify-center'>
        <Image src={thinkImg} alt='' />
        <div className='absolute inset-0 text-pretty pb-5 pl-10 pr-5 pt-14 font-guerrilla text-sm font-medium uppercase max-[490px]:multi-[text-xs;pt-8] sm:pl-24 sm:pr-16 sm:pt-20 sm:text-xl md:text-2xl lg:text-4xl xl:pt-24'>
          Drawing inspiration from the beloved frog character in the acclaimed
          comic series <span className='underline'>The Night Riders</span> by
          artist and illustrator <span className='underline'>Matt Furie</span>,
          published in 2012, <span className='text-secondary'>$TOPPY</span> is
          here to spark a meme revolution on TON. With its mission to infuse
          meme culture with fresh, hilarious content,
          <span className='text-secondary'>$TOPPY</span> is rapidly gaining fame
          and spreading joy across the internet. The era of TON is just around
          the corner, and <span className='text-secondary'>$TOPPY</span> is
          leading the charge with humor and creativity. Join the wave and be
          part of this exciting movement!
        </div>
      </div>
    </div>
  );
}
