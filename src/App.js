import './App.css';
import Results from './components/Results/Results';
import SharedLayout from './layouts/SharedLayout/SharedLayout';

function App() {
  return (
    <div className="App">
      <SharedLayout>
        <Results/>
     </SharedLayout>
    </div>
  );
}

export default App;
