import Image from 'next/image';

import tokenomicsImg from './tokenomics.svg';

export default function Tokenomics() {
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
        Tokenomics
      </h2>
      <Image src={tokenomicsImg} alt='' />
    </div>
  );
}
