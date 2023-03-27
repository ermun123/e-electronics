import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function midCarousel() {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    const alicedata = {
        imgUrl: {},

    }
    const items = [
        <div className="aliceitem m-auto d-flex">
            <div>
                <img className="mt-3" src='speaker.jpg'></img>
            </div>
            <div className='mt-4 ms-2'>
                <h4 className='alicetext'>Speaker</h4>
                <p className='alicetext2'>(6 items)</p>
            </div>
        </div>,
        <div className="aliceitem m-auto d-flex">
            <div className="mt-1 ms-2">
                <img src='laptop.png'></img>
            </div>
            <div className='mt-4 ms-2'>
                <h4 className='alicetext'>Desktop&Laptop</h4>
                <p className='alicetext2'>(6 items)</p>
            </div>
        </div>,
        <div className="aliceitem m-auto"></div>,
    ];
    return (
        <div className='mt-5'>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            />
        </div>

    )
} 