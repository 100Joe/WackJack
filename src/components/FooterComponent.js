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


const useStyles = makeStyles((theme) => ({
    appbar: {

    },
    root: {
        marginTop: 50,
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


function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary" >
                <Toolbar>
                    <Typography variant="h4" color='textSecondary' className={classes.title} align="center">
                        <Button component={Link} to='/' className={classes.button}
                            color='inherit'
                            startIcon={<CardMembershipOutlinedIcon />}
                        >

                        </Button>
                    </Typography>
                    <Typography variant="h4" color='textSecondary' className={classes.title} align="center">
                        <Button component={Link} to='/Game' className={classes.button}
                            color='inherit'
                            startIcon={<GroupAddOutlinedIcon />}
                        >

                        </Button >
                    </Typography>
                    <Typography variant="h4" color='textSecondary' className={classes.title} align="center">
                        <Button component={Link} to='/Contact' className={classes.button}
                            color='inherit'
                            startIcon={<ContactSupportOutlinedIcon />}
                        >

                        </Button >
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Footer
