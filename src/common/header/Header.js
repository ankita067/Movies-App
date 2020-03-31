import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

const TabConatainer = function(props) {
    return(
        <Typography component="div" style={{padding: 0, textAlign: 'center'}}>
            {props.children}
        </Typography>
    );
}

TabConatainer.propTypes = {
    children: PropTypes.node.isRequired
}

class Header extends  Component {
    constructor()
    {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            username: "",
            usernameRequired: "dispNone",
            password:"",
            passwordRequired: "dispNone",
            firstName: "",
            firstnameRequired: "dispNone",
            lastname: "",
            lastNameRequired: "dispNone",
            email: "",
            EmailRequired: "dispNone",
            Password: "",
            passRequired: "dispNone",
            contact: "",
            ContactRequired: "dispNone"


            
        };
    }
    openModalHandler = () => {
        this.setState({modalIsOpen: true})
        this.setState({value: 0})
        this.setState({username:""})
        this.setState({usernameRequired:"dispNone"})
        this.setState({password:""})
        this.setState({passwordRequired:"dispNone"})
        this.setState({firstname: ""})
        this.setState({firstnameRequired: "dispNone"})
        this.setState({lastname: ""})
        this.setState({lastNameRequired: "dispNone"})
        this.setState({email: ""})
        this.setState({EmailRequired: "dispNone"})
        this.setState({password: ""})
        this.setState({passRequired: "dispNone"})
        this.setState({contact: ""})
        this.setState({ContactRequired: "dispNone"})
    }

    closeModalHandler = () => {
        this.setState({modalIsOpen: false})
    }

    tabChangeHandler = (event, value) => {
        this.setState({value});
        
    }

    loginClickHandler = (e) => {
        this.state.username === "" ? this.setState({usernameRequired: "dispBlock"}) : this.setState({usernameRequired: "dispNone"});
        this.state.password === "" ? this.setState({passwordRequired: "dispBlock"}) : this.setState({passwordRequired: "dispNone"});
    }

    RegisterClickHandler = (e) => {
        this.state.firstname === "" ? this.setState({firstnameRequired: "dispBlock"}) : this.setState({firstnameRequired: "dispNone"});
        this.state.lastname === "" ? this.setState({lastNameRequired: "dispBlock"}) : this.setState({lastNameRequired: "dispNone"});
        this.state.email === "" ? this.setState({EmailRequired: "dispBlock"}) : this.setState({EmailRequired: "dispNone"});
        this.state.password === "" ? this.setState({passRequired: "dispBlock"}) : this.setState({passRequired: "dispNone"});
        this.state.contact === "" ? this.setState({ContactRequired: "dispBlock"}) : this.setState({ContactRequired: "dispNone"});
    } 
    

    inputChangeHandler = (e) => {
        this.setState({username: e.target.value})
    }
    PasswordinputChangeHandler = (e) => {
        this.setState({password: e.target.value})
    }

    FirstNameinputChangeHandler = (e) => {
        this.setState({firstname: e.target.value})
    }

    LastNameinputChangeHandler = (e) => {
        this.setState({lastname: e.target.value})
    }


    EmailinputChangeHandler = (e) =>  {
        this.setState({email: e.target.value})
    }


    passinputChangeHandler = (e) => {
        this.setState({password: e.target.value})
    }

    ContactinputChangeHandler = (e) => {
        this.setState({contact: e.target.value})
    }


    render () {
        return (
            <div>
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <div className="login-button">
                    <Button variant="contained" color="default" onClick={this.openModalHandler}  >Login</Button>
                </div>
            </header>


            <Modal  ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login"
            onRequestClose={this.closeModalHandler} style={customStyles}>
                
                <Tabs  className="tabs"   value={this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label = "Login"/>
                    <Tab label = "Register"/>  
                </Tabs>     


                {this.state.value === 0 &&
                <TabConatainer>
                    <FormControl required>
                        <InputLabel htmlFor="userName"> Username </InputLabel>
                        <Input id="username" type="text"  username={this.state.username} onChange={this.inputChangeHandler}/>
                        <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>


                    <FormControl required>
                        <InputLabel htmlFor="password"> Password </InputLabel>
                        <Input id="password" type="text" password={this.state.password} onChange={this.PasswordinputChangeHandler}/>
                        <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>

                    
                    <Button variant="contained" color="primary" onClick={this.loginClickHandler}>Login</Button>
                </TabConatainer>}

                {this.state.value === 1 && 
                <TabConatainer>
                    <FormControl required>
                        <InputLabel htmlFor="firstName"> FirstName </InputLabel>
                        <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.FirstNameinputChangeHandler}/>
                        <FormHelperText className={this.state.firstnameRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>

                    <FormControl required>
                        <InputLabel htmlFor="lastName"> LastName </InputLabel>
                        <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.LastNameinputChangeHandler}/>
                        <FormHelperText className={this.state.lastNameRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>


                    <FormControl required>
                        <InputLabel htmlFor="Email"> Email </InputLabel>
                        <Input id="email" type="text" email={this.state.email} onChange={this.EmailinputChangeHandler}/>
                        <FormHelperText className={this.state.EmailRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>

                    <FormControl required>
                        <InputLabel htmlFor="password"> Password </InputLabel>
                        <Input id="password" type="text" password={this.state.password} onChange={this.passinputChangeHandler}/>
                        <FormHelperText className={this.state.passRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>

                    <FormControl required>
                        <InputLabel htmlFor="Contact"> Contact No. </InputLabel>
                        <Input id="contact" type="text" contact={this.state.contact} onChange={this.ContactinputChangeHandler}/>
                        <FormHelperText className={this.state.ContactRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>
                    
                    <Button variant="contained" color="primary" onClick={this.RegisterClickHandler}>Register</Button>
                </TabConatainer>}

            </Modal>
            </div>
        )

    }
} 
 

export default Header;