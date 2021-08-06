import Footer from '../components/Footer'
import Header from '../components/Header'
import PostFeed from '../components/PostFeed';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';
function App() {
  return (
    <div className="flex-col min-h-screen bg-indigo-100">
      <Header />
      {/* main body */}
      <main className="flex md:w-3/4 md:mx-auto ">
        <Sidebar />
        <PostFeed />
      </main>
      <Footer />
    </div>


  )
}

export default App;
