import React, {Component} from 'react';
import { Container, Typography, GridList, GridListTile,IconButton,GridListTileBar} from '@material-ui/core';

import {Link} from 'react-router-dom'

import harold from './harold.jpg';
import random from './random.jpg';
import boomer from './ok boomer.jpg';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import InstagramIcon from '@material-ui/icons/Instagram';
import ShareIcon from '@material-ui/icons/Share';

class Welcome extends Component{


    render (){
        return (
            <Container maxWidth="md">

                <Typography  
                align="center"
                variant="h1"
                style={{ backgroundColor: '#cfe8fc', color : "blue"}}>
                    Welcome To The Application</Typography>

                <GridList cols={2}>
                    

                    <GridListTile key = "harold" >
                        <img src={harold} alt = {harold}/>
                        <GridListTileBar title = "Hide The Pain Harold" 
                        actionIcon={
                        <IconButton>
                            <ThumbUpIcon color="primary" fontSize="large"/>
                            
                        </IconButton>
                        }/>
                    </GridListTile>

                    <GridListTile key = "random">
                        <img src={random} alt = {random}/>
                        <GridListTileBar title = "Random Person" 
                        actionIcon={
                        <IconButton>
                            <TagFacesIcon color="primary" fontSize="small"/>
                            <InstagramIcon color="secondary"/>
                            <ShareIcon color="error" fontSize="large"/>
                        </IconButton>
                        }/>
                    </GridListTile>
                

                <GridListTile key = "boomer" rows = "5" cols = "2">
                        <img src={boomer} alt = {boomer}/>
                        <GridListTileBar title = "OK Boomer" 
                        actionIcon={
                        <IconButton>
                            <TagFacesIcon color="primary" fontSize="small"/>
                            <InstagramIcon color="secondary"/>
                            <ShareIcon color="error" fontSize="large"/>
                        </IconButton>
                        }/>
                    </GridListTile>





                </GridList>


                <Link to="/Home">GO BACK TO LOGIN PAGE</Link>
                <br></br>
                <Link to="/Registration">GO BACK TO REGISTRATION PAGE</Link>
                <br></br>
                <Link to="/">GO BACK TO NAVIGATION PAGE</Link>




            </Container>
          )

    }
  
}

export default Welcome;
