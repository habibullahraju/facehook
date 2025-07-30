import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import { useAuth } from "../hooks/useAuth";
import PostsProvider from "../providers/PostsProvider";
import ProfileProvider from "../providers/ProfileProvider";

export default function PrivateRoute() {
  const { auth } = useAuth();
  return (
    <>
      {auth.user ? (
        <>
          <PostsProvider>
            <ProfileProvider>
              <Header />
              <main className="mx-auto max-w-[1020px] py-8">
                <div className="container">
                  <Outlet />
                </div>
              </main>
            </ProfileProvider>
          </PostsProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
