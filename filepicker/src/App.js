
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './styles/Login.css'
import FileUpload from './components/FileUpload';

const navStyle = {
  backgroundColor: '#333', // Fondo del nav
  color: '#fff', // Color del texto
  padding: '10px', // Espaciado interno
};

function App() {
  return (
<>
<div className='container'>
<div className='container-form-login'>
<div className='logoContainer'>
<img src="https://www.linuxadictos.com/wp-content/uploads/unreal-engine-4-logo-large-1024x376.png.webp" className="icon login-icon-style" />
</div>
  <form className='form-login'>
    <div className='login-input-container'>
  <div className="containerIcon">
  <img src="https://admin.justopago.com.co/static/media/user.780a52a3688dd2fd0230fe4949982dd5.svg" className="icon login-icon-style" />
  <input type='text' className='btnInput' placeholder='Username'></input>
  </div>
</div>

<div className='login-input-container'>
  <div className="containerIcon">
  <img src="https://admin.justopago.com.co/static/media/user.780a52a3688dd2fd0230fe4949982dd5.svg" className="icon login-icon-style" />
  <input type='text' className='btnInput' placeholder='Password'></input>
  </div>
      </div>
  </form>
</div>

<div className='container-image'>
<div className='containerImage2'>
<FileUpload/>
</div>
</div>
</div>

</>
  );
}

export default App;
