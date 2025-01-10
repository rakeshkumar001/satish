import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import Section from '../components/Section'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQPage = () => {
  return (
    <Section title="FAQ's" classname=''>
      <div className="mx-auto max-w-screen-sm text-center">
        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">FAQ's</h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of our audience early and often.</p>
      </div>
      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75">
                  <span>What is your refund policy?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-orange-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75">
                  <span>Do you offer technical support?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-orange-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                  Yes.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </Section>
  )
}

export default FAQPage