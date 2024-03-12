import { PlusIcon} from '@heroicons/react/24/outline'
import EmailCard from '@/components/Card/Email';

const Email_inbox = () => {
  return (
    <div className="mt-4 bg-white">
    
        <div className="border-b py-2 px-4">
          <h2 className="text-[#1135a7] font-bold">All Emails</h2>
          <p className="text-[13px]">Sent & Received</p>
        </div>
        <div className="flex w-ful  ">
          <div className="max-w-[115px]">
            <div className="pt-10 px-8">
              <a className="w-10 h-10 flex items-center justify-center p-[3px] border  rounded-md bg-[#6f42c1] text-[10px]" id="btn-compose-mail"  href="">
                <PlusIcon className='w-6 h-6 text-white'/>
              </a>
            </div>
          </div>
          <div className="mail-item-inner border-l">
            <div className="bg-white ">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none w-full border-b border-l border-r">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block py-2 ps-10 text-sm bg-white border-none hover:outline-none focus:outline-none dark:placeholder-gray-400 text-[#000] w-full"
                  placeholder="Search Here..."
                />
              </div>
            </div>
            <div className="h-[600px] overflow-y-auto">
              {[...Array(10)].map((e, i) => {
                return (
                    <EmailCard key={i}/>
                );
              })}
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default Email_inbox;
