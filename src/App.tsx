import { Provider } from "react-redux";
import AppRouter from "./navigation/Router";
import { store } from "./stores/store.ts";
import { ThemedApp } from "./theme/ThemedApp";

function App() {
	return (
		<Provider store={store}>
			<ThemedApp>
				<AppRouter />
			</ThemedApp>
		</Provider>
	);
}

export default App;
