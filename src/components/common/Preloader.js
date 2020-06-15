import React from 'react';
import Image from '../../image/Spinner-1s-200px.svg'

const Preloader = () => {
    return <div className='preloader'>
        <img src={Image} />
    </div>
}
export default Preloader