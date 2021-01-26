import React, { Component } from 'react'
//import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
//import { Redirect } from 'react-router-dom';
import axios from 'axios'

export class Logintbygoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        // this.signup = this
        //   .signup
        //   .bind(this);
    }

    signup(res) {
        const googleresponse = {
            Name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            Image: res.profileObj.imageUrl,
            ProviderId: 'Google'

        };

        axios.post('http://localhost:60200/Api/Login/SocialmediaData', googleresponse)
            .then((result) => {
                let responseJson = result;
                sessionStorage.setItem("userData", JSON.stringify(result));
                this.props.history.push('/Dashboard')
            });
    };
    
    
    render() {
        const responseGoogle = (response) => {
            console.log("enter test");
            console.log(response);
           //var res = response.profileObj;
            //console.log(res);
            //debugger;
            //this.signup(response);
        }

        const responseLogout = (response) => {
            console.log("Success");
            console.log(response);
        }
        const responseFaire = (response) => {
            console.log("Faire");
            console.log(response);
        }
        return (
            <div className="App">
                <div className="row">
                    <div className="col-sm-12 btn btn-info">
                        Login With Google Using ReactJS
          </div>
                </div>
                <div className="row">
                    <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <GoogleLogin
                                clientId="102184357281-t48ucmknrp1bej38l2mi8di15qd7e0c3.apps.googleusercontent.com"
                                buttonText="Login with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle} 
                                isSignedIn={false}
                                cookiePolicy={'single_host_origin'}>

                            </GoogleLogin>
                            <GoogleLogout
                                clientId="102184357281-t48ucmknrp1bej38l2mi8di15qd7e0c3.apps.googleusercontent.com"
                                buttonText="Logout"
                                onLogoutSuccess={responseLogout}
                                onFailure={responseFaire}
                            >
                            </GoogleLogout>
                        </div>
                        <div className="col-sm-4"></div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Logintbygoogle