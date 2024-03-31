import { useState } from 'react';
import './App.css';
import ProductCatalog from './pages/ProductCatalog';
import { LangContext } from './context/langContext';
import { langList } from './langList';

function App() {

    const [selectedLang, setSelectedLang] = useState(langList[0])

    return (
        <LangContext.Provider value={{
            selectedLang,
            setSelectedLang
        }}>
            <div className="App">
                <ProductCatalog />
            </div>
        </LangContext.Provider>
    );
}

export default App;
