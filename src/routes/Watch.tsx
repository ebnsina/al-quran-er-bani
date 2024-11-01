import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import VideoItem from '../components/VideoItem';
import { getVideo } from '../services/video';

export default function Watch() {
  const videoRef = useRef<HTMLDivElement>(null);

  const { watchId } = useParams();
  if (!watchId) return;

  const video = getVideo(watchId);
  if (!video) return;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [watchId]);

  return (
    <div ref={videoRef} className='space-y-2'>
      <div className='flex justify-end mb-2'>
        <Link
          className='bg-blue-100 text-blue-800 block px-4 py-2 text-xs uppercase tracking-wider rounded-2xl'
          to='/'
        >
          Go back
        </Link>
      </div>

      <VideoItem videoId={video?.videoId} />

      <div className='bg-white p-4 rounded-2xl'>
        <h2 className='text-sm sm:text-lg font-medium mb-2'>{video?.title}</h2>

        <Link className='block' to='/'>
          <div className='flex space-x-2 items-center'>
            <img
              src='/images/logo.png'
              className='size-10 rounded-md border border-slate-300'
              alt=''
            />
            <span className='text-sm text-slate-700'>Al Quran er Bani</span>
          </div>
        </Link>
      </div>

      <div className='bg-white rounded-2xl p-4'>
        <span className='text-slate-900 font-medium text-sm italic my-2'>
          {video.surah}
        </span>
      </div>

      <div className='bg-white overflow-hidden text-ellipsis break-words px-2 py-2 rounded-2xl text-slate-600 text-sm'>
        <h4 className='font-medium mb-1'>Descriptions:</h4>

        <div className='leading-6'>{video?.description}</div>
      </div>
    </div>
  );
}
