import React from 'react';
import swimmingImage from '../../assets/swimming.png'
import playground from '../../assets/playground.png'
import classImage from '../../assets/class.png'



const Qzone = () => { 
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className='space-y-5'>
                <img className='w-full' src={swimmingImage} alt="" />
                <img className='w-full' src={playground} alt="" />
                <img className='w-full' src={classImage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;