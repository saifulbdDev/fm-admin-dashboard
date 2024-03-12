/* eslint-disable react/prop-types */
import Loader from '@/components/icons/Loader'
const LoaderPage = () => {
  return (
   <div className='mx-auto h-screen flex items-center flex-col justify-center fixed inset-0'>
      <Loader/>
   </div>
  );
};

export default LoaderPage;


