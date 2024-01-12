import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
      domain="dev-au8yx8jb0iqxkuz7.us.auth0.com"
      clientId="K87wI4ahSL7nhyVBPKJgd48lWprrBt6p"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App/>
    </Auth0Provider>
)
