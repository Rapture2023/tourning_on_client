import React from 'react'

const SocialMediaSection = () => {
    return (
        <div className='shadow'>
        <div className='container d-flex justify-content-evenly align-items-center' style={{height: "150px"}}>
            <img src="telephone-call.png" className="" alt="logo" style={{width: "50px", height:"50px", objectFit: "cover"}} />
            <img src="messenger.png" className="" alt="logo" style={{width: "50px", height:"50px" , objectFit: "cover"}} />
            <img src="whatsapp.png" className="" alt="logo" style={{width: "50px", height:"50px" , objectFit: "cover"}} />
        </div>
        </div>
    )
}

export default SocialMediaSection