import React, { useState } from 'react';
import { deck } from '../cardDecks';
import { useHistory } from 'react-router-dom'

import './game.css';

import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone';
import PersonTwoToneIcon from '@material-ui/icons/PersonTwoTone';
import PlayArrowTwoToneIcon from '@material-ui/icons/PlayArrowTwoTone';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import swal from 'sweetalert';

import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';




const useStyles = makeStyles((theme) => ({
    alert: {
        backgroundColor: green,
    },
    root: {
        backgroundColor: '#35654d'
    },
    container2: {
        marginTop: 10,
    },
    text: {

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
    const [scoreD, setScoreD] = useState(0);
    const [scoreP, setScoreP] = useState(0);


    const history = useHistory();

    const handleClick = () => {
        playerTotal > dealerTotal ?
            setScoreP(scoreP + 1) :
            setScoreD(scoreD + 1)

        if (scoreD === 1) {
            //alert("Game Over dealer wins!")
            swal({
                text: "Dealer wins, Try your luck again?",
                button: {
                    text: "Play again!",
                    closeModal: true,
                },
                icon: "error",
                dangerMode: true
            });
            setScoreD(0)
            setScoreP(0)
        } else if (scoreP === 1) {
            // alert('Game over Player wins!')
            swal({
                text: "You have won! Keep up the fun Winner!",
                button: {
                    text: `One more round! `,
                    closeModal: true,
                },
                icon: "success"
            });;
            // swal(
            //     <div className={classes.alert}>
            //         <h1>You have Won!</h1>
            //         <p>
            //             Keep up the fun Winner!
            //         </p>
            //     </div>
            // )
            setScoreD(0)
            setScoreP(0)
        }

        history.push('/game');
    }




    const originalDeck = deck.cards.map(item => ({ a: item.value, b: item.image }))

    let playerCard = originalDeck[Math.floor(Math.random() * originalDeck.length)];

    let playerCard2 = originalDeck[Math.floor(Math.random() * originalDeck.length)];

    let dealerCard = originalDeck[Math.floor(Math.random() * originalDeck.length)];

    let dealerCard2 = originalDeck[Math.floor(Math.random() * originalDeck.length)];


    // 
    let playerTotal = parseInt(playerCard.a) + parseInt(playerCard2.a)

    let dealerTotal = parseInt(dealerCard.a) + parseInt(dealerCard2.a)


    return (
        <Container className={classes.root}>
            <Container maxWidth='md'>
                <Grid container spacing={1} align='center' justify='center' className={classes.container2}>
                    {/* <Grid item xs={10} md={10} align="center" justify="center" visibility="hidden" display="none">
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
                    </Grid> */}
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
                            : {dealerTotal}
                        </Button>
                    </Grid>
                    <Grid item xs={5} md={5} align="center" justify="center">
                        <img
                            className={classes.media}
                            src={dealerCard.b}
                            title={dealerCard.a}
                            height="260px"
                            alt=""
                        />
                    </Grid>
                    <Grid item xs={5} md={5} align="center" justify="center">
                        <img
                            className={classes.media}
                            src={dealerCard2.b}
                            title={dealerCard2.a}
                            height="260px"
                            alt=""
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
                            : {playerTotal}
                        </Button>
                    </Grid>
                    <Grid item xs={5} md={5} align="center" justify="center">
                        <img
                            className={classes.media}
                            src={playerCard.b}
                            title={playerCard.a}
                            height="260px"
                            alt=""
                        />
                    </Grid>
                    <Grid item xs={5} md={5} align="center" justify="center">
                        <img
                            className={classes.media}
                            src={playerCard2.b}
                            title={playerCard2.a}
                            height="260px"
                            alt=""
                        />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Game;
