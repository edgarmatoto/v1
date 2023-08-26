import { RxHamburgerMenu } from 'react-icons/rx';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navList } from '@/constants';
import Link from 'next/link';

const Hamburger = () => {
  return (
    <div className='md:hidden pl-4 pt-1.5'>
      <Sheet>
        <SheetTrigger className=' hover:bg-stone-100 dark:hover:bg-stone-800 dark:hover:text-stone-50 hover:text-stone-900 rounded-md'>
          <RxHamburgerMenu size={26} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className='gap-4'>
            {navList.map((item, index) => (
              <SheetTitle key={item.id} className='hover:ring-4 ring-slate-200 rounded-md'>
                <SheetClose asChild>
                  <Link href={`#${item.id}`}>
                  {item.title}
                  </Link>
                </SheetClose>
              </SheetTitle>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Hamburger