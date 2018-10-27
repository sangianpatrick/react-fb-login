import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

class Facebook extends Component{
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    fbOnClick = () => console.log("Clicked")

    responseFacebook = response => {
        console.log(response)
    }

    render(){
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = null
        } else {
            fbContent = (<FacebookLogin
                appId="2240212359544261"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.fbOnClick}
                callback={this.responseFacebook}/>)
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}

export default Facebook