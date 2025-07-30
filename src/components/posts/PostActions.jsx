import { useState } from "react";
import commentIcon from "../../assets/icons/comment.svg";
import linkedMama from "../../assets/icons/likePng.png";
import LikeIcon from "../../assets/icons/like.svg";
import shareIcon from "../../assets/icons/share.svg";
import useAxios from "../../hooks/useAxios";
import { useAuth } from "../../hooks/useAuth";

function PostActions({ post }) {
  const {auth} = useAuth();
  const [liked, setLiked] = useState(post?.likes?.includes(auth?.user?.id));
  const { api } = useAxios();

  const handleLikePost = async () => {
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/like`
      );
      if (response.status === 200) {
        setLiked(true);
      }
    } catch (error) {
      console.log(error);
      setLiked(false);
    }
  };

  return (
    <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
      {/* Like Button */}
      <button
        onClick={handleLikePost}
        className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
      >
         <img className="w-8" src={!liked ?  LikeIcon:  linkedMama} alt="Like" />     
        {!liked && <span>Like</span>}
      </button>
      {/* Comment Button */}
      <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
        <img src={commentIcon} alt="Comment" />
        <span>Comment({post?.comments?.length})</span>
      </button>
      {/* Share Button */}
      {/* Like Button */}
      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={shareIcon} alt="Share" />
        <span>Share</span>
      </button>
    </div>
  );
}

export default PostActions;
