import { ArrowPathIcon,  } from "@heroicons/react/24/solid";
 const PageLoader = () => {
  return (
    <div className='h-s fixed flex items-center justify-center inset-0 min-h-[calc(100vh-320px)] bg-opacity-50 bg-gray-200'>
       <ArrowPathIcon className='w-8 h-8 rotate'/>
    </div>
  )
}
export default PageLoader;