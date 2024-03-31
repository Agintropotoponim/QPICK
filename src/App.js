import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import { LangContext } from './context/langContext';
import { langList } from './langList';
import { BasketContext } from './context/BasketContext';

function App() {

    const [selectedLang, setSelectedLang] = useState(langList[0]);
    const [basket, setBasket] = useState([]);

    return (
        <div className="App">
            <LangContext.Provider value={{
                selectedLang,
                setSelectedLang
            }}>
                <BasketContext.Provider value={{
                    basket,
                    setBasket
                }}>
                    <BrowserRouter>
                        <AppRouter />
                    </BrowserRouter>
                </BasketContext.Provider>
            </LangContext.Provider>
        </div >
    );
}

export default App;
