import React from 'react'

const SectionTitle = ({ title, descp }) => {
    return (
        <div className="place_on_bottom  text-center">
            <h4 className="section-title font-Lemon text-3xl text-primary relative ">{title}</h4>
            <p className="mt-4 dark:text-white">{descp}</p>
        </div>
    )
}
export default SectionTitle