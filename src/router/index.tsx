import Home from '../pages/Home/Home'
import Header from '../components/header/Header'
import Skills from '../pages/Skills/Skills'
import Experience from '../pages/Experience/Experience'
import Works from '../pages/Works/Works'

export default function Router () {
    return (
        <>
            <nav>
                <Header/>
            </nav>
            <Home />
            <Experience/>
            <Skills/>
            <Works/>
        </>
    )
}