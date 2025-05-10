import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
// import CategoryDrawer from './category-drawer';
import Search from './search';
import ModeToggle from './mode-toggle';
import Menu from './menu';
import { DrawerMenu } from './drawer';

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='max-w-7xl lg:mx-auto p-5 md:px-10 w-full flex justify-between items-center'>
        <div className='flex justify-start items-center'>
          <div className=''>          <DrawerMenu />
          </div>
          <Link href='/' className='flex justify-start items-center ml-4'>
            {/* <Image
              src='/images/logo.svg'
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            /> */}
            <span className=' lg:block font-bold text-2xl ml-3'>
              {APP_NAME}
            </span>
          </Link>
        </div>
        {/* <div className='hidden md:block'>
          <Search />
        </div> */}
        <Menu />
      </div>
    </header>
  );
};

export default Header;