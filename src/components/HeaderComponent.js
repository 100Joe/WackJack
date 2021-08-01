import React from 'react'
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardMembershipOutlinedIcon from '@material-ui/icons/CardMembershipOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';

// this is basically are css file u access it but using the className={classes.x}
const useStyles = makeStyles((theme) => ({
    appbar: {
        marginBottom: 15,
    },
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    title: {
        flexGrow: 1,

    },
    button: {
        color: '#fff',
        '&:hover': {
            // backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            transition: "transform 0.15s ease-in-out",
            "&:hover": {
                transform: "scale3d(1.05, 1.05, 1)",
                textDecoration: 'underline',
            },
        }
    }
}));


function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* app bar acts as navbar component */}
            <AppBar position="static" color="primary" >

                {/* tool bar is the nav links but are grouped together */}
                <Toolbar>
                    <Typography variant="h4" color='textSecondary' className={classes.title} align="center">

                        {/* put button as component={link} to make the button a single page click button. 
                    basically when clicked on the links the page does not reload. Single Page Application */}
                        <Button component={Link} to='/' className={classes.button}
                            color='inherit'
                            startIcon={<CardMembershipOutlinedIcon />}
                        >
                            Welcome
                        </Button>
                    </Typography>
                    <Typography variant="h4" color='textSecondary' className={classes.title} align="center">
                        <Button component={Link} to='/Game' className={classes.button}
                            color='inherit'
                            startIcon={<GroupAddOutlinedIcon />}
                        >
                            Game
                        </Button >
                    </Typography>
                    <Typography variant="h4" color='textSecondary' className={classes.title} align="center">
                        <Button component={Link} to='/Contact' className={classes.button}
                            color='inherit'
                            startIcon={<ContactSupportOutlinedIcon />}
                        >
                            Contact
                        </Button >
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
