
import PropTypes from 'prop-types';
import './Storycard.css';
import { timeSince } from '../utils/timeUtils';
import likeIcon from '../../assets/like.svg';


export const StoryCard = ({ story, isActive }) => {
 
  const cardStyle = {
    transform: isActive ? 'scale(1)' : 'scale(1)', // Enlarge if active
    transition: 'transform 0.3s ease-in-out',
    // Other styles...
    zIndex: isActive ? 100 : 1, // Increase z-index for active card
    position: 'relative', // Ensure z-index takes effect
  };
  
//rbgierbvo
  return (
    <div className="story-card" style={cardStyle}>
    {/* Image and Category/City Info */}
    <img src={`/${story.image}`} alt={`${story.city} story`} />
    <div className="story-info">
      <h3>{story.category} {story.city}</h3>
    </div>
    {isActive && (
      <div className="story-overlay">
        <p>{story.content}</p>
        <div className="overlay-date-icon">
          {timeSince(story.createdAt)}
          <img src={likeIcon} alt="Like" />
          <span className="like-count">{story.ranking}</span>
        </div>
      </div>
    )}
  </div>
);
};

StoryCard.propTypes = {
  story: PropTypes.shape({
    city: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    ranking: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  isActive: PropTypes.bool,
};