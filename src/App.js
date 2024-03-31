import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import { LangContext } from './context/langContext';
import { langList } from './langList';
import { BasketContext } from './context/BasketContext';
import Header from './components/Header';
import Footer from './components/Footer';

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
                        <Header />
                        <AppRouter />
                        <section className='footer_alignment'>
                            <Footer />
                        </section>
                    </BrowserRouter>
                </BasketContext.Provider>
            </LangContext.Provider>
        </div >
    );
}

export default App;
