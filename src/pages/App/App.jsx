import {CatalogueProvider} from '../../context/CatalogueContext';
import AppUI from '../AppUI/AppUI';
import './App.css';

function App() {
  return (
    <CatalogueProvider>
      <AppUI />
    </CatalogueProvider>
  );
}

export default App;
