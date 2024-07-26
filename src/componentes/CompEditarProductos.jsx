import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = 'https://backendproyectomongo.onrender.com/api/producto/'; //direccion que conecta el back con el front

const CompEditarProductos = () =>{
    const [nombre, setNombre] = useState('');
    const [marca, setMarca] = useState('');
    const [codigo, setCodigo] = useState('');
    const [proveedor, setProveedor] = useState('');
    const [precio, setPrecio] = useState('');
    const navigate = useNavigate();
    const {id} = useParams(); 

    //funcion agregar prductos
    const actualizarProductos = async(e) =>{ //se trabajara con eventos (e) para pasar la función al formulario y se capture en el parametro
        e.preventDefault();
        await axios.put((URL + id), { //se envia la informacion al back
            nombre:nombre,
            marca:marca,
            codigo:codigo,
            proveedor:proveedor,
            precio:precio
        })
        navigate('/productos'); //redirecciona a la página de la tabla
    }

    useEffect(()=>{
        getProductos();
    },[]);
        

    //se muestra ya actualizada la tabla
    const getProductos = async()=>{
        const res = await axios.get(URL + id); //se obtiene la informacion del back
        setNombre(res.data.nombre);
        setMarca(res.data.marca);
        setCodigo(res.data.codigo);
        setProveedor(res.data.proveedor);
        setPrecio(res.data.precio);
    }

    return(
        <div>
            <h3>Formulario para editar productos</h3>
            {/* el formulario debe capturar la funcion creada para guardar productos, se usa un evento */}
            <form onSubmit={actualizarProductos}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    {/* todo lo que ingrese por input se guardara en la función guardar productos por medio del evento e */}
                    <input value={nombre} onChange={(e)=>setNombre(e.target.value)}
                        type="text" className="form-control"
                     />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Marca</label>
                    {/* todo lo que ingrese por input se guardara en la función guardar productos por medio del evento e */}
                    <input value={marca} onChange={(e)=>setMarca(e.target.value)}
                        type="text" className="form-control"
                     />
                </div>

                <div className="mb-3">
                    <label className="form-label">Código</label>
                    {/* todo lo que ingrese por input se guardara en la función guardar productos por medio del evento e */}
                    <input value={codigo} onChange={(e)=>setCodigo(e.target.value)}
                        type="number" className="form-control"
                     />
                </div>

                <div className="mb-3">
                    <label className="form-label">Proveedor</label>
                    {/* todo lo que ingrese por input se guardara en la función guardar clientes por medio del evento e */}
                    <input value={proveedor} onChange={(e)=>setProveedor(e.target.value)}
                        type="text" className="form-control"
                     />
                </div>

                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    {/* todo lo que ingrese por input se guardara en la función guardar clientes por medio del evento e */}
                    <input value={precio} onChange={(e)=>setPrecio(e.target.value)}
                        type="number" className="form-control"
                     />
                </div>

                <button type="submit" className="btn btn-primary">Guardar</button>

            </form>
        </div>
    )
}

export default CompEditarProductos;

