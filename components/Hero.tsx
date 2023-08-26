import Link from 'next/link';
import { HiOutlineArrowDown } from 'react-icons/hi';

import { DMSans } from '@/fonts';

const Hero = () => {
  return (
    <div className='w-full'>
      <div className="h-full pt-20 pb-24 text-center">
        <div className={`${DMSans.className}`}>
          <div className={`text-5xl`}>
            <h1>Hello there!</h1>
            <h1>I&apos;m Edgar.</h1>
          </div>
          <p className="font-thin text-lightSecondary dark:text-darkSecondary w-full pt-8 sm:text-lg">A passionate and self-motivated person who loves programming and learning new technologies. Looking for opportunities to grow as a developer and contribute to exciting projects.</p>
        </div>
        <div className='w-full pt-8'>
          <div className='mx-auto w-fit hover:bg-slate-200 dark:hover:bg-stone-700 rounded-md mt-2'>
            <Link 
              href={'#about'}
            >
              <HiOutlineArrowDown size={40} />
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero;
