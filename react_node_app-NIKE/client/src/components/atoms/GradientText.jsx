import React from 'react'

export default function GradientText(props) {
    return (
        <div clas>
            <h1 className="font-extrabold text-transparent font-Oswald text-4xl h-12 bg-clip-text w-fit bg-gradient-to-r from-primary to-secondary">
                {props.text}
            </h1>
        </div>
    )
}
