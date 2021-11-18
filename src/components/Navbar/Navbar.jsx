import React from 'react'
import { AppBar,Toolbar, IconButton,Badge,Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { classExpression } from '@babel/types'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/logo.png'

import useStyles from './Styles'

const Navbar = ({ totalItems })  => {
    const classes=useStyles();
    const location = useLocation()

 
    return (
        <AppBar position="fixed" className={classExpression.AppBar} color="inherit"> 
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height='25px' className={classExpression.image}/>
                        commerce.js
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname === "/" &&(
                    <div className={classes.button}>
                    <IconButton component={Link} to='/cart' aria-label="show cart itmes" color="inherit">
                    <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>)}
                </Toolbar>
        </AppBar>
    )
}
export default Navbar