import { useEffect } from "react";
import { actions } from "../actions";
import PostList from "../components/posts/PostList";
import useAxios from "../hooks/useAxios";
import { usePosts } from "../hooks/usePosts";
import NewPost from "../components/posts/NewPost";

export default function HomePage() {
  const { api } = useAxios();
  const { state, dispatch } = usePosts();
  console.log(state)

  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });
    const fetchPosts = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );
        if (response.status === 200) {
          dispatch({ type: actions.post.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        dispatch({ type: actions.post.DATA_ERROR, error: error.message });
      }
    };
    fetchPosts();
  }, []);

  
  if (state?.loading) return <div>Post data Fetching...</div>;
  if (state?.error) return <div>Post data fetching error...</div>;
  return (
    <div>
      <NewPost />
      <PostList posts={state?.posts} />
    </div>
  );
}
