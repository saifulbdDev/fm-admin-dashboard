import React from 'react'
import PreviewModal from '../components/ui/Modals/PreviewModal'

const Verifylist = () => {

    return (
        <div>
            <div className='flex justify-between items-center border-2 px-4 py-4 bg-white'>
                <h1 className='text-[#1135a7] font-bold text-[1.1rem]'>VERIFICATION USER LIST</h1>
                <button className='bg-[#007bff] px-2 py-2 text-white font-medium hover:bg-[#1135a7]'>Add Now</button>
            </div>
            <div>
                <table className="w-full border-2">
                    <thead className='bg-[#1135a7] '>
                        <tr className='text-left text-white '>
                            <th className='py-4 border-r-[1px] pl-2'>#ID</th>
                            <th className='py-4 border-r-[1px] pl-2'>Name</th>
                            <th className='py-4 border-r-[1px] pl-2'>Company Name</th>
                            <th className='py-4 border-r-[1px] pl-2'>Document Type</th>
                            <th className='py-4 border-r-[1px] pl-2'>Verify Status</th>
                            <th className='py-4 border-r-[1px] pl-2'>Preview</th>
                            <th className='py-4 border-r-[1px] pl-2'>Edit</th>
                            <th className='py-4 border-r-[1px] pl-2'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-[rgba(0,0,0,.05)]'>
                            <td className='pl-2 py-2  font-medium border-r-[1px] border-r-white'>7</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px] border-r-white'>Malcolm Lockyer</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px] border-r-white'>1961</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px] border-r-white'>1961</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px] border-r-white'>Flase</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px] border-r-white'><PreviewModal/></td>
                            <td className='pl-2 py-2 font-medium border-r-[1px] border-r-white'><button className="rounded-md bg-[#6c757d] px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">Edit</button></td>
                            <td className='pl-2 py-2 font-medium border-r-[1px] border-r-white'><button className="rounded-md bg-[#dc3545] px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">Delete</button></td>
                        </tr>
                        <tr>
                            <td className='pl-2 py-2 font-medium border-r-[1px]'>6</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px]'>Malcolm Lockyer</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px]'>1961</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px]'>1961</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px]'>Flase</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px]'><PreviewModal/></td>
                            <td className='pl-2 py-2 font-medium border-r-[1px]'><button className="rounded-md bg-[#6c757d] px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">Edit</button></td>
                            <td className='pl-2 py-2 font-medium border-r-[1px]'><button className="rounded-md bg-[#dc3545] px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">Delete</button></td>
                        </tr>
                        <tr className='bg-[rgba(0,0,0,.05)]'>
                            <td className='pl-2 py-2  font-medium border-r-[1px] border-r-white'>7</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px] border-r-white'>Malcolm Lockyer</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px] border-r-white'>1961</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px] border-r-white'>1961</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px] border-r-white'>Flase</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px] border-r-white'><PreviewModal/></td>
                            <td className='pl-2 py-2 font-medium border-r-[1px] border-r-white'><button className="rounded-md bg-[#6c757d] px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">Edit</button></td>
                            <td className='pl-2 py-2 font-medium border-r-[1px] border-r-white'><button className="rounded-md bg-[#dc3545] px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">Delete</button></td>
                        </tr>
                        <tr>
                            <td className='pl-2 py-2 font-medium border-r-[1px]'>6</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px]'>Malcolm Lockyer</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px]'>1961</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px]'>1961</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px]'>Flase</td>
                            <td className='pl-2 py-2 font-medium border-r-[1px]'><PreviewModal/></td>
                            <td className='pl-2 py-2 font-medium border-r-[1px]'><button className="rounded-md bg-[#6c757d] px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">Edit</button></td>
                            <td className='pl-2 py-2 font-medium border-r-[1px]'><button className="rounded-md bg-[#dc3545] px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Verifylist