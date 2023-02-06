import './App.css';
import CartBox from './components/CartBox';
import CartContainer from './components/CartContainer';
import Header from './components/Header';
import data from './data';
function App() {
  const {products} = data;

  return (
    <div className='container'>
     <Header></Header>
     <main>
        <CartContainer></CartContainer>
        <CartBox></CartBox>
     </main>
    </div>
  )
}

export default App
