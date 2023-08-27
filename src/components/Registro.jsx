import { useState } from 'react'
import Forms from './Formulario';
import Alert from './Alert';
import SocialButton from './SocialButton';

const Register = () => {
    const [alert, setAlert] = useState({
        error: '',
        message: '',
        color: ''
      })
      
    return (
        <>
            <div className="form" >
              <h1 className='icon-color'>GamerZone</h1>
                <p>Inicia sesión con tus redes sociales o crea una</p>
                <SocialButton 
                icon="facebook"
                icon2="twitter"
                icon3="google"
                />
                <Forms setAlert={setAlert}/>
                {alert.message && <Alert color={alert.color} message={alert.message}/>}
            </div>
        </>
      )
 }

export default Register
