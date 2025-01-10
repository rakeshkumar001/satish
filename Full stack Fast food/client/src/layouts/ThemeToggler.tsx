import React, { useEffect } from 'react';
import { useState } from 'react';
import { Switch } from '@headlessui/react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ThemeToggler = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"))
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleThemeChange = () => {
        localStorage.setItem("theme", theme === 'light' ? 'dark' : 'light');
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <div className='fixed top-3 right-3 z-20' data-tooltip-target="tooltip-default">
            <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Tooltip content
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <Switch
                checked={theme === 'light' ? true : false}
                onChange={handleThemeChange}
                className={`${theme === 'light' ? 'bg-gray-400' : 'bg-slate-600'}` +
                    ' relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out'
                }
            >
                <span className='sr-only'>Use setting</span>
                <span
                    className={`${theme === 'light' ? 'translate-x-5' : 'translate-x-0'}` +
                        ' pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'}
                >
                    <span
                        className={`${theme === 'light' ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in'}` +
                            ' absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                        }
                        aria-hidden='true'
                    >
                        <MoonIcon className='h-3 w-3 text-gray-400' />
                    </span>
                    <span
                        className={`${theme === 'light' ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out'}` +
                            ' absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                        }
                        aria-hidden='true'
                    >
                        <SunIcon className='h-3 w-3 text-yellow-600' />
                    </span>
                </span>
            </Switch>
        </div>

    )
}

export default ThemeToggler