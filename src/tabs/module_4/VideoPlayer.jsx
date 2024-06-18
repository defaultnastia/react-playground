import { forwardRef, useEffect, useRef } from "react";

const CustomButton = forwardRef((props, ref) => (
  <button ref={ref}>{props.children}</button>
));

const VideoPlayer = ({ source }) => {
  const playerRef = useRef();
  const customRef = useRef();

  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();

  useEffect(() => customRef.current.focus(), []);

  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <CustomButton ref={customRef}>Button with forwarded ref</CustomButton>
      </div>
    </div>
  );
};

export default VideoPlayer;
