import React from 'react'
import { ArrowLeftEndOnRectangleIcon, ArrowLeftIcon, ArrowLeftStartOnRectangleIcon, ArrowPathRoundedSquareIcon, BellAlertIcon, BookOpenIcon, ChatBubbleLeftRightIcon, CheckBadgeIcon, CheckIcon, ChevronDownIcon, FireIcon, FunnelIcon, HomeIcon, MagnifyingGlassCircleIcon, MapPinIcon, MegaphoneIcon, MinusIcon, PhoneIcon, PlusIcon, ShoppingCartIcon, Squares2X2Icon, TrashIcon, TruckIcon, ViewfinderCircleIcon, } from '@heroicons/react/20/solid';


export default function Icons({ iconName, classname }: { iconName: string, classname?: string }) {
    switch (iconName) {
        case 'home':
            return <HomeIcon className={classname ? classname : 'h-5 w-5'} />
        case 'menu':
            return <BookOpenIcon className={classname ? classname : 'h-5 w-5'} />
        case 'cart':
            return <ShoppingCartIcon className={classname ? classname : 'h-5 w-5'} />
        case 'history':
            return <ArrowPathRoundedSquareIcon className={classname ? classname : 'h-5 w-5'} />
        case 'notification':
            return <BellAlertIcon className={classname ? classname : 'h-5 w-5'} />
        case 'logout':
            return <ArrowLeftStartOnRectangleIcon className={classname ? classname : 'h-5 w-5'} />
        case 'blog':
            return <ChatBubbleLeftRightIcon className={classname ? classname : 'h-5 w-5'} />
        case 'faq':
            return <MegaphoneIcon className={classname ? classname : 'h-5 w-5'} />
        case 'contact':
            return <PhoneIcon className={classname ? classname : 'h-5 w-5'} />
        case 'arrowLeft':
            return <ArrowLeftIcon className={classname ? classname : 'h-5 w-5'} />
        case 'plus':
            return <PlusIcon className={classname ? classname : 'h-5 w-5'} />
        case 'minus':
            return <MinusIcon className={classname ? classname : 'h-5 w-5'} />
        case 'delete':
            return <TrashIcon className={classname ? classname : 'h-5 w-5'} />
        case 'mapPin':
            return <MapPinIcon className={classname ? classname : 'h-5 w-5'} />
        case 'vehicle':
            return <TruckIcon className={classname ? classname : 'h-5 w-5'} />
        case 'delivered':
            return <CheckBadgeIcon className={classname ? classname : 'h-5 w-5'} />
        case 'check':
            return <CheckIcon className={classname ? classname : 'h-5 w-5'} />
        case 'check':
            return <CheckIcon className={classname ? classname : 'h-5 w-5'} />
        case 'foodType':
            return <ViewfinderCircleIcon className={classname ? classname : 'h-5 w-5'} />
        case 'check':
            return <CheckIcon className={classname ? classname : 'h-5 w-5'} />
        default:
            return <Squares2X2Icon className={classname ? classname : 'h-5 w-5'} />;
    }
}
