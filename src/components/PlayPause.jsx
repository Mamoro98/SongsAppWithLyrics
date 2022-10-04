import {FaPlayCircle,FaPauseCircle} from 'react-icons/fa'
const PlayPause = ({ activeSong, isPlaying, song, handlePlay, handlePause }) => 
(isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle
    className='text-gray-400'
    size={35}
    onClick ={handlePause}
  />
  ):
  (
    <FaPlayCircle 
      className='text-gray-400'
      size={35}
      onClick ={handlePlay}
  />
  )
  )
;

export default PlayPause;
