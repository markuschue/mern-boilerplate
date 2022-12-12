import logo from '../logo.svg';
import Data from './Data.jsx';

function App() {
  const customFetchRoute = "http://localhost:9000/test/63973a30890b6a86a3f15b94";
  /**
   * The above route is a test route, and will return a JSON object with the given ID.
   * You can also use the following routes:
   *  - http://localhost:9000/test/ (returns all test objects)
   *  - http://localhost:9000/      (returns a JSON object with the message "Hello World!")
   * 
   * For more details, see the 'api/routes/test.js' file.
   */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Data fetchRoute={customFetchRoute} />
        <p>Fetched from <code>'{customFetchRoute}'</code></p>
      </header>
    </div>
  );
}

export default App;
