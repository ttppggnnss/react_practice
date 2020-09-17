import React, { useEffect, useState } from "react";
import axios from "axios";
import "../static/css/Row.css";
import YouTube from "react-youtube";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

function HealthVideo({ title, keyword, isLargeRow }) {
  const [videos, setVideos] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    async function fetchVideo() {
      const request = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: API_KEY,
            part: "snippet",
            type: "video",
            q: keyword,
            maxResults: 12,
          },
        }
      );
      setVideos(request.data.items);
      return request;
    }
    fetchVideo();
  }, [keyword]);

  // console.log(keyword);
  // console.log(videos);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (video) => {
    if (videoUrl) {
      setVideoUrl("");
    } else setVideoUrl(video.id.videoId);
  };

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      {/* container -> posters */}
      <div className="row__posters">
        {/* several rwo_poster */}
        {videos.map((video) => (
          <img
            key={video.id.videoId}
            onClick={() => handleClick(video)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={video.snippet.thumbnails.high.url}
            alt={video?.snippet.title}
          />
        ))}
      </div>
      {videoUrl && <YouTube videoId={videoUrl} opts={opts} />}
    </div>
  );
}

export default HealthVideo;
