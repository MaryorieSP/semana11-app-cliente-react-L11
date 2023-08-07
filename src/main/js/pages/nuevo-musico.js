const React = require('react');
const client = require('../client');
const { Link} = require ('react-router-dom')
const { useState } = require('react');

const PageNuevoMusico = () => {

    const [nombre, setNombre] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/musicos',
            entity: { nombre: nombre },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    }

    return(
        <>
        <h1>Nuevo Musico</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <br/>
            <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} />
            <br/>
            <input type="submit" value="Nuevo Músico" />
        </form>
        <Link to='/'>Volver</Link>
        </>
    )
    
}

module.exports=PageNuevoMusico;