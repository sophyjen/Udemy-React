//Navbar Component
import Navbar from './Components/Navbar'

//Categories Component
import Categories from './Components/Categories'

//SaleImage Component
import SaleImage from './Components/SaleImage'

//Recommended Component
import Recommended from './Components/Recommended'

//Topic Component
import Topic from './Components/Topic'

//MostPopular Component
import MostPopular from './Components/MostPopular'

//Footer Component
import Footer from './Components/Footer'

function App()
{
    return(
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <SaleImage></SaleImage>
            <Recommended></Recommended>
            <Topic></Topic>
            <MostPopular></MostPopular>
            <Footer></Footer>
        </div>
    )
}

export default App