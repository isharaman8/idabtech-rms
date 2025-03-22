// third party imports
import { Toaster } from "@/components/ui/sonner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// inner imports
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<Toaster richColors />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
