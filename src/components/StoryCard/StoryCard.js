
import './StoryCard.css'
export default function StoryCard({ name, src }) {
    return (
        <div className="story-card">
            <div className="story-circle">
                <img src={src} className='story-img' alt="" />
            </div>
            <span className='story-text'>{name}</span>
        </div>
    )
}
