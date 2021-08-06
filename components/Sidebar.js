import { Avatar } from '@material-ui/core'
import { EyeIcon } from '@heroicons/react/outline'
import React from 'react'

function Sidebar() {
  return (
    <div className="hidden md:flex md:flex-col h-screen md:w-2/5 md:flex-grow-0">

      {/*top card */}
      <div className="flex-col bg-white shadow-xl rounded-md mb-2 space-y-2">

        <Avatar className="flex align-center mx-auto mt-10 text-xl" />

        <div className="text-sm mt-5 ml-2">
          <h2 className="font-bold text-lg">John Doe</h2>
          <h4 className="text-xs">Sr Software Engineer</h4>
        </div>

        <div className="flex text-xs space-x-4 p-2">
          <div>
            <h2>Profile</h2>
            <div className="flex  items-center cursor-pointer font-bold">
              <EyeIcon />
              <p>213</p>
            </div>

          </div>

          <div>
            <h2>Post</h2>
            <div className="flex  items-center cursor-pointer font-bold">
              <EyeIcon />
              <p>58</p>
            </div>
          </div>

          <button className=" shadow-md bg-indigo-200 rounded-md text-xs p-1 cursor-pointer ">Go Premium</button>


        </div>



      </div>

      {/*bottom card */}
      <div className="flex-col p-4  bg-white shadow-xl rounded-md text-sm">
        <div className="mb-5">
          <h3>Recent</h3>
          <h5># artificialintelligience</h5>
          <h5># figma</h5>
          <h5># userexperience</h5>
          <h5># awsbeanstalk</h5>
        </div>

        <div>
          <h3>Groups</h3>
          <h5># artificialintelligience</h5>
          <h5># figma</h5>
          <h5># userexperience</h5>
          <h5># awsbeanstalk</h5>
        </div>


      </div>
      {/*top card */}
    </div>
  )
}

export default Sidebar
