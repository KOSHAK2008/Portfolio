import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Homepage} from "./layout/section/homepage/Homepage.tsx";
import {Skills} from "./layout/section/skills/Skills.tsx";
import {Works} from "./layout/section/works/Works.tsx";
import {Projects} from "./layout/section/projects/Projects.tsx";
import {Contact} from "./layout/section/contact/Contact.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {BlockForm} from "./components/blockForm/BlockForm.tsx";

function App() {
    return (
        <div className="App">
            <BlockForm/>
            <Header/>
            <Homepage/>
            <Skills/>
            <Works/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App
