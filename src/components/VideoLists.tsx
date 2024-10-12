import { Video } from '../lib/types';
import VideoList from './VideoList';

interface Props {
  videos: Video[];
}

export default function VideoLists({ videos }: Props) {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 space-y-4 sm:space-y-0'>
      {videos.map((video, index) => (
        <VideoList key={index} item={video} />
      ))}
    </div>
  );
}
