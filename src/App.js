import logo from './logo.png';
import './App.css';
import Search from "./Search";

function App() {
  return (
		<div className="container">
			<header className="header">
				<img src={logo} alt="App-logo" />
				<h1>Dictionary App</h1>
			</header>
			<Search />
		</div>
  );
}

export default App;
