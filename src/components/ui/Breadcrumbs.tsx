import { ChevronRightIcon, } from '@heroicons/react/20/solid';
import Link from 'next/link';

interface Page {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  pages?: Page[];
}

export default function Breadcrumbs({ pages = [] }: BreadcrumbsProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center ">
        {pages.map((page: Page, i: number) => (
          <li key={page.name}>
            <div className="flex items-center ">
              {i !== 0 ? (
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              ) : (
                ''
              )}
              {page.href ? (
                <Link
                  href={page.href}
                  className=" text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {page.name}
                </Link>
              ) : (
                page.name
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}