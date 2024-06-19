import React from 'react'
import './SuggestionCard.css'
export default function SuggestionCard({
    src,
    name,
    username = "Suggested for you",
    btnText = "Follow"
}) {
    return (
        <div className="suggestion-card">
            <div className="suggestion-left">
                <img src={src} alt="" width={56} className='suggestion-profile' />
                <div className="suggestion-card-text">
                    <p id='suggestion-card-bold'>{name}</p>
                    <p id='suggestion-card-gray'>{username}</p>
                </div>
            </div>

            <p className='suggestion-btn'>{btnText}</p>

        </div>
    )
}
