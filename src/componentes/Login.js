import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    return(
    <div>
      <h1>Proyecto MERN</h1>
      <h1>Inicio Sesión</h1>
      <h2>Bienvenidos, ingrese sus credenciales</h2>
      <input placeholder="Email"/>
      <input placeholder="Password"/>    
      <button>Ingresar</button>
      <Link to={"/crear-cuenta"}>Crear Cuenta</Link>
    </div>
    );
}

export default Login;