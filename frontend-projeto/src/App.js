import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import Tabela from "./components/Tabela/Tabela";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
	const [dadosTabela, setDadosTabela] = useState([])
	const changeTabela = (valor) => {
		setDadosTabela([...dadosTabela, valor])
	}

	return (
		<div className="App">
			<Header />
			<Formulario adicionarTemperaturaTabela={changeTabela}/>	
			<Tabela dadosTabela={dadosTabela}/>
			<Footer />
		</div>
	);
}

export default App;
