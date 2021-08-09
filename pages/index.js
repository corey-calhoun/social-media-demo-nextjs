import PostFeed from "../components/PostFeed";
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import Login from '../components/Login';
import { auth } from '../firebase';
import { selectUser, logout } from '../utils/userSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Register from "../components/Register";

export default function Home() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoUrl,
        }))
      } else {
        //user logged  out
        dispatch(logout());
      }
    })
  })


  return (
    <div className="flex-col h-full bg-indigo-100">
      <Header />

      {/*if user not logged in, render Login. otherwise render the main content */}
      {!user ? (
        <Login />
      ) : (
        //render main body
        <main className="flex md:w-3/4 md:mx-auto ">
          <Sidebar />
          <PostFeed />
        </main>
      )}


      <Footer />
    </div >
  )
}
