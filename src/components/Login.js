import React from 'react'
import styled from 'styled-components'

function Login(props) {
    return (
        <Container >
            <Nav>
                <a href='/'>
                    <img src="images/login-logo.svg"></img>
                </a>
                <div>
                    <Join>Join Now</Join>
                    <SignIn>Sign in</SignIn>
                </div>
            </Nav>
            <Section>
                   <Hero>
                       <h1>Welcome to your professional community</h1>
                       <img src='images/login-hero.svg'></img>
                   </Hero>
                   <Form>
                       <Google>
                           <img src='images/google.svg'></img>
                           Sign in with google
                       </Google>
                   </Form>
            </Section>
        </Container>
    )
}

export default Login

const Container = styled.div`
    padding:0px;
    height:100%;
`

const Nav = styled.nav`
    max-width:1128px;
    margin:auto;
    padding:12px 0 16px;
    display:flex;
    align-items:center;
    position:relative;
    justify-content:space-between;
    flex-wrap:no-wrap;

    & > a{
        width:135px;
        height:34px;
    }

    @media(max-width:768px){
        padding:0 5px;
    }
`

const Join = styled.a`
    font-size:16px;
    padding:10px 12px;
    text-decoration:none;
    color:rgba(0,0,0,0.6);
    margin-right:12px;
    border-radius:4px;
    cursor:pointer;

    &:hover{
        background-color:rgba(0,0,0,0.08);
        color:rgba(0,0,0,0.9);
        text-decoration:none;
    }
`
const SignIn = styled.a`
     box-shadow:inset 0 0 0 1px #0a66c2;
     color:#0a66c2;
     border-radius:24px;
     transition-duration:167ms;
     font-size:16px;
     font-weight:600;
     line-height:40px;
     padding:10px 24px;
     text-align:center;
     background-color:rgba(0,0,0,0);
     cursor:pointer;

     &:hover{
        background-color:rgba(112,181,249,0.15);
        color:#0a66c2;
        text-decoration:none;
     }
`

const Section = styled.section`
    align-content:start;
    display:flex;
    min-height:100%;
    padding-top:80px;
    position:relative;
    flex-wrap:wrap;
    width:100%;
    max-width:1120px;
    align-items:center;
    margin:auto;

    @media(max-width:768px){
        margin:auto;
        min-height:0px;
    }
`

const Hero = styled.div`
    width:100%;

    h1{
        padding-bottom:0;
        width:55%;
        font-size:56px;
        color:#2977c9;
        font-weight:200;
        line-height:70px;

        @media(max-width:768px){
            text-align:center;
            font-size:28px;
            width:100%;
            line-height:2;
        }
    }

    img{
        width:600px;
        height:570px;
        position:absolute;
        bottom:-2px;
        right:-150px;
        top:30px;

        @media(max-width:768px){
             top:230px;
             width:initial;
             position:initial;
             height:initial;
        }
    }
`

const Form = styled.div`
    margin-top:100px;
    width:408px;

    @media(max-width:768px){
        margin-top:20px;
    }
`

const Google = styled.button`
    display:flex;
    justify-content:center;
    background-color:#fff;
    align-items:center;
    height:56px;
    width:100%;
    border-radius:28px;
    box-shadow:inset 0 0 0 1px rgb(0 0 0 /601),
               inset 0 0 0 1px rgb(0 0 0 /01),
               inset 0 0 0 1px rgb(0 0 0 /0)
    vertical-align:middle;
    z-index:0;
    transition-duration:168ms;
    font-size:20px;
    color:rgba(0,0,0,0.6)
    cursor:pointer;
    
    &:hover{
        background-color:rgba(207,207,207,0.25);
        color:rgba(0,0,0,0.75);
    }

    outline:none;

` 