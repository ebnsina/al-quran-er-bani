import VIDEOS from '../data/videos';

export function getVideos() {
  return VIDEOS;
}

export function getVideo(videoId: string) {
  return VIDEOS.find((item) => item.videoId === videoId);
}
