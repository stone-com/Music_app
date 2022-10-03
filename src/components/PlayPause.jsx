import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  // if song is plating and active song is equal to song title, show pause button, else show play button

  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className='text-gray-300' onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className='text-gray-300' onClick={handlePlay} />
  );

export default PlayPause;
