import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL = 'https://backendproyectomongo.onrender.com/api/cliente/'; //direccion que conecta el back con el front

const CompAgregarClientes = () =>{
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [cedula, setCedula] = useState('');
    const [correo, setCorreo] = useState('');
    const [numeroContacto, setNumeroContacto] = useState('');
    const [nit, setNit] = useState('');
    const [direccion, setDireccion] = useState('');
    const navigate = useNavigate();

    //funcion agregar clientes
    const guardarClientes = async(e) =>{ //se trabajara con eventos (e) para pasar la función al formulario y se capture en el parametro
        e.preventDefault();
        await axios.post(URL, { //se envia la informacion al back
            nombres: nombres,
            apellidos: apellidos,
            cedula: cedula,
            correo: correo,
            numeroContacto: numeroContacto,
            nit: nit,
            direccion: direccion
        })
        navigate('/clientes'); //redirecciona a la página de la tabla
    }

    return(
        <div>
            <h3>Formulario guardar clientes</h3>
            {/* el formulario debe capturar la funcion creada para guardar clientes, se usa un evento */}
            <form onSubmit={guardarClientes}>
                <div className="mb-3">
                    <label className="form-label">Nombres</label>
                    {/* todo lo que ingrese por input se guardara en la función guardar clientes por medio del evento e */}
                    <input value={nombres} onChange={(e)=>setNombres(e.target.value)}
                        type="text" className="form-control"
                     />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Apellidos</label>
                    {/* todo lo que ingrese por input se guardara en la función guardar clientes por medio del evento e */}
                    <input value={apellidos} onChange={(e)=>setApellidos(e.target.value)}
                        type="text" className="form-control"
                     />
                </div>

                <div className="mb-3">
                    <label className="form-label">Cedula</label>
                    {/* todo lo que ingrese por input se guardara en la función guardar clientes por medio del evento e */}
                    <input value={cedula} onChange={(e)=>setCedula(e.target.value)}
                        type="number" className="form-control"
                     />
                </div>

                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    {/* todo lo que ingrese por input se guardara en la función guardar clientes por medio del evento e */}
                    <input value={correo} onChange={(e)=>setCorreo(e.target.value)}
                        type="text" className="form-control"
                     />
                </div>

                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    {/* todo lo que ingrese por input se guardara en la función guardar clientes por medio del evento e */}
                    <input value={numeroContacto} onChange={(e)=>setNumeroContacto(e.target.value)}
                        type="number" className="form-control"
                     />
                </div>

                <div className="mb-3">
                    <label className="form-label">NIT</label>
                    {/* todo lo que ingrese por input se guardara en la función guardar clientes por medio del evento e */}
                    <input value={nit} onChange={(e)=>setNit(e.target.value)}
                        type="number" className="form-control"
                     />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    {/* todo lo que ingrese por input se guardara en la función guardar clientes por medio del evento e */}
                    <input value={direccion} onChange={(e)=>setDireccion(e.target.value)}
                        type="text" className="form-control"
                     />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>

    )
}

export default CompAgregarClientes;