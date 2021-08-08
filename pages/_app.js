import Footer from '../components/Footer'
import Header from '../components/Header'
import PostFeed from '../components/PostFeed';
import Sidebar from '../components/Sidebar';
import Login from '../components/Login'
import '../styles/globals.css';
import { useSelector } from 'react-redux'
import { selectUser } from '../utils/userSlice';

function App() {

  // const user = useSelector(selectUser);

  return (
    <div className="flex-col min-h-screen bg-indigo-100">
      <Header />

      {/*if user not logged in, render Login. otherwise render the main content */}
      {/* {!user ? (
        <Login />
      ) : ( */}
      {/* //render main body */}
      <main className="flex md:w-3/4 md:mx-auto ">
        <Sidebar />
        <PostFeed />
      </main>
      {/* )} */}


      <Footer />
    </div>



  )
}

export default App;
