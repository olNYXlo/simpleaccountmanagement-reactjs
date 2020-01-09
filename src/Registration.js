import React, {Component} from 'react';
import { Container, TextField, Button, Typography,InputAdornment, IconButton } from '@material-ui/core';
import Axios from 'axios';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom'


import AccessibleForwardSharpIcon from '@material-ui/icons/AccessibleForwardSharp';
import AccessibilitySharpIcon from '@material-ui/icons/AccessibilitySharp';

class Registration extends Component {

    constructor(){
        super();
        this.state ={
            password : "",
            username : "",
            email : "",
            firstname : "",
            lastname : "",
            mobileNo : "",
            redirect : false,
            showPassword : false
        }
        this.handlePw = this.handlePw.bind(this);
        this.handleUn = this.handleUn.bind(this);
        this.handleFn = this.handleFn.bind(this);
        this.handleLn = this.handleLn.bind(this);
        this.handleEm = this.handleEm.bind(this);
        this.handleMn = this.handleMn.bind(this);
        this.handleShowPw = this.handleShowPw.bind(this);
        this.handleCfmPw = this.handleCfmPw.bind(this);
    }

    handlePw = (inputPw) => {
        this.setState({password : inputPw.target.value})
    }

    handleUn = (inputUn) => {
        this.setState({username : inputUn.target.value})
    }

    handleFn = (inputFn) => {
        this.setState({firstname : inputFn.target.value})
    }
    handleLn = (inputLn) => {
        this.setState({lastname : inputLn.target.value})
    }
    handleEm = (inputEm) => {
        this.setState({email : inputEm.target.value})
    }
    handleMn = (inputMn) => {
        this.setState({mobileNo : inputMn.target.value})
    }

    handleShowPw = () => {
        this.setState({showPassword : !this.state.showPassword})
    }

    CfmPw = ""
    handleCfmPw = (inputCfmPw) => {
        this.CfmPw = inputCfmPw.target.value
    }


    

    

    




    RegisterHandler = () => {
        console.log(this.state)
        console.log(this.CfmPw)
        if (this.CfmPw === this.state.password){

            Axios.post("http://localhost:8091/register", this.state)
            .then(res => {
            console.log(res);
            console.log(res.data);
            if (res.data === true){
                console.log("registration successful")
                this.setState({
                    redirect : true
                })
                
            }
            else {
                console.log(res.data)
                console.log("registration failed")
            }
        })

        }
        else{
            console.log("Entered passwords do not match")
        }
        
        
    }



    render() {

        if (this.state.redirect === true){
            return <Redirect to ='/Home'/>
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
                    Registration Page</Typography>

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
                  InputProps={{
                    endAdornment : (
                        <InputAdornment position="end">
                            <IconButton onClick={this.handleShowPw}>
                                {this.state.showPassword ? <AccessibilitySharpIcon/> : <AccessibleForwardSharpIcon/>}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                  fullWidth
                  />

                <b><p>CONFIRM PASSWORD</p></b>
                  <TextField
                  type={this.state.showPassword ? 'text' : 'password'}
                  variant="outlined"
                  margin="normal"                
                  onChange = {this.handleCfmPw}
                  InputProps={{
                    endAdornment : (
                        <InputAdornment position="end">
                            <IconButton onClick={this.handleShowPw}>
                                {this.state.showPassword ? <AccessibilitySharpIcon/> : <AccessibleForwardSharpIcon/>}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                  fullWidth
                  />

                <b><p>First Name</p></b>
                  <TextField
                  input type = "text"
                  variant="outlined"
                  margin="normal"
                  value = {this.state.firstname}
                  onChange={this.handleFn}
                  fullWidth
                  />

                <b><p>Last Name</p></b>
                  <TextField
                  input type = "text"
                  variant="outlined"
                  margin="normal"
                  value = {this.state.lastname}
                  onChange={this.handleLn}
                  fullWidth
                  />

                <b><p>Email</p></b>
                  <TextField
                  input type = "text"
                  variant="outlined"
                  margin="normal"
                  value = {this.state.email}
                  onChange={this.handleEm}
                  fullWidth
                  />

                <b><p>Mobile Number</p></b>
                  <TextField
                  input type = "text"
                  variant="outlined"
                  margin="normal"
                  value = {this.state.mobileNo}
                  onChange={this.handleMn}
                  fullWidth
                  />

                  <Button 
                   onClick={this.RegisterHandler}
                   variant="contained"
                   style={{"backgroundColor": "#3868b5", "color": "white",
                   "marginLeft": "auto", "marginRight": "auto", "display": "block", "marginTop": "15px", 
                   "marginBottom": "15px"}}>Register</Button>



                <Link to="/Home">GO BACK TO LOGIN PAGE</Link>
                <br></br>
                <Link to="/">GO BACK TO NAVIGATION PAGE</Link>

            </Container>
            </div>

        )
    }








}
export default Registration;