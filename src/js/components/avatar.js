import React from 'react';


const Avatar = ({ url }) => {
    return (
        <div>
            <img src={url} className="rounded float-right" width="180" height="180"/>
        </div>
    )
}

export default Avatar;
