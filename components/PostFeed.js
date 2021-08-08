import { useState, useEffect } from 'react';
import PostAction from './PostAction';
import Post from './Post';
import { Camera, Videocam, Image } from '@material-ui/icons';
import firebase from 'firebase';
import { db } from '../firebase'

function PostFeed() {

  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);



  //fires off on feed load to display post feed
  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    )
  }, [])

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: 'Alexander Volchekov',
      description: 'UX/UI Designer',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  }


  return (

    //entire main component container
    <div className="grid-cols-1 w-full  mx-5">

      {/*container area for user to compose a post */}
      <div className="flex-cols bg-white rounded-md  p-2 shadow-xl">

        <form className="flex h-3/6 rounded-sm">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Create a post..."
            className="flex w-full rounded-t-sm focus:outline-none "
          // onSubmit={sendPost}
          />
          <button type='submit' onClick={sendPost}>Submit</button>
        </form>

        {/* additional post actions like camera functions and uploading images */}
        <div className="flex mt-2 justify-evenly">
          <PostAction Icon={Camera} />
          <PostAction Icon={Videocam} />
          <PostAction Icon={Image} />
        </div>

      </div>

      {/*main feed section where posts will be displayed */}
      <div className="flex-colsrounded-md flex-cols mt-2 shadow-xl space-y-2" >

        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}

      </div>


    </div>
  )
}

export default PostFeed
