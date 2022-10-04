import { Link } from 'react-router-dom';
import {
  useDispatch
} from 'react-redux';
import PlayPause
  from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({activeSong,isPlaying, song, i,data }) => {
  const dispatch = useDispatch()
  const handlePauseClick = () => { 
    dispatch(playPause(false))
  }
  const handlePlayClick = () => {
    dispatch(playPause(true))
    dispatch(setActiveSong({song,data,i}))
  }
  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
      <div
        className='w-full relative h-56 group'
      >
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}
        >
          <PlayPause 
            activeSong={activeSong}
            isPlaying={isPlaying}
            song={song}
            handlePlay = {handlePlayClick}
            handlePause = {handlePauseClick}
          />
        </div>
        <img src={song.images?.coverart} alt="song_img" />
      </div>
      <div
        className='mt-4 flex flex-col'
      >
        <p className='text-semibold text-lg text-white truncate'>
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className='text-sm text-gray-300 mt-1 truncate'>
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SongCard;