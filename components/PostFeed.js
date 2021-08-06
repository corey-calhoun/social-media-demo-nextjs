import React from 'react';
import PostAction from './PostAction';
import Post from './Post';
import { Camera, Videocam, Image } from '@material-ui/icons';

function PostFeed() {
  return (

    //entire main component container
    <div className="grid-cols-1 w-full  mx-5">

      {/*container area for user to compose a post */}
      <div className="flex-cols bg-white rounded-md  p-2 shadow-xl">

        <form className="flex h-3/6 rounded-sm">
          <input
            type="text"
            placeholder="Create a post..."
            className="flex w-full rounded-t-sm focus:outline-none "
          />
        </form>

        {/* additional post actions like camera functions and uploading images */}
        <div className="flex mt-2 justify-evenly">
          <PostAction Icon={Camera} />
          <PostAction Icon={Videocam} />
          <PostAction Icon={Image} />
        </div>

      </div>

      {/*main feed section where posts will be displayed */}
      <div className="flex-cols bg-white rounded-md flex-cols mt-2 shadow-xl" >
        <Post
          imageUrl='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          name='Alexander Verchekov'
          description='UX/UI Designer'
          message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sunt dolorem, nemo alias quos qui laborum earum voluptas perspiciatis tempore incidunt accusantium facere nihil reiciendis doloremque, distinctio fugit nam ea!'
        />
      </div>


    </div>
  )
}

export default PostFeed
