import YouTube, { YouTubeProps } from "react-youtube";

interface Props {
  videoId: string;
}

export default function VideoItem({ videoId }: Props) {
  const options: YouTubeProps["opts"] = {
    height: "290",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="aspect-video relative bg-white rounded-md">
      <YouTube videoId={videoId} opts={options} />
    </div>
  );
}
