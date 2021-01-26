import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import 'antd/dist/antd.css'
import './login.scss'


export default function Login() {
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const history = useHistory();
    const responseGoogle = (response) => {
        console.log("enter responseGoogle");
        console.log(response);
        var res = response.profileObj;
        console.log(res);
        //debugger;
        //this.signup(response);
    };
    const responseFacebook = (response) => {
        console.log("enter responseFacebook");
        console.log(response);
    }
    const responseLogout = (response) => {
        console.log(response);
    }

    return (
        <div className="loginform">
            <div className="loginforminside">
                <h1>IShare</h1>
                <Form className="">
                    <Form.Item>
                        <Input
                            placeholder={"Enter your user name"}
                            type="text"
                            onChange={(event) => {
                                setName(event.target.value)
                            }} />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            placeholder={"Enter your password"}
                            type="password"
                            onChange={(event) => {
                                setPwd(event.target.value)
                            }} />
                    </Form.Item>
                    {/* <label>username:{name} pwd:{pwd} </label> */}
                    <Button type={"primary"} onClick={() => {
                        validLogin(name, pwd, history)
                    }}>
                        Login</Button>
                </Form>
                <br />
                <div>
                    <GoogleLogin
                        clientId="102184357281-t48ucmknrp1bej38l2mi8di15qd7e0c3.apps.googleusercontent.com"
                        //buttonText=""
                        //isSignedIn={false}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle} >

                    </GoogleLogin>
                    <GoogleLogout
                        clientId="102184357281-t48ucmknrp1bej38l2mi8di15qd7e0c3.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={responseLogout}
                    >
                    </GoogleLogout>
                </div>
                <div>
                    <FacebookLogin
                        appId="429868371665377"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        cssClass="my-facebook-button-class"
                        icon="fa-facebook"
                    />
                </div>

            </div>
        </div>
    )
}

function validLogin(name, pwd, history) {
    axios.post('https://localhost:44398/User/ValidateLogin', {
        username: name,
        password: pwd
    })
        .then((res) => {
            if (res.status === 214) {
                alert(res.data)
            } else if (res.status === 200) {
                alert("success")
                var userId = res.data
                history.push({
                    pathname: 'home',
                    props: {
                        userId
                    }
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
