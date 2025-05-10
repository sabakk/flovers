import { Button } from '@/components/ui/button';
import ModeToggle from './mode-toggle';
import Link from 'next/link';
import {  ShoppingCart } from 'lucide-react';

// import UserButton from './user-button';

const Menu = () => {
  return (
    <div className='flex gap-3'>
      <nav className='flex w-full max-w-xs gap-1'>
        <Button asChild variant='ghost'>
          <Link href='/cart'>
            <ShoppingCart />
          </Link>
        </Button>
        <ModeToggle />
        {/* <UserButton /> */}
      </nav>
     
    </div>
  );
};

export default Menu;