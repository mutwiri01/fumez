import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';


import Homescreen from './screens/Homescreen';
import Productscreen from './screens/Productscreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen'
import DeliveryScreen from './screens/Deliveryscreen'
import Paymentscreen from './screens/Paymentscreen';
import Ordersscreen from './screens/Ordersscreen';
import Placeorderscreen from './screens/Placeorderscreen';
import Orderinfo from './screens/Orderinfo';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Loginscreen} />
        <Route path='/ofb' component={Registerscreen} />

        <main className="py-3">
          <Header />
          <Container>
            <Route path="/homescreen" component={Homescreen} exact />
            <Route path='/product/:id' component={Productscreen} />
            <Route path='/cart' component={Cartscreen} />
            <Route path='/delivery' component={DeliveryScreen} />
            <Route path='/payment' component={Paymentscreen} />
            <Route path='/placeorder' component={Placeorderscreen} />
            <Route path='/orders' component={Ordersscreen} />
            <Route path='/profile' component={Profilescreen} />
            

            <Route path='/orderinfo/:orderid' component={Orderinfo} />

            <Route path='/admin'component={Adminscreen}  />


          </Container>

        </main>
      </Switch>
    </Router>
  );
}

export default App;

/** Loginscreen  Homescreen*/


/**
 *   <Router>

    <Switch>
      <Route exact path="/login" component={Loginscreen} />
      <main className="py-3">
      <div>
        <Header/>
        <Container>
          <Route path="/" component={Homescreen} exact/>
          <Route path='/product/:id' component={Productscreen} />
          <Route path='/cart' component={Cartscreen} />
          <Route path='/register' component={Registerscreen} />
        </Container>
      </div>
      <main>
    </Switch>
  </Router>
 */

/**     <Router>
    <Header/>
    <main className="py-3">
      <Container>
        <Route path="/" component={Homescreen} exact/>
        <Route path='/product/:id' component={Productscreen} />
        <Route path='/cart' component={Cartscreen} />
        <Route path='/register' component={Registerscreen} />
        <Route path='/login' component={Loginscreen}    />

      </Container>
    </main>
  </Router> */