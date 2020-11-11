import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const PokemonList = ({pokemon}) => {
    const pokemonlist = {
          justifyContent: 'space-around',
          margin: '15px 0',
          width: '100%',
          textTransform: 'uppercase',
          fontFamily: 'Arial, Helvetica, sans-serif',
          display: 'flex',
          flexWrap: 'wrap',
      };

      const card = {
        maxWidth: '300px',
        width: '100%',
        height: '300px',
        cursor: 'pointer',
        overflow: 'hidden',
        padding: '15px',
        margin: '15px 0',
        textAlign: 'center',
        borderRadius: '50%'
      }

      const text = {
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '25px',
        fontWeight: 500,
        textShadow: '1px 1px red'
      }

      const button = {
        padding: '12px 12px',
        width: '100%',
        fontSize: '15px',
        textTransform: 'uppercase',
        margin: '20% auto'
      }
    return(
        <Box style={pokemonlist}>
        {pokemon.map(p => (
            <Card style={card} key={p}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={text}>
                  {p}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="large" 
              color="primary" 
              style={button}
              variant='outlined'
              >
                See Details
              </Button>
            </CardActions>
          </Card>
        ))}
        </Box>
    )
}

export default PokemonList;