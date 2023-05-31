import React, { useState, useRef } from "react";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";

export default function CustomVideo({ pic, id }) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const videoRef = useRef();
  const progressBarRef = useRef();
  const volumeBarRef = useRef();

  // button to pay the video's function
  const togglePlay = () => {
    setPlaying(!playing);
    if (playing) {
      videoRef?.current?.pause();
      console.log("playing");
    } else {
      videoRef?.current?.play();
      console.log("stopped");
    }
  };

  // function to mute the volume
  const toggleMute = () => {
    const newMuted = !muted;
    videoRef.current.volume = newMuted ? 0 : volume;
    setMuted(newMuted);
  };

  // handle the volume
  const handleVolumeChange = () => {
    const newVolume = volumeBarRef.current.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setMuted(false);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
    progressBarRef.current.value = videoRef.current.currentTime;
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
    progressBarRef.current.max = videoRef.current.duration;
  };

  // volume progress
  const handleProgressChange = () => {
    videoRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // function for playback speed
  const handlePlaybackRateChange = (rate) => {
    setPlaybackRate(rate);
    videoRef.current.playbackRate = rate;
  };

  return (
    <>
     <div key={id}>
      <video
        width={200}
        height={200}
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        muted={muted}
        type="video/mp4"
        src={pic !== null && pic}
      />
      <div>
        <button onClick={togglePlay}>
          {playing ? <p>play</p> : <p>pause</p>}
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
    </>
  );
}
