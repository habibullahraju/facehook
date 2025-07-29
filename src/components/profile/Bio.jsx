import { useState } from "react";
import editIcon from "../../assets/icons/edit.svg";
import checkIcon from "../../assets/icons/icon-check-white.svg";
import { useProfile } from "../../hooks/useProfile";
function Bio() {
  const { state } = useProfile();
  const [bio, setBio] = useState(state?.user?.bio);
  const [editMode, setEditMode] = useState(false);

  const handleBioEdit= ()=>{
    setEditMode(true)
  }
  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {state?.user?.bio}
          </p>
        ) : (
          <div>
            <textarea
              className='p-2 className="leading-[188%] text-gray-600 lg:text-lg rounded-md'
              value={bio}
              rows={4}
              cols={55}
              onChange={(e) => setBio(e.target.value)}
              
            />
          </div>
        )}
      </div>
      {/* Edit Bio button. The Above bio will be editable when clicking on the button */}
      {
        !editMode ? (<button onClick={handleBioEdit} className="flex-center h-7 w-7 rounded-full">
        <img src={editIcon} alt="Edit" />
      </button>): (<button onClick={handleBioEdit} className="flex-center h-7 w-7 rounded-full">
        <img className="text-white" src={checkIcon} alt="Edit" />
      </button>)
      }
    </div>
  );
}

export default Bio;
