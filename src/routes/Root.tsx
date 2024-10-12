import { Outlet } from 'react-router-dom';
import Greet from '../components/Greet';
import Logo from '../components/Logo';

export default function Root() {
  return (
    <div className='min-h-screen container mx-auto px-2 py-2'>
      <div className='text-xs sm:text-sm text-slate-700 flex justify-between items-center pb-3'>
        <Logo />
        <Greet />
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
