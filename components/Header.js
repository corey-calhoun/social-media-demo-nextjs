import React from 'react'
import Image from 'next/image'
import logo from '../public/site-logo.svg'
import { BusinessCenterTwoTone, ForumTwoTone, HomeTwoTone, MenuTwoTone, NotificationsTwoTone, SearchTwoTone } from '@material-ui/icons'
import HeaderOption from './HeaderOption'


function Header() {

  const handleClick = (e) => {
    e.preventDefault;

  }

  return (
    <div className="flex bg-white justify-between md:justify-evenly  items-center py2 mx-auto border-b-2  top-0 sticky z-100">
      <div className="object-contian flex-shrink-0 flex mx-auto">
        <Image
          src={logo}
          alt=""
          width={55}
          height={55}
          objectFit='contain'
        />
      </div>

      {/*searchbar section */}
      <div className=" flex bg-gray-200 md:w-2/4 p-3  ml-2 rounded-3x items-center rounded-3xl ">
        <SearchTwoTone className="text-gray-400 h-10 mr-2 cursor-pointer" onClick={handleClick} />
        <input
          type="text"
          className="rounded-lg text-gray-400 bg-transparent focus:outline-none "
          placeholder="Search"
        />
      </div>

      {/* messenger icon & hamburger menu */}
      <nav className=" flex w-3/5  md:w-1/2 justify-between p-3 items-center md:justify-evenly ">

        <HeaderOption
          Icon={HomeTwoTone}
          title="Home"
        />
        <HeaderOption
          Icon={ForumTwoTone}
          title="Messaging"
        />
        <HeaderOption
          Icon={BusinessCenterTwoTone}
          title="Jobs"

        />
        <HeaderOption
          Icon={NotificationsTwoTone}
          title="Notifications"

        />
        <HeaderOption
          avatar='https://i.pinimg.com/564x/0e/ef/01/0eef014a64129951c6524c2c00f4044b.jpg'
          title="user"

        />

        {/* set hamburger to show on mobile screen */}
      </nav>

    </div>
  )
}

export default Header
