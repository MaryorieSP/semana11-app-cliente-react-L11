const React = require('react');
const client = require('../client');

const PageNuevoMusico = () => {
    return(
        <>
        <h1>Nuevo Musico</h1>
        <form>
            <label>Nombres</label>
            <input type="text" name="nombre"></input>
            <input type="submit" value="Nuevo Musico"></input>
        </form>
        </>
    )
    
}

module.exports=PageNuevoMusico;