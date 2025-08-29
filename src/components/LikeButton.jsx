import {useState} from 'react';

const LikeButton = ({}) => {
const [likeCount,setIsLikeCount] = useState(0);
const [isLiked, setIsLiked] = useState(false);

const toggleLike = () => {
    setIsLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    setIsLiked(prev => !prev);
  };

    return(
        <button type='button' onClick={toggleLike}>
            {isLiked ? `❤️ ${likeCount}` : `🤍`}
        </button>
    )
}
export default LikeButton;