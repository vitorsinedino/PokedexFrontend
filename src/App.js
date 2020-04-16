import React from 'react';
import Axios from 'axios';
import {Container} from '@material-ui/core';
import './Components/style/Style.css';
import './Components/Api/ApiCall'
import ApiCall from './Components/Api/ApiCall';

class App extends React.Component {
    render() { 
        return (
        <Container maxWidth='sm'>
            <div id="cards">
                <h1>Pokemon Selector</h1>
                 <ApiCall></ApiCall>
            </div>
             
        </Container>
        );
    }
}
 
export default App;