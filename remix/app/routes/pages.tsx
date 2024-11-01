import React, { useState } from 'react'

const pages = () => {
    const [data, setData] = useState<File | null>(null)

    return <div className='w-[600px] h-[200px] mx-auto grid grid-cols-6 gap-2'>
        <div className='col-span-2 h-full'>
            <img alt="Avatar" src={data ? URL.createObjectURL(data) : ''} className='w-full h-full mix-blend-lighten' />
        </div>
        <div className='col-span-4 h-full flex flex-col justify-center items-center'>
            <div>{data && `${data.name} - ${data.size} bytes`}</div>
            <label htmlFor="uploadFile1"
                className="col-span-4 mt-1 flex items-center bg-gray-800 hover:bg-gray-700 text-white text-base px-5 py-1 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 mr-2 fill-white inline" viewBox="0 0 32 32">
                    <path
                        d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                        data-original="#000000" />
                    <path
                        d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                        data-original="#000000" />
                </svg>
                Choose file to upload
                <input type="file" id='uploadFile1' onChange={(e) => setData(e.target.files ? e.target.files[0] : null)} className="hidden" />
            </label>
        </div>
    </div>
}

export default pages