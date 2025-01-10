import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { faBusAlt, faRecycle, faRetweet, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Feature() {
    return (
        <div>
            <div className="container relative -top-[40px]">
                <div className="row px-10 bg-white  mt-n5 border-radius-lg pb-4 p-3 mx-sm-0 mx-1 position-relative z-index-2 flex items-center justify-between rounded-xl drop-shadow-3xl ">
                    <div className="col-lg-3 col-sm-6 mt-2 mb-lg-0 mb-2 ">
                        <div className="d-flex align-items-center flex items-center justify-center">
                            <FontAwesomeIcon className='mx-3 text-4xl text-primary' icon={faTruck} />
                            <div className="ms-3">
                                <h6 className="mb-1 font-Oswald font-bold">Free Shipping</h6>
                                <p className="mb-0 text-xs text-gray">On order bigger than $50</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-2 mb-lg-0 mb-2">
                        <div className="d-flex align-items-center flex items-center justify-center">
                            <FontAwesomeIcon className='mx-3 text-4xl text-primary' icon={faRetweet} />
                            <div className="ms-3">
                                <h6 className="mb-1 font-Oswald font-bold">15 Days Return</h6>
                                <p className="mb-0 text-xs text-gray">Moneyback guarantee</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-2 mb-lg-0 mb-2">
                        <div className="d-flex align-items-center flex items-center justify-center">
                            <FontAwesomeIcon className='mx-3 text-4xl text-primary' icon={faCreditCard} />

                            <div className="ms-3">
                                <h6 className="mb-1 font-Oswald font-bold">Secure Checkout</h6>
                                <p className="mb-0 text-xs text-gray">Secured by Stripe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
