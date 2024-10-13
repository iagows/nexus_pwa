import AppRouter from "./navigation/Router";
import { ThemedApp } from "./theme/ThemedApp";

function App() {
	return (
		<ThemedApp>
			<AppRouter />
		</ThemedApp>
	);
}

export default App;
