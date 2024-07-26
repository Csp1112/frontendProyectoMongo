import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = 'https://backendproyectomongo.onrender.com/api/cliente/'; //direccion que conecta el back con el front

const CompMostrarClientes = () =>{

    const[clientes, setClientes] = useState([]);

    useEffect(() =>{
        mostrarClientes(); //Para que se actualice la tabla
    },[]);

    //creamos la función mostrar clientes 
    const mostrarClientes = async () =>{
        const datos = await axios.get(URL);
        setClientes(datos.data);
    }

    //creamos la función eliminar clientes 
    const eliminarCliente = async (id) =>{
        await axios.delete(URL + id);
        mostrarClientes();
    }

    return(
        // se utiliza bootstrap para tablas
        <div className="container">
            <div className="row">
                <div className="col">
                    {/* se configura un boton externo y se le agrega un icono con forawesome*/}
                    <Link to='/clientes/agregar' className="btn btn-primary"> <i className="fa-solid fa-floppy-disk"></i></Link>
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="table-light">
                                {/* los titulos de las columnas de la tabla */}
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Cedula</th>
                                    <th>Correo</th>
                                    <th>Telefono</th>
                                    <th>Nit</th>
                                    <th>Dirección</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>

                            {/* traemos el contenido, es decir, lo que trae la tabla de la base de datos */}
                            <tbody> 
                                {/* se recorren los datos de la base de datos */}
                                {clientes.map((cli,index) =>(
                                    <tr key={index}>
                                        <td>{cli.nombres}</td>
                                        <td>{cli.apellidos}</td>
                                        <td>{cli.cedula}</td>
                                        <td>{cli.correo}</td>
                                        <td>{cli.numeroContacto}</td>
                                        <td>{cli.nit}</td>
                                        <td>{cli.direccion}</td>
                                        {/* se configura botones que trabajan dentro del registro */}
                                        <td>
                                            {/* importante tener presente colocar '/' despues de editar */}
                                            <Link to={'/clientes/editar/' + cli._id} className="btn btn-primary mt-2 mb-2">Editar <i className="fa-regular fa-pen-to-square"></i></Link>  
                                            <button onClick={() => eliminarCliente(cli._id)} className="btn btn-danger">Eliminar <i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompMostrarClientes;