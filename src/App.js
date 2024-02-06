import logo from './logo.svg';
import monitor from './monitor.jpg'
import planshet from './planshet.webp'
import phone from './phone.jpg'
import qora from './qora.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <span>Overvlow Page</span>

        <div className='box'>
          <img src={monitor} />
          <img src={planshet} />
          <img src={phone} />
        </div>

        <button className='btn1'>Free Download</button>
      </header>

      <aside>
        <ul>
          <li>Start Bootstrap</li>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
        </ul>

        <button className='btn2'>Cart</button>
      </aside>

      <main>
        <div className='h1p'>
          <h1>Stop in style</h1>
          <p>With this shop hompeage template</p>
        </div>
      </main>

      <footer>
        <div className='qator1'>
          <div className='q1'><img className='r1' src={qora} /> <h3>Fancy Product</h3> <p>$40.00 - $80.00</p> <button>Wiew options</button></div>
          <div className='q2'><img className='r2' src={qora} /> <h3>Fancy Product</h3> <p>$40.00 - $80.00</p> <button>Wiew options</button></div>
          <div className='q3'><img className='r3' src={qora} /> <h3>Fancy Product</h3> <p>$40.00 - $80.00</p> <button>Wiew options</button></div>
          <div className='q4'><img className='r4' src={qora} /> <h3>Fancy Product</h3> <p>$40.00 - $80.00</p> <button>Wiew options</button></div>
        </div>

        <div className='qator2'>
          <div className='w1'><img className='t1' src={qora} /> <h3>Fancy Product</h3> <p>$40.00 - $80.00</p> <button>Wiew options</button></div>
          <div className='w2'><img className='t2' src={qora} /> <h3>Fancy Product</h3> <p>$40.00 - $80.00</p> <button>Wiew options</button></div>
          <div className='w3'><img className='t3' src={qora} /> <h3>Fancy Product</h3> <p>$40.00 - $80.00</p> <button>Wiew options</button></div>
          <div className='w4'><img className='t4' src={qora} /> <h3>Fancy Product</h3> <p>$40.00 - $80.00</p> <button>Wiew options</button></div>
        </div>
      </footer>

      <div className='pastki'>
        <p className='pas'>Copyright © Your Website 2023</p>
      </div>
    </div>
  );
}

export default App;
