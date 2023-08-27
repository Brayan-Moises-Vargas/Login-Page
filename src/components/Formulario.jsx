import { useState } from "react"

const Forms = ({setAlert}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
                 
    const validateInput = (e) => {
        e.preventDefault()
        
        const {name, email, password, confirmPassword} = formData;
             
        switch ((name == '' || email == '' || password == '' || confirmPassword == '')) {
            case true:
            setAlert({
                error: true,
                message: 'Por favor ingrese todos los datos',
                color: 'text-danger'
            })       
                break;
        
            default:
            setAlert({
                error: false,
                message: 'Cuenta creada con exito',
                color: 'text-success'
            })
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            }) 
        }

        if (password !== confirmPassword) {
            setAlert({
                error: true,
                message: 'Verificar contraseñas',
                color: 'text-danger'
            })  
        }

        setTimeout(() => {
            setAlert({
                error: '',
                message: '',
                color: ''
            })  
        }, 5000);           
    };

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };
   
    return (
        <>
            <form onSubmit={validateInput}>
                
                <div className="form-group p-2">
                    <label className="p-1">Nombre</label>
                    <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Andrés"
                    onChange={handleInputChange}
                    value={formData.name}
                    />
                </div>

                <div className="form-group p-2">
                    <label className="p-1">Email</label>
                    <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="correo@correo.cl"
                    onChange={handleInputChange}
                    value={formData.email}
                    />
                </div>

                <div className="form-group p-2">
                    <label className="p-1">Contraseña</label>
                    <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Contraseña"
                    onChange={handleInputChange}
                    value={formData.password}
                    />
                </div>

                <div className="form-group p-2">
                    <label className="p-1">Confirmar contraseña</label>
                    <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Validar contraseña"
                    onChange={handleInputChange}
                    value={formData.confirmPassword}
                    />
                </div>
               
                <button  type="submit" className="mt-3 button">Registrarse</button>

            </form>
        </>
    )
}

export default Forms