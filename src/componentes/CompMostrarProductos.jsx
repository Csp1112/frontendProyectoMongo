import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const URL = 'https://backendproyectomongo.onrender.com/api/producto/'; //direccion que conecta el back con el front

const CompMostrarProductos = () =>{

    const[productos, setProductos] = useState([]);

    useEffect(() =>{
        mostrarProductos(); //Para que se actualice la tabla
    },[]);

    //creamos la función mostrar productos 
    const mostrarProductos = async () =>{
        const datos1 = await axios.get(URL);
        setProductos(datos1.data);
    }

    //creamos la función eliminar productos 
    const eliminarProducto = async (id) =>{
        await axios.delete(URL + id);
        mostrarProductos();
    }

    return(
        // se utiliza bootstrap para tablas
        <div className="container">
            <div className="row">
                <div className="col">
                    {/* se configura un boton externo y se le agrega un icono con forawesome*/}
                    <Link to='/productos/agregar' className="btn btn-primary"> <i className="fa-solid fa-floppy-disk"></i></Link>
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="table-light">
                                {/* los titulos de las columnas de la tabla */}
                                <tr>
                                    <th>Nombre</th>
                                    <th>Marca</th>
                                    <th>Código</th>
                                    <th>Proveedor</th>
                                    <th>Precio</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>

                            {/* traemos el contenido, es decir, lo que trae la tabla de la base de datos */}
                            <tbody> 
                                {/* se recorren los datos de la base de datos */}
                                {productos.map((pro,index) =>(
                                    <tr key={index}>
                                        <td>{pro.nombre}</td>
                                        <td>{pro.marca}</td>
                                        <td>{pro.codigo}</td>
                                        <td>{pro.proveedor}</td>
                                        <td>{pro.precio}</td>
                                    
                                        {/* se configura botones que trabajan dentro del registro */}
                                        <td>
                                            {/* importante tener presente colocar '/' despues de editar */}
                                            <Link to={'/productos/editar/' + pro._id} className="btn btn-primary mt-2 mb-2">Editar <i className="fa-regular fa-pen-to-square"></i></Link>  
                                            <button onClick={() => eliminarProducto(pro._id)} className="btn btn-danger">Eliminar <i className="fa-solid fa-trash"></i></button>
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

export default CompMostrarProductos;
