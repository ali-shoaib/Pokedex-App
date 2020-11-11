import React from 'react';
import Pokemon from './pokemon';
import Home from './home';
import Header from './header';
import {Routes, Route} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import arrow from './images/right-arrow.png';

const App = () => {
    
    const About = () => {
        const makeStyles = {
                fontSize: '20px',
                wordSpacing: 4,
                height: '230px',
                width: '350px',
                margin: '5% auto',
                listStyle: 'none'
          };

          const img = {
              width: '5%',
          }

        return(
            <div>
            <Paper style={makeStyles} elevation={3}>
                <li><img src={arrow} style={img} alt="list"/> This is a Pokedex app made on React JS and React Router V6.</li>
                <br/>
                <li><img src={arrow} style={img} alt="list"/> The data of pokemons is fetched from a rest API.</li>
                <br/>
                <li><img src={arrow} style={img} alt="list"/> The styling is done using material UI and common CSS.</li>
            </Paper>
            </div>
        )
    }
    
    return(
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/pokemonlist" element={<Pokemon />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default App;