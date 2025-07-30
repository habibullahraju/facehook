import { useProfile } from "../../hooks/useProfile";
import PostList from "../posts/PostList";

function MyPosts() {
  const {state} = useProfile();
  return (
    <>
      <PostList posts={state?.posts} />
    </>
  );
}

export default MyPosts;
