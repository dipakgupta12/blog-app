import '../styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* Toast container for displaying notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000} // Duration for which each toast message is displayed (in milliseconds)
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </>
  )
}

export default MyApp
