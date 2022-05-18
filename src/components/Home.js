import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import Leftside from './Leftside'
import Main from './Main'
import Rightside from './Rightside'

function Home() {
    return (
        <div>
            <Header/>
            <Container>
                <Section>
                    <h5><a> Hiringin a hurry? - </a></h5>
                    <p>Find talented pros in record time with Upwork and keep bussiness moving</p>
                </Section>
                <LayOut>
                    <Leftside  />
                    <Main />
                    <Rightside />
                </LayOut>
            </Container>
        </div>
    )
}

const Container = styled.div`
   padding-top:52px;
   max-width:100%;
`

const Contnet = styled.div`
   max-width:1128px;
   margin:0 auto;
`

const Section = styled.div`
   min-height:50px;
   padding:16px 0px;
   box-sizing: content-box;
   text-align:center;
   text-decoration: underline;
   display:flex;
   justify-content:center;

   h5{
       font-size:14px;

       a{
           color:#0a66c2;
           font-weight:700;
       }
   }

   p{
       font-size:14px;
       color:#434649;
       font-weight:600;
   }

   @media screen and (min-width:200px) and (max-width:768px){
       flex-direction:column;
       padding:0 5px;
   }
`

const LayOut = styled.div`
    display:grid;
    grid-template-areas: "Leftside Main Righhtside";
    grid-template-columns : minmax(0 , 5fr) minmax(0,12fr) minmax(300px , 7fr);
    column-gap:25px;
    row-gap:25px;
    margin : 25px 0;

    @media(max-width:768px){
        display:flex;
        flex-direction:column;
        padding:0 5px;
    }
`

export default Home
