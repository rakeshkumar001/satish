import React from 'react'
const getData = async () => {
    const res = await fetch(process.env.URL + 'data/colorData.js', { method: 'GET' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
const Card = async () => {
    const colourData = await getData()
    return (
        <div className='flex justify-between'>
            {
                colourData.map((val: { name: string, hex: string, id: number }) => {
                    return (
                        <div key={val.id} className={'cursor-pointer max-w-sm p-6  border rounded-lg  border-gray-700  bg-[' + val.hex + ']'}>
                            {/*  bg-[#1da1f2] */}
                            <p> {val.name}</p>
                        </div >
                    )
                })
            }
        </div >
    )
}

export default Card