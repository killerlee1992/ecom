import React from 'react'
import { Card, CardMedia,CardContent, CardActions, Typography,IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles';





const Product = ({product, onAddToCart}) => {
    const classes = useStyles();
    


    return (
        
            <Card className={classes.root}>
                
                < CardMedia className={classes.media} image={product.media.source} title={product.name} />
                <CardContent>
                    <div className={classes.CardContent}>
                        <Typography varriant="h5" gutterBottom>
                          {product.name}  
                        </Typography>
                        <Typography varriant="h5" price='true'>
                          {product.price.formatted_with_symbol}  
                        </Typography>
                    </div>
                    
                    <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant='body2' color='textSecondary'/>
                        
                 
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton aria-label='add to Cart' onClick={() => onAddToCart(product.id,1)}>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>
    )
}

export default Product
