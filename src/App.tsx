import NavBAR from './NavBar'
import HeroSection from './HeroSection'
import VolunteerBanner from './VolunteerBanner'
import Feautres from './Features'
import Causes from './Causes'



//CSS STYLES
import './Navigation.css'
import './HeroSection.css'
import './VolunteerBanner.css'
import './Features.css'
import './Causes.css'



//Main Page

function App() {
    return <>
            <NavBAR />
            <HeroSection />
            <VolunteerBanner />
            <Feautres />
            <Causes />
           </>
}

export default App
