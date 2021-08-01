import React from 'react';
import { deck } from './cardDecks';
import { useHistory } from 'react-router-dom'

import './game.css';

import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone';
import PersonTwoToneIcon from '@material-ui/icons/PersonTwoTone';
import CardMedia from '@material-ui/core/CardMedia';
import PlayArrowTwoToneIcon from '@material-ui/icons/PlayArrowTwoTone';


import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#35654d'
    },
    container2: {
        marginTop: 10,
    },
    dealer: {
        color: 'red'
    },
    media: {
        height: 325,
        width: 250,
        margin: 'auto',
        borderRadius: '10px',
        border: '0.5px solid grey'

    },
    button: {
        color: 'red',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'not-allowed',
    },
    buttonPlay: {
        border: '1px solid black',
        color: 'white',
        backgroundColor: 'red',
        transition: "transform 0.15s ease-in-out",
        "&:hover": {
            transform: "scale3d(1.05, 1.05, 1)",
            color: 'red',
            backgroundColor: 'white'
        },
        cursor: 'pointer',
    },
}));


function Game() {
    const classes = useStyles();

    const history = useHistory();

    const handleClick = () => {
        history.push('/game');
    }

    const originalDeck = deck.cards.map(item => ({ a: item.value, b: item.image }))

    let playerCard = originalDeck[Math.floor(Math.random() * originalDeck.length)];
    console.log(playerCard.a);
    let playerCard2 = originalDeck[Math.floor(Math.random() * originalDeck.length)];
    console.log(playerCard2.a);
    let dealerCard = originalDeck[Math.floor(Math.random() * originalDeck.length)];
    console.log(dealerCard.a);
    let dealerCard2 = originalDeck[Math.floor(Math.random() * originalDeck.length)];
    console.log(dealerCard2.a);

    let playerTotal = parseInt(playerCard.a) + parseInt(playerCard2.a)
    console.log(playerTotal)
    let dealerTotal = parseInt(dealerCard.a) + parseInt(dealerCard2.a)

    return (
        <Container className={classes.root}>
            <Container maxWidth='md'>
                <Grid container spacing={1} align='center' justify='center' className={classes.container2}>
                    <Grid item xs={10} md={10} align="center" justify="center">
                        {
                            playerTotal > dealerTotal ? (
                                <Typography variant="h4" color='secondary' gutterBottom>
                                    Player score is {playerTotal} PLAYER Wins ! 🏆
                                </Typography>
                            ) :
                                dealerTotal > playerTotal ? (
                                    <Typography variant="h4" className={classes.dealer} gutterBottom>Dealer score is {dealerTotal} DEALER Wins ! 😢</Typography>
                                ) :
                                    <Typography variant="h4" gutterBottom>DRAW 🤞 Player score: {playerTotal}, Dealer score: {dealerTotal}</Typography>
                        }
                    </Grid>
                    <Grid item xs={2} md={2} align="center" justify="center">
                        <Button
                        onClick={handleClick}
                            variant="outlined"
                            color="inherit"
                            size="medium"
                            className={classes.buttonPlay}
                            startIcon={<PlayArrowTwoToneIcon />}
                        >
                            Play Again
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={2} md={2} align="center" justify="center">
                        <Button

                            size="small"
                            className={classes.button}
                            color='secondary'
                            variant="contained"
                            startIcon={<ComputerTwoToneIcon />}
                        >
                            Dealer
                        </Button>
                    </Grid>
                    <Grid item xs={5} md={5} align="center" justify="center">
                        <CardMedia
                            className={classes.media}
                            image={dealerCard.b}
                            title={dealerCard.a}
                        />
                    </Grid>
                    <Grid item xs={5} md={5} align="center" justify="center">
                        <CardMedia
                            className={classes.media}
                            image={dealerCard2.b}
                            title={dealerCard2.a}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.container2}>
                    <Grid item xs={2} md={2} align="center" justify="center">
                        <Button

                            size="small"
                            className={classes.button}
                            color='secondary'
                            variant="contained"
                            startIcon={<PersonTwoToneIcon />}
                        >
                            Player
                        </Button>
                    </Grid>
                    <Grid item xs={5} md={5} align="center" justify="center">
                        <CardMedia
                            className={classes.media}
                            image={playerCard.b}
                            title={playerCard.a}
                        />
                    </Grid>
                    <Grid item xs={5} md={5} align="center" justify="center">
                        <CardMedia
                            className={classes.media}
                            image={playerCard2.b}
                            title={playerCard2.a}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default Game
