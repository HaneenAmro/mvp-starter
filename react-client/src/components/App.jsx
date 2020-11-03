import React from 'react';
import styled from 'styled-components';
import Home from './Home.jsx';
import DryHair from './DryHair.jsx';
import FrizzyHair from './FrizzyHair.jsx';
import HairLoss from './HairLoss.jsx';
import SplitEnds from './SplitEnds.jsx';

import {Route, Switch ,Link } from "react-router-dom";
import { BrowserRouter} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>

        <div>
          < Route  path ="/" exact={true} ><Home/> </Route>
          < Route  path="/dryHair" > <DryHair/> </Route>
          < Route  path="/frizzyHair" > <FrizzyHair/> </Route>
          < Route  path="/hairLoss" > <HairLoss/> </Route>
          < Route  path="/splitEnds" > <SplitEnds/> </Route>
          {/* < Route  path="/frizzyHair" > <DryHair/> </Route>
          < Route  path="/endHair" > <DryHair/> </Route>
          < Route  path="/volumHair" > <DryHair/> </Route> */}
          {/* < Route  path="/hair" > <DryHair/> </Route>
          < Route  path="/Dryhair" > <DryHair/> </Route>
          < Route  path="/Dryhair" > <DryHair/> </Route>
          < Route  path="/Dryhair" > <DryHair/> </Route> */}
        </div>

      </BrowserRouter>

    )
  }
}
export default App;