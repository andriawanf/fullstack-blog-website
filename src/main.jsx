import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Auth0Provider } from '@auth0/auth0-react';
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import {PersistGate} from "redux-persist/integration/react"



ReactDOM.createRoot(document.getElementById('root')).render(
  // <Auth0Provider
  //   domain={import.meta.env.VITE_AUTH0_DOMAIN}
  //   clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
  //   authorizationParams={{
  //     redirect_uri: window.location.origin
  //   }}
  // >
  // </Auth0Provider>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
)
