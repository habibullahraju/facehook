import { useRef } from "react";
import EditIcon from "../../assets/icons/edit.svg";
import { useProfile } from "../../hooks/useProfile";
import useAxios from "../../hooks/useAxios";
import { actions } from "../../actions";
export default function ProfileImage() {
  const { state, dispatch } = useProfile();
  const fileUploaderRef = useRef();
  const {api} = useAxios();

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    fileUploaderRef.current.addEventListener("change", updateImageDisplay);
    fileUploaderRef.current.click();
  };

  const updateImageDisplay = async () => {
    const formData = new FormData();
    for (const file of fileUploaderRef.current.files) {
      formData.append('avatar', file)
    }
 try {
     const response = await api.post(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state.user.id}/avatar`, formData)
    if (response.status === 200) {
      dispatch({
        type: actions.profile.IMAGE_UPDATED,
        data: response.data
      })
    }
 } catch (error) {
    dispatch({
        type: actions.profile.DATA_FETCHE_ERROR,
        error: error.message,
      })
 }
  };
  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        className=" h-[200px] w-[200px] rounded-full"
        src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`}
        alt={state?.user?.firstName}
      />
      <form action="">
        <button
          onClick={handleUpdateProfile}
          className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
        >
          <img src={EditIcon} alt="Edit" />
        </button>
        <input type="file" id="file" name="file" ref={fileUploaderRef} hidden />
      </form>
    </div>
  );
}
