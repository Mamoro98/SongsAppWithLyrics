import {loader} from '../assets'
const Loader = ({title}) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} alt="loading" className='w-32 h-32 object-contain' />
    <h1
    className='font-bold text-2xl text-white m-2'
    >{title || "loading..."}</h1>

  </div>
);

export default Loader;
