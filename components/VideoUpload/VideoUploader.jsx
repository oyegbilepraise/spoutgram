import React, { useState, useRef } from "react";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";

const VideoUploader = ({ video }) => {
  //  custom button states
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const videoRef = useRef();
  const progressBarRef = useRef();
  const volumeBarRef = useRef();

  
  console.log(video);
    if (!video || !video.type) {
    return null;
  }
  const videoUrl= video ? URL.createObjectURL(video) : null; // add a null-check here
  

  // ------ custom video starts here ------
  const togglePlay = () => {
    setPlaying(!playing);
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
    progressBarRef.current.value = videoRef.current.currentTime;
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
    progressBarRef.current.max = videoRef.current.duration;
  };

  const handleProgressChange = () => {
    videoRef.current.currentTime = progressBarRef.current.value;
  };

  const handleVolumeChange = () => {
    const newVolume = volumeBarRef.current.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setMuted(false);
  };

  const toggleMute = () => {
    const newMuted = !muted;
    videoRef.current.volume = newMuted ? 0 : volume;
    setMuted(newMuted);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handlePlaybackRateChange = (rate) => {
    setPlaybackRate(rate);
    videoRef.current.playbackRate = rate;
  };

  // --------- custom video stops here --------

  return (
    <div>
      <video
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        muted={muted}
        className={styles.vid__media__preview}

      >
        <source src={videoUrl} type={video.type} />
      </video>

<div>
        <button onClick={togglePlay}>
          {playing ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24px"
              height="24px"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24px"
              height="24px"
            >
              <path d="M8 5v14l11-7z" fill="none" />
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </button>
        <button onClick={toggleMute}>
          {muted ? <p>muted</p> : <p>unmute</p>}
        </button>
        <div>
          <span>
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          <input
            type="range"
            ref={progressBarRef}
            onChange={handleProgressChange}
          />
        </div>
        <div>
          <span>Volume:</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            ref={volumeBarRef}
            onChange={handleVolumeChange}
          />
        </div>

        <div>
          <span>Speed:</span>
          <button onClick={() => handlePlaybackRateChange(0.5)}>0.5x</button>
          <button onClick={() => handlePlaybackRateChange(1)}>1x</button>
          <button onClick={() => handlePlaybackRateChange(1.5)}>1.5x</button>
          <button onClick={() => handlePlaybackRateChange(2)}>2x</button>
        </div>
      </div>
    </div>
  );
}

export default VideoUploader;