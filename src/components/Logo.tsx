import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div>
      <Link className='font-medium block' to='/'>
        Al Quran er Bani
      </Link>
    </div>
  );
}
