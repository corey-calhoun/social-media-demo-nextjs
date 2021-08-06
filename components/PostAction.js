import React from 'react'


function PostAction({ Icon, title }) {
    return (
        <div className="flex md:flex-col  items-center md:justify-center cursor-pointer mr-2 ">

            {/* if we are passed the prop Icon, then render Icon  */}
            {Icon && <Icon className="text-indigo-400" />}

            {/* display title prop if passed */}
            {title && <h3 className="hidden md:flex text-sm">{title}</h3>}

        </div>
    )
}

export default PostAction
