import { useEffect } from "react";
import { actions } from "../actions";
import ProfileInfo from "../components/profile/ProfileInfo";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";
import MyPosts from "../components/profile/MyPosts";

export default function ProfilePage() {
  const { api } = useAxios();
  const { auth } = useAuth();
  const { state, dispatch } = useProfile();
  console.log(state);
  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `http://localhost:3000/profile/${auth?.user?.id}`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        dispatch({ type: actions.profile.DATA_FETCHE_ERROR, error });
      }
    };

    fetchProfile();
  }, [auth.user.id]);

  if (state.Loading) return <div>Profile data fetching...</div>;
  if (state.error)
    return <div>Error loading profile: {state?.error?.message}</div>;
  return (
    <>
      <ProfileInfo></ProfileInfo>
      <MyPosts />
    </>
  );
}
