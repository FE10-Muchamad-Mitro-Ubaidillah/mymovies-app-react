import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Loading = () => {
    const theme = useSelector((state) => state.theme);
    return (
        <div className={`relative h-screen w-screen ${theme === 'dark' ? `bg-gray-800 text-white` : `bg-white text-black`} `}>
            <div className="absolute top-60 left-1/2 text-center">
                <AiOutlineLoading className="animate-spin w-20 h-20" />
                <p className="text-xl">Loading...</p>
            </div>
        </div>
    );
}

export default Loading;
