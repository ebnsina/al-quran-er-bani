import { Link } from 'react-router-dom';
import { Video } from '../lib/types';

interface Props {
  item: Video;
}

export default function VideoList({ item }: Props) {
  return (
    <article className='group'>
      <Link
        className='bg-white block rounded-lg overflow-hidden hover:text-blue-600'
        to={`/watch/${item.videoId}`}
      >
        <div className='relative rounded-md overflow-hidden bg-blue-500'>
          <img
            className='w-full aspect-video'
            src={`https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`}
            alt={item.title}
          />

          <span className='text-xl sm:text-4xl absolute right-4 bottom-4 bg-[#28765F] text-white size-10 p-2 sm:size-16 flex justify-center items-center rounded-xl rotate-12 transform transition group-hover:rotate-0'>
            {item.id}
          </span>
        </div>

        <div className='px-2.5 py-2 rounded-b-2xl'>
          <div className='text-sm'>
            <span className='text-sm sm:text-base text-slate-700 mb-2'>
              {item.title}
            </span>
          </div>

          <div>
            <span className='text-slate-800 text-sm italic my-2'>
              {item.surah}
            </span>
          </div>

          <div className='flex mt-2 space-x-2 items-center'>
            <img
              src='/images/logo.png'
              className='size-10 rounded-md border border-slate-300'
              alt='logo'
            />
            <span className='text-sm text-slate-700'>Al Quran er Bani</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
