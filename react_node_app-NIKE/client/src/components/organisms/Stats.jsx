import React from 'react'

export default function Stats() {
    return (
        <div>
            <div className="container my-24 px-6 mx-auto">
                <section className="mb-32 text-gray-800 text-center">
                    <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-3">
                        <div className="mb-12 md:mb-0 shadow-lg p-10 rounded-xl">
                            <h2 className="text-3xl font-bold display-5 text-primary mb-4">1000+</h2>
                            <h5 className="text-lg font-bold font-Oswald mb-4">Products</h5>
                            <p className="text-gray-500 text-xs">
                                Laudantium totam quas cumque pariatur at doloremque hic quos quia eius
                            </p>
                        </div>

                        <div className="mb-12 md:mb-0 shadow-lg p-10 rounded-xl">
                            <h2 className="text-3xl font-bold display-5 text-primary mb-4">100%</h2>
                            <h5 className="text-lg font-bold font-Oswald mb-4">Secured Payment</h5>
                            <p className="text-gray-500 text-xs">
                                Eum nostrum fugit numquam, voluptates veniam neque quibusdam ullam
                            </p>
                        </div>

                        <div className="mb-12 md:mb-0 shadow-lg p-10 rounded-xl">
                            <h2 className="text-3xl font-bold display-5 text-primary mb-4">1.15 M+</h2>
                            <h5 className="text-lg font-bold font-Oswald mb-4">Happy Customers</h5>
                            <p className="text-gray-500 text-xs">
                                Enim cupiditate, minus nulla dolor cumque iure eveniet facere ullam potistas
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
