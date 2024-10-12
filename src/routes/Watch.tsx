import { useParams } from 'react-router-dom';
import VideoItem from '../components/VideoItem';
import { getVideo } from '../services/video';

export default function Watch() {
  const { watchId } = useParams();
  if (!watchId) return;

  const video = getVideo(watchId);
  if (!video) return;

  return (
    <div>
      <VideoItem videoId={video?.videoId} />

      <h2 className='text-base sm:text-lg font-medium mt-2 mb-4'>
        {video?.title}
      </h2>

      <p className='text-slate-600 text-sm'>{video?.description}</p>
    </div>
  );
}
