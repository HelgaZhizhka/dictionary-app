import logo from './logo.png';
import './App.css';
import Search from "./Search";

function App() {
  return (
    <div className="container">
      <header className="header">
        <img className="logo" src={logo} alt="App-logo" />
        <h1>Dictionary App</h1>
      </header>
      <Search word="transition" />
      <footer>
        This project was coded by{' '}
        <a
          href="https://www.shecodes.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SheCodes
        </a>{' '}
        and is{' '}
        <a
          href="https://github.com/HelgaZhizhka/dictionary-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{' '}
        and{' '}
        <a
          href="https://dictionary-webdev.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  )
}

export default App;
