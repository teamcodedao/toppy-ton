import Image from 'next/image';

import footerImg from './footer.png';

export default function Footer() {
  return (
    <footer className='relative'>
      <Image
        src={footerImg}
        quality={50}
        alt=''
        className='min-h-[700px] object-cover opacity-15 sm:min-h-[900px]'
      />
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='flex -rotate-3 flex-col items-center justify-center gap-y-10 sm:-rotate-6'>
          <img src='/planes.svg' alt='' className='h-[200px] lg:h-auto' />
          <h2 className='text-shadow text-center text-5xl text-primary sm:text-6xl lg:text-7xl xl:text-[85px]'>
            SO, WHAT ARE YOU WAITING FOR?
          </h2>
          <a
            href={process.env.NEXT_PUBLIC_TELEGRAM_URL}
            target='_tele'
            className='flex shrink-0 items-center rounded-[25px] border-[7px] border-white bg-[#11090995] px-5 py-3 text-5xl font-medium text-white sm:text-6xl lg:text-7xl xl:text-[85px]'
          >
            <span className='-mt-4'>Join us</span>
            <img
              src='/socials/tele-2.png'
              alt=''
              className='aspect-square max-h-[100px] object-contain'
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
