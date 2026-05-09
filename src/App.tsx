import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Homepage} from "./layout/section/homepage/Homepage.tsx";
import {Skills} from "./layout/section/skills/Skills.tsx";
import {Works} from "./layout/section/works/Works.tsx";
import {Projects} from "./layout/section/projects/Projects.tsx";
import {Contact} from "./layout/section/contact/Contact.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {BlockForm} from "./components/blockForm/BlockForm.tsx";
import {Particle} from "./components/particle/Particle.tsx";
import {useState} from "react";

function App() {

    const [menuIsOpenBlockForm, setMenuIsOpenBlockForm] = useState(false);
    const activeBlockFormClick = () => {
        setMenuIsOpenBlockForm(true)
    }

    const closeBlockFormClick = () => {
        setMenuIsOpenBlockForm(false);
    }

    return (
        <div className="App">
            <Particle/>
            <BlockForm closeBlockFormClick={closeBlockFormClick} menuIsOpenBlockForm={menuIsOpenBlockForm}></BlockForm>
            <Header menuIsOpenBlockForm={menuIsOpenBlockForm} activeBlockFormClick={activeBlockFormClick}/>
            <Homepage menuIsOpenBlockForm={menuIsOpenBlockForm} activeBlockFormClick={activeBlockFormClick}/>
            <Skills/>
            <Works/>
            <Projects/>
            <Contact closeBlockFormClick={closeBlockFormClick}/>
            <Footer/>
        </div>
    )
}

export default App
