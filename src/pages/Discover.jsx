import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { useDispatch, useSelector } from 'react-redux';
const Discover = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const genreTitle = "POP";
    const { data, isFetching, error } = useGetTopChartsQuery();
    if (isFetching){
        return <Loader title="songs is loading" />
    };
    
    if (error) {
    return <Error/>
    };
        
    
    return (

        <div className='flex flex-col'>
            <div className='w-full flex justify-between item-center sm: flex-row flex-col mt-4 mb-10'>
                <h2 className="font-bold text-3xl text-white text-left ">Discover</h2>
                <select
                    onChange={() => { }}
                    value=""
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none 
                    sm:mt-0 mt-6 w-20 "
                >
                    {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
                        
                </select>
                <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                    {data?.map((song, i) => (
                        <SongCard
                            activeSong={activeSong}
                            isPlaying={isPlaying}
                            song={song}
                            key={song.key}
                            i={i}
                            data={data}
                        />
                    ))}
                </div>
            </div>
                
        </div>
    );
} 

export default Discover;
