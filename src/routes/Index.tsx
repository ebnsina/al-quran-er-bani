import { useState } from 'react';
import Hero from '../components/Hero';
import Search from '../components/Search';
import VideoLists from '../components/VideoLists';
import { getVideos } from '../services/video';

export default function Index() {
  const videos = getVideos();
  const [filteredVideos, setFilteredVideos] = useState<any[]>(videos);

  const handleSearch = (query: string) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = videos.filter((video) =>
      video.title.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredVideos(filtered);
  };

  return (
    <div className='space-y-4'>
      <Hero />
      <Search onSearch={handleSearch} />
      <VideoLists videos={filteredVideos} />
    </div>
  );
}
