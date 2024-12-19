import AppToolBar from "../navigation/AppToolbar";
import pack from "../../package.json";

const Sobre = () => {
	return (
		<>
			<AppToolBar title="Sobre" />
			<p>Fazer</p>
			<p>Nexus d10</p>
			<p>app: {pack.version}</p>
			<p>site(?)</p>
			<p>instagram(?)</p>
			<p>licença de Nexus</p>
			<p>licença do app</p>
			<p>bugs: https://github.com/iagows/nexus_pwa/issues</p>
			<p>agradecimentos</p>
			<p>bibliotecas</p>
		</>
	);
};

export default Sobre;
