import React, { useState } from 'react'
import timeIcon from '../../assets/icons/time.svg';
import threeDotIcon from '../../assets/icons/3dots.svg';
import editIcon from '../../assets/icons/edit.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import { getTimeCalculate } from '../../utils/getTimeCalculate';
import { useAvatar } from '../../hooks/useAvatar';

function PostHeader({post}) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const {avatarURL} = useAvatar(post)
  const handleOpenMenu = () =>{
    setIsOpenMenu(!isOpenMenu)
  }
    return (
        <header className="flex items-center justify-between gap-4">
          {/* author info */}
          <div className="flex items-center gap-3">
            <img
              className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
              src={avatarURL}
              alt="avatar"
            />
            <div>
              <h6 className="text-lg lg:text-xl">{post?.author.name}</h6>
              <div className="flex items-center gap-1.5">
                <img src={timeIcon} alt="time" />
                <span className="text-sm text-gray-400 lg:text-base">
                  {getTimeCalculate(post.createAt)}
                </span>
              </div>
            </div>
          </div>
          {/* author info ends */}
          {/* action dot */}
          <div className="relative">
            <button onClick={handleOpenMenu}>
              <img src={threeDotIcon} alt="3dots of Action" />
            </button>
            {/* Action Menus Popup */}
            {isOpenMenu && <div className="action-modal-container">
              <button className="action-menu-item hover:text-lwsGreen">
                <img src={editIcon} alt="Edit" />
                Edit
              </button>
              <button className="action-menu-item hover:text-red-500">
                <img src={deleteIcon} alt="Delete" />
                Delete
              </button>
            </div>}
          </div>
          {/* action dot ends */}
        </header>
    )
}

export default PostHeader
