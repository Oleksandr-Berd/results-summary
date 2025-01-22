import './App.css';
import Results from './components/Results/Results';
import Summary from './components/Summary/Summary';
import SharedLayout from './layouts/SharedLayout/SharedLayout';

function App() {
  return (
    <div className="App">
      <SharedLayout>
        <Results />
        <Summary/>
     </SharedLayout>
    </div>
  );
}

export default App;
