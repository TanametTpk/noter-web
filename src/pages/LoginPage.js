import React from 'react'
import Section from '../components/Section'
import KaptuerHeader from '../components/custom/KaptuerHeader'
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux'
import { createUser } from '../store/actions/userAction'

const LoginPage = (props) => {

    const responseFacebook = async (response) => {
        console.log(response);
        let user = await props.createUser(response);
        console.log(user);
        
        props.history.push("/collection");
    }

    return (
        <div className="login-page">
            <KaptuerHeader>
                <div>
                <FacebookLogin
                    appId="735533820242771"
                    fields="name,email"
                    callback={responseFacebook}
                />
                </div>
            </KaptuerHeader>
            <Section height="100vh" backgroundColor="#f6f8f9">
                <div className="landing-bg" style={{ width:"100%" , height:"100%" , display:'flex' }}>
                    <div style={{flex:8 , display:'flex' , justifyContent:"center" , alignItems:"center" , flexDirection:"column"}}>
                        <div style={{textAlign:'left' , lineHeight:0.1}}>
                            <p style={{fontSize:"86px"}}>Noter,</p>
                            <p style={{fontSize:"34px"}}>a note for online wrap up.</p>
                            <FacebookLogin
                                appId="735533820242771"
                                fields="name,email"
                                callback={responseFacebook}
                            />
                        </div>
                    </div>
                    <div style={{flex:10}} />
                </div>
            </Section>
        </div>
    )
}

const mapDispatchToProps = {
    createUser
}

export default connect(null, mapDispatchToProps)(LoginPage)
