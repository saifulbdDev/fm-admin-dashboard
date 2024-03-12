// @ts-nocheck
import {  createColumnHelper } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import { EyeIcon, } from '@heroicons/react/24/solid'
import { PencilSquareIcon, GlobeAltIcon} from '@heroicons/react/24/outline'
const columnHelper = createColumnHelper();

const blogColumn = [
  columnHelper.accessor("title", {
    cell: (info) => <span>{info.getValue()||'-'}</span>,
    header: () => <span>Title</span>
  }),
  columnHelper.accessor("order", {
    cell: (info) => <span>{info.getValue()||'-'}</span>,
    header: () => <span>Order</span>
  }),
  columnHelper.accessor("created_at", {
    cell: (info) => <span>{info.getValue()||'-'}</span>,
    header: () => <span>Created</span>
  }),
  columnHelper.accessor("updated_at", {
    cell: (info) => <span>{info.getValue()||'-'}</span>,
    header: () => <span>Updated</span>
  }),
  columnHelper.accessor("status", {
    cell: (info) => <span>{info.getValue()||'-'}</span>,
    header: () => <span>Status</span>
  }),
  columnHelper.accessor("author", {
    cell: (info) => <span>{info.getValue()||'-'}</span>,
    header: () => <span>Author</span>
  }),

  columnHelper.accessor('featured_image', {
    // cell: (info) => <img className='w-8 h-8' alt="Title" src={ import.meta.env.VITE_APP_URL+info.getValue()}/>,
    cell: (info) => <img className='w-8 h-8' alt="Title" src="/assets/DOT_Physicals_Near_Me.jpg"/>,
    header: () => <span>Featured Image</span>,
  }),
  columnHelper.accessor('a_link', {
    cell: (info) => <span>{info.getValue()||'0'}</span>,
    header: () => <span>Links</span>,
  }),
  columnHelper.accessor('inboud_links', {
    cell: (info) => <span>{info.getValue()||'0'}</span>,
    header: () => <span>Inboud links</span>,
  }),
  columnHelper.accessor('outboud_links', {
    cell: (info) => <span>{info.getValue()||'0'}</span>,
    header: () => <span>Outboud Links</span>,
  }),

  columnHelper.accessor('id', {

    cell: (info) => { 
      let url = info?.row?.original?.url ? import.meta.env.VITE_APP_URL+info?.row?.original.url+'/':'';
      return ( <div className='flex items-center space-x-2'>
       <Link to={`/admin/blog-detail/${info.getValue()}`}>
          <EyeIcon className='h-4 w-4' />
         
       </Link>
       <Link to={`/admin/blog-edit/${info.getValue()}`}>
          <PencilSquareIcon className='h-4 w-4' />
         
       </Link>
       <a href={url} target="blank">
          <GlobeAltIcon className='h-4 w-4' />
         
       </a>
    </div>)},
    header: () => <span>Actions</span>,
  }),
];


export default blogColumn;