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
    <div ref={videoRef}>
      <div className='flex justify-end mb-2'>
        <Link
          className='block border border-blue-600 text-blue-600 px-2 py-1 text-sm rounded-md'
          to='/'
        >
          Go back
        </Link>
      </div>

      <VideoItem videoId={video?.videoId} />

      <h2 className='text-base sm:text-lg font-medium mt-2 mb-4'>
        {video?.title}
      </h2>

      <p className='text-slate-600 text-sm'>{video?.description}</p>
    </div>
  );
}
