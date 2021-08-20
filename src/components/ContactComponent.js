import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';

import Roll from 'react-reveal/Roll'
import TextLoop from "react-text-loop";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.primary.main,
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    chip: {
        margin: theme.spacing(0.5),
        border: '1px solid black',
        "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
        cursor: 'pointer',
    },
    section1: {
        margin: theme.spacing(3, 2),
    },
    section2: {
        margin: theme.spacing(2),
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    },
    card: {
        marginTop: 20,
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

}));

function Contact() {
    const classes = useStyles();
    return (
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={12} md={12}>
                    <Roll right>
                        <Paper elevation={15} className={classes.card}>
                            <CardContent>
                                {/* typography is how u write h1-h6 or paragraphs. to write paragraphs u can set the variant='body1 or body2' */}
                                <Typography variant='h4' gutterBottom align='center' color='secondary'>About <TextLoop>
                                    <span style={{ color: 'black' }}>Us</span>
                                    <span style={{ color: 'green' }}>Us</span>
                                    <span style={{ color: 'white' }}>Us</span>
                                </TextLoop>
                                </Typography>
                                <Typography variant='p' color='secondary'><span><em> “There’s nothing I believe in more strongly than getting young people interested in science and engineering, for a better tomorrow, for all humankind.”</em></span> Programming has a cunning means of adding challenge. It becomes faster the better you do. This means you have to make the same decisions but under a higher level of pressure. There’s no end in programming if you could think and move your fingers fast enough – you could literally code forever. We are two motivated, enthusiastic full stack developers, looking to take on any challenge the software world have to offer us. we are a firm believer of making a impact. Please reach out to us below by LinkedIn messages for business, work opportunities
                                </Typography>
                            </CardContent>
                        </Paper>
                    </Roll>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <Container className={classes.root}>
                        <div className={classes.section1}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4">
                                        Joseph Edmonds
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="textSecondary" variant="body2">
                                Learn, apply, and dominate. Software developer on the rise.
                            </Typography>
                        </div>
                        <Divider variant="middle" />
                        <div className={classes.section2}>
                            <Typography gutterBottom variant="body1">
                                View social network
                            </Typography>
                            <div>
                                <Chip className={classes.chip}
                                    onClick={() => window.open('https://www.linkedin.com/in/joseph-edmonds-4b60a514a/')}
                                    label="LinkedIn" />
                                <Chip className={classes.chip}
                                    onClick={() => window.open('https://github.com/100Joe')} color="primary" label="Github" />
                                <Chip className={classes.chip}
                                    onClick={() => window.open('https://josephedmonds.netlify.app/')} label="Portfolio" />
                            </div>
                        </div>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Container className={classes.root}>
                        <div className={classes.section1}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4">
                                        Joseph Tharpe
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="textSecondary" variant="body2">
                                proven track record of fast learning and giving my 100% to get the job done.
                            </Typography>
                        </div>
                        <Divider variant="middle" />
                        <div className={classes.section2}>
                            <Typography gutterBottom variant="body1">
                                View social network
                            </Typography>
                            <div>
                                <Chip className={classes.chip}
                                    onClick={() => window.open('https://www.linkedin.com/in/joseph-tharpe')}
                                    label="LinkedIn" />
                                <Chip className={classes.chip}
                                    onClick={() => window.open('http://github.com/joeytharpe1')} color="primary" label="Github" />
                                <Chip className={classes.chip}
                                    onClick={() => window.open('http://jtharpe.netlify.app/')} label="Portfolio" />
                            </div>
                        </div>
                    </Container>
                </Grid>
            </Grid>
        </Container>

    )
}

export default Contact
