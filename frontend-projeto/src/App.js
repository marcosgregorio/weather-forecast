import Formulario from "./components/Formulario/Formulario";
import './App.css'
import Header from "./components/Header/Header";
import Tabela from "./components/Tabela/Tabela";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Divisoria from "./components/Divisoria/Divisoria";
import Filtro from "./components/Filtro/Filtro";

function App() {
	const [dadosTabela, setDadosTabela] = useState([])
	const [loading, setLoading] = useState(false)
	
	const changeTabela = (valor) => {
		setDadosTabela([...dadosTabela, valor])
	}

	const changeTabelaConsulta = (valor) => {
		setDadosTabela(valor)
	}

	return (
		<div id="AppElement" className="App">
			<Header />
			<div className="corpo-pagina">
				<Formulario adicionarTemperaturaTabela={changeTabela}/>
				<Filtro carregando={value => setLoading(value)}  mudaConsultaTabela={changeTabelaConsulta}/>
				<Divisoria />
				<Tabela carregandoTabela={loading} dadosTabela={dadosTabela}/>
			</div>
			<Footer />
		</div>
	);
}

export default App;
