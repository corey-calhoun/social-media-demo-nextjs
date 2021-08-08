import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    //gives app access to Next-auth state (higher-order component)
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

  )
}

export default MyApp;