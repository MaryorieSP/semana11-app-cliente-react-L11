const React = require('react');
const client = require('../client');
const { Link, useParams} = require ('react-router-dom')
const { useState } = require('react');


const VerInstrumento = () =>{

     // const id = props.match.params.id;
     let { id } = useParams();
     const [instrumento, setInstrumento] = useState({});
 
     client({
         method: 'GET',
         path: '/api/instrumentos/' + id
     }).done(response => {
         setInstrumento(response.entity);
         // console.log(response.entity);
     });
 
 
     return (
         <>
             <h1>Ver Instrumento</h1>
             <table>
                 <tr>
                     <th>Nombre</th>
                     <td>{instrumento.nombre}</td>
                 </tr>
                 <tr>
                     <th>Categoría</th>
                     <td>{instrumento.categoria}</td>
                 </tr>
                 <tr>
                     <th>Descripción</th>
                     <td>{instrumento.descripcion}</td>
                 </tr>
             </table>
 
             <Link to="/">Volver</Link>
         </>
    )
}

module.exports = VerInstrumento;