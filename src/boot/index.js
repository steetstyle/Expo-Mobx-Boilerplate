import config from "./configureStores";
import app from "./setup";

export default function App() {
	const stores = config();
	return app(stores);
}
