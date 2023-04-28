import React, { useState, useRef } from "react";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";

function HomeVideo() {
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
        <div>
         <video
        src="/podcast__tester.mp4"
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        muted={muted}
        className={styles.vide0__baby} 
        // you will have to change the styling {styles.vide0__baby} for others to work. 
        // currently, it's only play button that is working.
        //  check it out and come up with something. Sorry
      />    
        </div>
     
      <div>
        <button onClick={togglePlay}>
          {playing ? (
            <svg
              className={styles.play__btn__post}
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth={0} />
              <g strokeLinecap="round" strokeLinejoin="round" />
              <g>
                <path
                  d="M16.1378 10.5689L9.60498 7.30252C8.40816 6.70411 7 7.5744 7 8.91249V15.0876C7 16.4257 8.40816 17.2959 9.60498 16.6975L16.1378 13.4311C17.3171 12.8415 17.3171 11.1586 16.1378 10.5689Z"
                  fill="#01a8ea97"
                />
              </g>
            </svg>
          ) : (
            <svg
              className={styles.play__btn__post}
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth={0} />
              <g strokeLinecap="round" strokeLinejoin="round" />
              <g>
                <path
                  d="M16.1378 10.5689L9.60498 7.30252C8.40816 6.70411 7 7.5744 7 8.91249V15.0876C7 16.4257 8.40816 17.2959 9.60498 16.6975L16.1378 13.4311C17.3171 12.8415 17.3171 11.1586 16.1378 10.5689Z"
                  fill="#01a8ea97"
                />
              </g>
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

export default HomeVideo;
