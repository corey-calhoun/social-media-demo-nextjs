import { Avatar } from '@material-ui/core'
import { Message, MessageOutlined, MessageRounded, Send, Share, ThumbUp, ThumbUpAlt, ThumbUpAltRounded } from '@material-ui/icons'
import React from 'react'
import PostAction from './PostAction'

function Post({ name, description, message, photoUrl }) {
    return (

        // main post container
        <div className="p-2 bg-white rounded-md shadow-md">



            {/*post information container */}
            {/* pass in the props that we want rendered */}
            <div className="flex items-center">
                <Avatar
                    className="flex mx-2 "
                    src={photoUrl}
                />
                <div className="">
                    <h2 className="font-semibold text-sm">{name}</h2>
                    <p className="text-xs">{description}</p>
                </div>
            </div>


            {/*post message container */}
            <div className="mt-1">
                <p>{message}</p>
            </div>

            {/* like/comment counters with Icons */}
            <div className="flex w-1/6 justify-wide  space-x-4">
                <div className="flex text-xs items-center py-2 mx-1 cursor-pointer">
                    <ThumbUpAlt className="text-indigo-300" />
                    <p>24</p>
                </div>
                <div className="flex text-xs items-center py-2 mx-1 cursor-pointer">
                    <MessageOutlined className="text-indigo-300" />
                    <p>3</p>
                </div>
            </div>


            {/* post action area for share, like, comment */}
            <div className="flex items-center  justify-evenly border-t-2 mt-2 py-2">
                <PostAction
                    Icon={ThumbUp}
                    title='Like'
                />
                <PostAction
                    Icon={Message}
                    title='Comment'
                />
                <PostAction
                    Icon={Share}
                    title='Share'
                />
                <PostAction
                    Icon={Send}
                    title='Send'
                />
            </div>
        </div>
    )
}

export default Post
