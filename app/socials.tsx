import clsx from 'clsx';

export default function Socials() {
  return (
    <div
      className={clsx(
        'absolute inset-0 z-20 -mt-36 flex flex-col items-end -space-y-10 sm:-mt-44 xl:-mt-56 xl:space-y-0 2xl:max-w-[95%]',
        '*:multi-[scale-50;origin-bottom] sm:*:scale-75 2xl:*:scale-100',
        '[&_a]:multi-[relative;transition]',
        'lg:[&_a:hover]:scale-110',
        '[&>*_img:last-child]:multi-[absolute;left-1/2;top-1/2;-translate-x-1/2;-translate-y-1/2;object-contain]'
      )}
    >
      <a
        href={process.env.NEXT_PUBLIC_DEDUST_URL}
        target='_dedust'
        className='self-center'
      >
        <img src='/socials/dedust-bg.svg' alt='' />
        <img
          src='/socials/dedust.png'
          alt=''
          className='size-[60px] rounded-full'
        />
      </a>
      <div className='flex w-full justify-center gap-x-10 xl:mt-10'>
        <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_x'>
          <img src='/socials/x-bg.svg' alt='' />
          <img src='/socials/x.png' alt='' className='size-[60px]' />
        </a>
        <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_tele'>
          <img src='/socials/tele-bg.svg' alt='' />
          <img
            src='/socials/tele.png'
            alt=''
            className='text-shadow -mt-4 size-[60px]'
          />
        </a>
      </div>
      <div className='flex justify-end'>
        <a href={process.env.NEXT_PUBLIC_DEX_URL} target='_dex'>
          <img src='/socials/dex-bg.svg' alt='' />
          <img
            src='/socials/dex.png'
            alt=''
            className='text-shadow size-[60px]'
          />
        </a>
      </div>
    </div>
  );
}
