import { Outlet } from 'react-router-dom';
import Greet from '../components/Greet';
import Logo from '../components/Logo';

export default function Root() {
  return (
    <div className='min-h-screen bg-slate-100'>
      <div className='container mx-auto px-1.5'>
        <div className='text-xs sm:text-sm text-slate-700 flex justify-between items-center py-2.5'>
          <Logo />
          <Greet />
        </div>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
