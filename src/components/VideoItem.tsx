import { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface Props {
  videoId: string;
}

export default function VideoItem({ videoId }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    setIsLoading(false);
    event.target.pauseVideo();
  };

  const options: YouTubeProps['opts'] = {
    height: '290',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='aspect-video relative'>
      {isLoading && (
        <div className='absolute inset-0 bg-gray-200 animate-pulse'></div>
      )}

      <YouTube
        videoId={videoId}
        opts={options}
        onReady={onPlayerReady}
        className={isLoading ? 'opacity-0' : 'opacity-100'}
      />
    </div>
  );
}
