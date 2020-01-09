import React, {Component} from 'react';
import { Container, TextField, Button, Typography,InputAdornment, IconButton  } from '@material-ui/core';
import Axios from 'axios';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom'


import AccessibleForwardSharpIcon from '@material-ui/icons/AccessibleForwardSharp';
import AccessibilitySharpIcon from '@material-ui/icons/AccessibilitySharp';

class Home extends Component {

    constructor(){
        super();
        this.state ={
            password : "",
            username : "",
            redirect : false,
            showPassword : false
        }
        this.handlePw = this.handlePw.bind(this);
        this.handleUn = this.handleUn.bind(this);
        this.handleShowPw = this.handleShowPw.bind(this);
    }

    handlePw = (inputPw) => {
        this.setState({password : inputPw.target.value})
    }

    handleUn = (inputUn) => {
        this.setState({username : inputUn.target.value})
    }
    handleShowPw = () => {
        this.setState({showPassword : !this.state.showPassword})
    }


    

    

    




    loginHandler = () => {
        console.log(this.state)
        
        Axios.post("http://localhost:8091/login", this.state)
        .then(res => {
            console.log(res);
            console.log(res.data)
            if (res.data === true){
                console.log("login successful")
                this.setState({
                    redirect : true
                })
                
            }
        })
    }



    render() {

        if (this.state.redirect === true){
                return <Redirect to ='/Welcome'/>
            
        
        }

        return(
            <div>
             <Container     
            component="main" 
            maxWidth="sm"
            style={{borderRadius: '5px', border: "1px solid #BDBDBD", marginTop: "60px"}}>
                <Typography  
                align="center"
                variant="h1"
                style={{ backgroundColor: '#cfe8fc', color : "blue"}}>
                    Login Page</Typography>

                <b><p>USERNAME</p></b>
                  <TextField
                   input type = "text"
                   variant="outlined"
                   margin="normal"
                   value={this.state.username}
                   onChange={this.handleUn}
                   fullWidth
                  />

                <b><p>PASSWORD</p></b>
                  <TextField
                  type={this.state.showPassword ? 'text' : 'password'}
                  variant="outlined"
                  margin="normal"
                  value = {this.state.password}
                  onChange={this.handlePw}
                  fullWidth
                  InputProps={{
                    endAdornment : (
                        <InputAdornment position="end">
                            <IconButton onClick={this.handleShowPw}>
                                {this.state.showPassword ? <AccessibilitySharpIcon/> : <AccessibleForwardSharpIcon/>}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                  />

                  <Button 
                   onClick={this.loginHandler}
                   variant="contained"
                   style={{"backgroundColor": "#3868b5", "color": "white",
                   "marginLeft": "auto", "marginRight": "auto", "display": "block", "marginTop": "15px", 
                   "marginBottom": "15px"}}>LOGIN</Button>


                <Link to="/Registration">GO BACK TO REGISTRATION PAGE</Link>
                <br></br>
                <Link to="/">GO BACK TO NAVIGATION PAGE</Link>

            </Container>
            </div>

        )
    }








}
export default Home;