import React from 'react';
import './UserTile.css';

const UserTile = ({props}) => {
    return (
        <>
            {props.map((data, i) =>
            <div className='user-tile'>
                <img  className='user-image' src={data.img} alt="empty"/>

                <div>
                    <p className='user-name'>{data.name}</p>
                        
                    <span>{data.created}</span>
                    <span>{data.time}</span>
                </div>

                { data.shareIcons ? <div className='user-icon'>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                </div> : null }
            </div>
            )}
        </>
    )
}

export default UserTile