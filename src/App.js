import React from 'react';
import 'font-awesome/css/font-awesome.min.css'
import { ToastContainer } from 'react-toastify'
import Global from './styles/global'
import Routes from './routes'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store'
function App() {
  return (
    <>
      <Provider store={store}>
        <Global />
        <Routes />
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
