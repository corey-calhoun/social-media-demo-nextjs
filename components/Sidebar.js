import { Avatar } from '@material-ui/core'
import { VisibilityTwoTone } from '@material-ui/icons'
import React from 'react'

function Sidebar() {
  return (
    <div className="hidden md:flex md:flex-col h-screen md:w-1/3 bg-red-600">

      {/*top card */}
      <div className="flex-col bg-purple-200 rounded-md mb-2 space-y-2">

        <Avatar className="flex align-center mx-auto mt-10 text-xl" />

        <div className="text-sm mt-5">
          <h2 className="font-bold">John Doe</h2>
          <h4 className="text-xs">Sr Software Engineer</h4>
        </div>

        <div className="flex text-xs justify-wide">
          <di>
            <h1>Profile</h1>
            <div v className="flex">
              <VisibilityTwoTone />
              <p>213</p>
            </div>

          </di>

          <div>
            <h1>Post</h1>
            <div className="flex">
              <VisibilityTwoTone />
              <p>58</p>
            </div>

          </div>


        </div>



      </div>

      {/*bottom card */}
      <div className="flex-col p-4  bg-purple-200 rounded-md text-sm">

        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>

      </div>
      {/*top card */}
    </div>
  )
}

export default Sidebar
