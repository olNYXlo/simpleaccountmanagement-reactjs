import React, {Component} from 'react';
import { Container, Typography, Grid,Button, TextField, GridList} from '@material-ui/core';
import Axios from 'axios';
import {Link, withRouter} from 'react-router-dom'

import { Redirect } from 'react-router';


class Welcome extends Component{

    constructor(){
        super();
        this.state =({
            accounts : []
        })
    }

    UNSAFE_componentWillMount = () => {
        Axios.get("http://localhost:8091/accounts")
        .then(res => {
        this.setState({
            accounts : res.data
        })
        console.log("printing response")
        console.log(res.data);
        var rows = []
    }) 
    }


   deleteHandler = (UserName) => {
       var postData = ({
           username : UserName
       })
    
    Axios.delete("http://localhost:8091/delete", postData)
    .then(res => {
        console.log("attemping delete")
        console.log(postData)
        console.log("res.data")

        if (res.data === true){
            console.log("delete successful")
            window.location.reload();
            
        }
    })
    }

    resetPwHandler = (UserName) => {
        var postData = ({
            username : UserName
        })
     
     Axios.post("http://localhost:8091/resetPassword", postData)
     .then(res => {
        console.log("attemping reset password")
        console.log(postData)
        console.log(res.data)

         if (res.data === true){
             console.log("Reset Password successful")
             console.log("New password is : Password123!")
             window.location.reload();
             
             
         }
     })
     }
               
    
    
    
    




    render (){

       

        this.rows = this.state.accounts.map ( account => (
            <Grid>

          
          <TextField 
            defaultValue={account.username}
            variant="outlined"
            margin="normal"
            InputProps={{
                readOnly: true
            }}
            />
            

            
            <TextField 
            defaultValue={account.password}
            variant="outlined"
            margin="normal"
            InputProps={{
                readOnly: true
            }}
            />
            

            
            <TextField 
            defaultValue={account.firstname}
            variant="outlined"
            margin="normal"
            InputProps={{
                readOnly: true
            }}
            />
           
            
            
            <TextField 
            defaultValue={account.lastname}
            variant="outlined"
            margin="normal"
            InputProps={{
                readOnly: true
            }}
            />
            

           
            <TextField 
            defaultValue={account.email}
            variant="outlined"
            margin="normal"
            InputProps={{
                readOnly: true
            }}
            />
           

         
            <TextField 
            defaultValue={account.mobileNo}
            variant="outlined"
            margin="normal"
            InputProps={{
                readOnly: true
            }}
            />


            <Button 
                onClick={() => this.resetPwHandler(account.username)}
                variant="contained"
                style={{"backgroundColor": "#3868b5", "color": "white",
                "marginLeft": "auto", "marginRight": "auto", "display": "block", "marginTop": "15px", 
                "marginBottom": "15px"}}>RESET PASSWORD</Button>

            <Button 
                onClick={() => this.deleteHandler(account.username)}
                variant="contained"
                style={{"backgroundColor": "#3868b5", "color": "white",
                "marginLeft": "auto", "marginRight": "auto", "display": "block", "marginTop": "15px", 
                "marginBottom": "15px"}}>DELETE</Button>
         



          </Grid>

        ))
        console.log("printing rows")
        console.log(this.rows)
            
         


        return (
            
            <Container maxWidth="md">

                <Typography  
                align="center"
                variant="h1"
                style={{ backgroundColor: '#cfe8fc', color : "blue"}}>
                    Welcome To The Application</Typography>

                <GridList container direction="row" cols={6}>
                      {this.rows}
                </GridList>
                <br/>
                

                




                <Link to="/Home">GO BACK TO LOGIN PAGE</Link>
                <br></br>
                <Link to="/Registration">GO BACK TO REGISTRATION PAGE</Link>
                <br></br>
                <Link to="/">GO BACK TO NAVIGATION PAGE</Link>




            </Container>
          )

    }
  
}

export default withRouter(Welcome);
