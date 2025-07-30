import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <>
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>
      {posts.length > 0 &&
        posts.map((post) => <PostCard key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
