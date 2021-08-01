import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import Game from './GameComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';

//are basic imports to use the material ui theme
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

//creating the theme desire for the whole application
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2E765E',
        },
        secondary: {
            main: '#171810',
        },
        warning: {
            main: '#C1C5D2',
        },
        type: 'dark'
    },
    typography: {
        fontFamily: 'Garamond',
        h5: {
            color: '#ffdd00',
        }
    },
    spacing: 8,

})

function Main() {
    return (
        <CssBaseline>
            {/* wrapped everything with the theme provider we created above */}
            <ThemeProvider theme={theme}>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/game' component={Game} />
                    <Route path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </ThemeProvider>
        </CssBaseline>
    )
}

export default Main;
