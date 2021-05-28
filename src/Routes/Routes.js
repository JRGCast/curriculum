import {Route, Switch} from 'react-router-dom';
import {Home, CurrAdv, CurrDev} from '../Pages'

const Routes = () => (
  <Switch>
    <Route path='/curr-adv' component={CurrAdv}/>
    <Route path='/curr-dev' component={CurrDev}/>
    <Route exact path='/JRGCast/jrgcast-curriculos.git' component={Home}/>
  </Switch>
)

export default Routes;
