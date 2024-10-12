import { Link } from 'react-router-dom';
import { Video } from '../lib/types';

interface Props {
  item: Video;
}

export default function VideoList({ item }: Props) {
  return (
    <Link className='block hover:text-blue-600' to={`/watch/${item.videoId}`}>
      <article>
        <div className='relative rounded-md overflow-hidden bg-blue-500'>
          <img
            className='w-full aspect-video'
            src='images/thumbnail.png'
            alt={item.title}
          />

          <span className='text-2xl sm:text-4xl absolute right-4 bottom-4 bg-blue-600 text-white size-10 p-2 sm:size-16 flex justify-center items-center rounded-full'>
            {item.id}
          </span>
        </div>

        <div className='mt-2 text-sm'>
          <span className='text-sm sm:text-base text-slate-700 mb-2'>
            {item.title}
          </span>
        </div>
      </article>
    </Link>
  );
}
