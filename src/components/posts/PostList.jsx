import PostCard from "./PostCard";

function PostList({ posts }) {
  const sortedPosts = posts?.sort(
    (a, b) => new Date(b.createAt) - new Date(a.createAt)
  );
  return (
    <>
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>
      {posts?.length > 0 &&
        sortedPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
