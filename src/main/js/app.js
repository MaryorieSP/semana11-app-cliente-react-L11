const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');
const PageNuevoMusico = require('./pages/nuevo-musico');
const PageInstrumento = require('./pages/nuevo-instrumento');
const VerInstrumento = require ('./pages/ver-instrumento')

const router = createBrowserRouter([
	{path: '/', element: <PageHome />},
	{path: '/nuevo-musico', element: <PageNuevoMusico />},
	{path:'/nuevo-instrumento',element:<PageInstrumento/>},
	{path:'/ver-instrumento/:id',element:<VerInstrumento/>}
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)
