import { EyeIcon } from '@heroicons/react/outline'
import React from 'react'
// import Image from 'next/image'

function Sidebar() {


  const recentTopic = (topic) => (
    <div className="flex cursor-pointer ">
      <span># </span>
      <p className="text-xs text-gray-800">{topic}</p>
    </div>
  );

  const recentGroup = (group) => (
    <div className="flex  cursor-pointer">
      <span># </span>
      <p className="text-xs text-gray-800">{group}</p>
    </div>
  );

  return (
    // main container
    <div className="hidden md:flex md:flex-col h-screen md:w-2/5 ">

      {/*top card */}
      <div className="flex-col bg-white shadow-xl rounded-md mb-2 space-y-2">

        <img
          className="flex align-center mx-auto mt-5 w-24 h-24  rounded-full"
          src="https://i.pinimg.com/564x/0e/ef/01/0eef014a64129951c6524c2c00f4044b.jpg"
          alt=""
        />

        <div className="text-sm mt-5 ml-2">
          <h2 className="font-bold text-lg">John Doe</h2>
          <h4 className="text-xs">Sr Software Engineer</h4>
        </div>

        <div className="flex space-x-4 p-2">
          <div>
            <h2 className="flex font-thin text-sm items-center">Profile</h2>
            <div className="flex  items-center cursor-pointer font-semibold">
              <EyeIcon />
              <p>213</p>
            </div>
          </div>

          <div>
            <h2 className="flex font-thin  text-sm items-center">Post</h2>
            <div className="flex  items-center cursor-pointer font-semibold">
              <EyeIcon />
              <p>58</p>
            </div>
          </div>

          <button className=" shadow-md bg-indigo-500 text-white rounded-md text-xs p-1 cursor-pointer ">Go Premium</button>


        </div>



      </div>

      {/*bottom card */}
      <div className="flex-col p-4  bg-white shadow-xl rounded-md text-sm">
        <div className="mb-5">
          <h3 className="font-semibold">Recent Tags</h3>
          <h5>{recentTopic('artificialintelligence')}</h5>
          <h5>{recentTopic('figma')}</h5>
          <h5>{recentTopic('userexperience')}</h5>
          <h5>{recentTopic('awsbeanstalk')}</h5>
        </div>

        <div>
          <h3 className="font-semibold">Groups</h3>
          <h5>{recentGroup('dataengineers')}</h5>
          <h5>{recentGroup('frontenddevelopers')}</h5>
          <h5>{recentGroup('coding')}</h5>
          <h5>{recentGroup('reactjs')}</h5>
        </div>


      </div>
      {/*top card */}
    </div>
  )
}

export default Sidebar
