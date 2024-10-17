import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Header2 from './components/Header2';
import Mobiles from './components/Mobiles';
import Review from './components/Review';
import Sidebar from './components/Sidebar';
import Yes from './components/Yes';

function App() {
  return (
    <div className="App">
      <Header/>
      <Header2/>
      <div className="flex flex-grow ms-[120px] xl:py-[8px] gap-[8px] ">
        <Sidebar/>
        <div className="flex-grow  justify-end">
          <Mobiles/>
          <div className="flex-grow  justify-end xl:py-[8px] sm:py-0 xs:py-0">
            <Yes/>
          </div>  
        </div>
      </div>
      <Review/>
      <div className='pt-10'>
      <Footer/>
      </div>

    </div>
  );
}

export default App;
