import { Icon, Avatar } from '@material-ui/core';
import React from 'react'

function HeaderOption({ title, Icon, avatar }) {
  return (
    <div className="flex md:flex-col  items-center md:justify-center cursor-pointer mr-2 ">
      {/* Icon */}

      {/* if we are passed the prop Icon, then render Icon  */}
      {Icon && <Icon className="" />}

      {/* if we are passed the prop Avatar, then render the user avatar  */}
      {avatar && (
        <Avatar className="" src={avatar} />
      )}

      {/* display title prop */}
      <h3 className="hidden md:flex text-sm">{title}</h3>

      {/* Title */}
    </div>
  )
}

export default HeaderOption;
