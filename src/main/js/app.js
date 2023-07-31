const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {instrumento: []};
	}
	componentDidMount() {
		client({method: 'GET', path: '/api/instrumento'}).done(response => {
			this.setState({instrumento: response.entity._embedded.instrumento});
		});
	}
	render() {
		return (
			<InstrumentoList instrumento={this.state.instrumento}/>
		)
	}
}

class InstrumentoList extends React.Component{
	render() {
		const instrumento = this.props.instrumento.map(instrumento =>
			<Instrumento key={instrumento._links.self.href} instrumento={instrumento}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Categoria</th>
						<th>Descripcion</th>
					</tr>
					{instrumento}
				</tbody>
			</table>
		)
	}
}

class Instrumento extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.instrumento.nombre}</td>
				<td>{this.props.instrumento.categoria}</td>
				<td>{this.props.instrumento.descripcion}</td>
			</tr>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)
