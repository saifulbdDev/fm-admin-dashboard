import { Link } from "react-router-dom";
import React, { useEffect } from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const navigation = {
  solutions: [
    { name: '#1 (USDOT)', href: '#' },
    { name: '#2 (Dot Authority) Package', href: '#' },
    { name: '#3 (Starting Trucking Company)', href: '#' },
    { name: '#4 (Trucking Authority Package)', href: '#' },
    { name: '#4 (#5 (Motor Carrier Authority))', href: '#' },
    { name: '#4 (#6 Broker Authority Package))', href: '#' },
  ],
  support: [
    { name: 'DOT PIN Number', href: '#' },
    { name: 'DOT Audit', href: '#' },
    { name: 'Basics of DOT Week', href: '#' },
    { name: 'DOT Violations', href: '#' },
    { name: 'DOT Number Cost', href: '#' },
    { name: 'OP 1', href: '#' },
    { name: 'Trucking LLC', href: '#' },
  ],
  company: [
    { name: 'About FMCSA Registration', href: '#' },
    { name: 'How Much Does a Dot Number Cost', href: '#' },
    { name: 'Licensing Tabulate', href: '#' },
    { name: 'Terms & Conditions™', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'DOT Training Videos', href: '#' },
  ],
  legal: [
    { name: 'About FMCSA Registration', href: '#', icon: <img src="/assets/dot-point.jpg" /> },
    { name: '+1 (866) 477-0707', href: '#', icon: <PhoneIcon className="w-3 h-3" /> },
    { name: 'info@FMCSAregistration.com', href: '#', icon: <EnvelopeIcon className="w-3 h-3" /> },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" fill="currentColor"  {...props}>
          <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  useEffect(() => {
    // Script to render the YouTube subscribe button
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="bg-[#032e65]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-10">
        <div className="text-start">
          <div className="space-y-8 text-start">
            <img
              className=" w-[260px]"
              src="/footerLogo.png"
              alt="Company name"
            />


          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-2 sm:col-span-1 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8 text-left">
              <div>
                <h3 className="text-lg font-semibold leading-6 mt-[2.5rem] text-[#FCD12A]">Operating Authority Packages</h3>
                <div className="mt-8">
                  <ul role="list" className="mt-2 space-y-2 ">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-[12px] flex items-center space-x-2 leading-6 text-gray-300 hover:text-white">
                          <img src="/assets/dot-point.jpg" /> <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-lg font-semibold leading-6 mt-[2.5rem] text-[#FCD12A]">News</h3>
                <div className="mt-8">
                  <ul role="list" className="mt-2 space-y-2">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-[12px] leading-6 flex items-center space-x-2 text-gray-300 hover:text-white">
                          <img src="/assets/dot-point.jpg" /> <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold leading-6 mt-[2.5rem] text-[#FCD12A]">What I Need</h3>
                <div className="mt-8">
                  <ul role="list" className="mt-2 space-y-2">
                    {navigation.company.map((item) => (
                      <li key={item.name} className="mt-0 pt-0 mb-0 pb-0">
                        <Link href={item.href} className="text-[12px] leading-6 flex items-center space-x-2 text-gray-300 hover:text-white">
                          <img src="/assets/dot-point.jpg" /> <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-lg font-semibold leading-6 mt-[2.5rem] text-[#FCD12A]">Need Any Help?</h3>
                <div className="mt-8">
                  <ul role="list" className="mt-2 space-y-2">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-[12px] leading-6 flex items-center space-x-2 text-gray-300 hover:text-white">
                          {item.icon} <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                    <div className="flex space-x-2 pt-2">
                      <div>
                        <img src="/fmcsa-truck-logo.png" />
                      </div>
                      <div className="flex-row-reverse gap-5">
                        <div>
                          <div className="g-ytsubscribe text-[12px]" data-channelid="UCZboJCVgAjku8xh2-MPsRsQ" data-layout="default" data-count="default">
                            <button id="g-yt">Subscribe</button>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-white text-[12px]">Trucking Registration</h3>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="flex space-x-2 mt-8">
                  {navigation.social.map((item) => (
                    <Link key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                      <span className="sr-only">{item.name}</span>
                      <div className="w-8 h-8 bg-[#FCD12A] flex items-center justify-center rounded-md">
                        <item.icon className="h-6 w-6 filed-[#084382]" aria-hidden="true" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 sm:mt-20 lg:mt-10">
            <p className="text-[14px] leading-5 text-white">Registration LLC is a private, third-party provider that files FMCSA documents and offers services for a fee. We are NOT affiliated with any government authority.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
