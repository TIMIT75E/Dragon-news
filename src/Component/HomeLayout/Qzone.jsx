import React from 'react';
import firstPic from "../../assets/swimming.png"
import secendPic from "../../assets/class.png"
import thirdPic from "../../assets/playground.png"

const Qzone = () => {
    return (
        <div className='mx-3 bg-base-200 p-5'>
            <h1 className='font-bold mb-5'>QZone</h1>
            <div className="grid grid-cols-1 gap-5">
                <img src={firstPic} alt="" />
                <img src={secendPic} alt="" />
                <img src={thirdPic} alt="" />
            </div>
        </div>
    );
};

export default Qzone;