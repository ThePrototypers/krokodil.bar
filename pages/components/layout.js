import Link from 'next/link'
import { Disclosure, } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Layout({ children }) {
  return (
    <>
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <Link to="/news">
                      <a
                        className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                      >
                        Aktuelles
                      </a></Link>
                    <Link to="/menu">
                      <a
                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      >
                        Menu
                      </a></Link>
                  </div>
                </div>

              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-4 space-y-1">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Disclosure.Button
                  as="a"
                  href="/news"
                  className="bg-indigo-50 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Aktuelles
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/menu"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Menu
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div className="max-w-7xl py-10 mx-auto px-2 sm:px-6 lg:px-8">
        {children}
      </div>
    </>
  )
}
