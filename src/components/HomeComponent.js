import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

import TextLoop from "react-text-loop";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

// this is basically are css file u access it but using the className={classes.x}
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 50,
    },
    title: {
        marginTop: 20,
        marginBottom: 20,
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    ruleTitle: {
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    button: {
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',
    },
    card: {
        marginBottom: 30,
        border: '1px solid #116530',
        color: theme.palette.warning.main,
        '& p': 'white',
        backgroundColor: theme.palette.warning.main,
        alignItems: 'center',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',

    },
    media: {
        height: 360,
        width: 530,
        border: '1px solid #116530',
        borderRadius: '10px',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',
    },
    item: {
        flexGrow: 1,
        backgroundColor: theme.palette.warning.main,
        display: 'flex',
        height: 224,
        border: `1px solid ${theme.palette.primary.main}`,
        "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
        cursor: 'pointer',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.warning.main
    },
    container: {
        marginTop: 20
    },
    containerRules: {
        marginTop: 35
    }

}));

function Home() {
    //useHistory just goes to a different page when clicked
    const history = useHistory();

    // this is how u access the useStyles styling from above, to implement in the code below className={classes.x}
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //a function to take u to the game page
    const handleClick = () => {
        history.push('/game');
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    // const handleScroll = ()=> {
    // }

    return (
        // containers are divs for whole page
        <Container className={classes.root}>
            {/* grid containers are just divs className='rows' but can add spacing in this particular grid */}
            <Grid container spacing={2}>
                {/* grid items act like colomuns divs */}
                <Grid item xs={12}>
                    <Roll right>
                        <Paper elevation={15} className={classes.card}>
                            <CardContent>
                                {/* typography is how u write h1-h6 or paragraphs. to write paragraphs u can set the variant='body1 or body2' */}
                                <Typography variant='h4' gutterBottom align='center' color='secondary'>Welcome to <TextLoop>
                                    <span style={{ color: 'black' }}>Wackjack</span>
                                    <span style={{ color: 'green' }}>Wackjack</span>
                                    <span style={{ color: 'white' }}>Wackjack</span>
                                </TextLoop>
                                </Typography>
                                <Typography variant='p' color='secondary'>Wackjack (also called "21") is a fun and enjoyable casino card game. The basic rules of wackjack are quite easy to learn. As the name 21 implies, the object of the game is to come as close to 21 points as possible with your cards -- without going over -- and having a higher total than the dealer. The game begins with the player placing a bet, then receiving two cards face up. The dealer also receives two cards. The player wins the amount that was bet if the total value of his cards is closer to 21 than the dealer's cards. Another way to win is if the dealer goes over 21, while the player does not. The player loses the amount bet if his total goes over 21. <span><em>Oh and by the way Ace's are ones !</em></span></Typography>
                            </CardContent>
                        </Paper>
                    </Roll>
                </Grid>
            </Grid>
            <Grid container spacing={2} align="center" justify="center">
                <Grid item xs={12} md={6}>
                    <Fade top>
                        <img
                            className={classes.media}
                            src='images/cardValues.png'
                            height="260px"
                            alt=""
                        />
                    </Fade>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Fade right>
                        <img
                            className={classes.media}
                            src='images/cardWinner.jpg'
                            height="260px"
                            alt=""
                        />
                    </Fade>
                </Grid>
            </Grid>

            <Grid container spacing={2} className={classes.containerRules}>
                <Grid item xs={12}>
                    <Typography variant='h5' gutterBottom align='center' color='secondary' className={classes.ruleTitle}>
                        14 key rules to follow when playing online Wackjack
                    </Typography>
                </Grid>
            </Grid>

            <Roll bottom>
                <Grid container spacing={2} align="center" className={classes.container}>
                    <Grid item xs={12} md={6} className={classes.item}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            className={classes.tabs}
                        >
                            <Tab label="Rule One" {...a11yProps(0)} />
                            <Tab label="Rule Two" {...a11yProps(1)} />
                            <Tab label="Rule Three" {...a11yProps(2)} />
                            <Tab label="Rule Four" {...a11yProps(3)} />
                            <Tab label="Rule Five" {...a11yProps(4)} />
                            <Tab label="Rule Six" {...a11yProps(5)} />
                            <Tab label="Rule Seven" {...a11yProps(6)} />
                            <Tab label="Rule eight" {...a11yProps(7)} />
                            <Tab label="Rule nine" {...a11yProps(8)} />
                            <Tab label="Rule ten" {...a11yProps(9)} />
                            <Tab label="Rule eleven" {...a11yProps(10)} />
                            <Tab label="Rule twelve" {...a11yProps(11)} />
                            <Tab label="Rule thirteen" {...a11yProps(12)} />
                            <Tab label="Rule fourteen" {...a11yProps(13)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            Your aim is to get a score of 21 or a higher value than the dealer.
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            If your score exceeds 21 then you lose. This is called ‘bust.’
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            If your score ties with the dealer then your bet is refunded. This is called a ‘push.’
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Bets are placed before you’re dealt your cards.
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            You’re dealt two face-up cards by the dealer.
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            The dealer starts with one face-up card and one face-down card.
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            Ace is worth 1 or 11 (pending on which value most benefits you).
                        </TabPanel>
                        <TabPanel value={value} index={7}>
                            Ten, jack, queen, and king are worth 10.
                        </TabPanel>
                        <TabPanel value={value} index={8}>
                            Two - nine have their face values.
                        </TabPanel>
                        <TabPanel value={value} index={9}>
                            You hit if you wish to be dealt more cards.
                        </TabPanel>
                        <TabPanel value={value} index={10}>
                            You stand if you are happy with your two cards.
                        </TabPanel>
                        <TabPanel value={value} index={11}>
                            You can double your bet if you wish to do so.
                        </TabPanel>
                        <TabPanel value={value} index={12}>
                            You can split pairs and turn them into two separate bets.
                        </TabPanel>
                        <TabPanel value={value} index={13}>
                            HERES THE CATCH NONE OF THESE RULES APPLY TO THIS GAME 🤣🤣
                        </TabPanel>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Button color='primary' variant='contained'
                            className={classes.button}
                            onClick={handleClick}
                        //the function from above to go to the game page
                        >
                            Lets Play
                        </Button>
                    </Grid>
                </Grid>
            </Roll>
        </Container>
    )
}

export default Home
