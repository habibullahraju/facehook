function CommentList({ comment }) {
  
  return (
    <div className="flex items-center gap-3 pt-4">
      <img
        className="max-w-6 max-h-6 rounded-full"
        src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
          comment?.author?.avatar
        }`}
        alt="avatar"
      />
      <div>
        <div className="flex gap-1 text-xs lg:text-sm">
          <span>{comment?.author?.name}</span>
          <span>{comment?.comment}</span>
        </div>
      </div>
    </div>
  );
}

export default CommentList;
