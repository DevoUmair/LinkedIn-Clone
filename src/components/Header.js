import React from 'react'
import styled from 'styled-components'

function Header(props) {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href='/Home'>
                        <img src='images/home-logo.svg'></img>
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder='Search'></input>
                    </div>
                    <SeachIcon>
                        <img src='images/search-icon.svg'></img>
                    </SeachIcon>
                </Search>
                <Nav>
                   <NavListWrap>
                       <NavList className="active">
                           <a>
                              <img src='images/nav-home.svg'></img>
                              <span>Home</span>
                           </a>
                       </NavList>
                       <NavList>
                           <a>
                              <img src='images/nav-network.svg'></img>
                              <span>My Network</span>
                           </a>
                       </NavList>
                       <NavList>
                           <a>
                              <img src='images/nav-jobs.svg'></img>
                              <span>Jobs</span>
                           </a>
                       </NavList>
                       <NavList>
                           <a>
                              <img src='images/nav-messaging.svg'></img>
                              <span>Messaging</span>
                           </a>
                       </NavList>
                       <NavList>
                           <a>
                              <img src='images/nav-notifications.svg'></img>
                              <span>Notification</span>
                           </a>
                       </NavList>

                       <User>
                           <a>
                               <img src='images/user.svg'></img>
                               <span>Me
                               <img src='images/down-icon.svg'></img>
                               </span>
                             
                           </a>

                           <SignOut><a>Sign out</a></SignOut>
                       </User>

                       <Work>
                           <a>
                               <img src='images/nav-work.svg'></img>
                               <span>Work
                               <img src='images/down-icon.svg'></img>
                               </span>
                               
                           </a>
                       </Work>
                   </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}

export default Header


const Container  = styled.div`
   background-color:white;
   border-bottom: 1px solid rgba(0,0,0,0.08);
   left:0;
   padding:0 24px;
   position:fixed;
   top:0;
   width:100vw;
   z-index:100;
`

const Content  = styled.div`
   display:flex;
   align-items:center;
   margin:0 auto;
   max-height:100%;
   max-width:1128px;
`

const Logo = styled.span`
   margin-right:8px;
   font-size:0px;
`
const Search = styled.div`
   opacity:1;
   flex-grow:1;
   position:relative;

   & > div{
      max-width:288px;
      input{
          border:none;
          background-color:#eef3f8;
          border-radius:2px;
          color:rgba(0,0,0,0.9);
          width:218px;
          padding:0 8px 0 48px;
          line-height:1.75;
          font-weight:400;
          font-size:14px;
          height:34px;
          border-color:#dce6f1;
          vertical-align:text-top;
      }
   }
`

const SeachIcon = styled.div`
    width:40px;
    position:absolute;
    z-index:1;
    top:10px;
    left:2px;
    margin:0;
    border-radius:0 2px 2px 0;
    pointer-events:none;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Nav = styled.nav`
   margin-left:auto;
   display:block;
   height: 50px;

   @media(max-width:768px){
       position:fixed;
       left:0;
       bottom:0;
       background:white;
       width:100%;
   }
`

const NavListWrap = styled.ul`
    display:flex;
    flex-wrap:no-wrap;
    list-style-type:none;

    .active{
        span:after{
            content:"";
            transform:scale(1);
            border-bottom:2px solid #000;
            bottom:0;
            left:0;
            position:absolute;
            transition:transform 0.2s ease-in-out;
            width:100%;
            border-color: rgba(0,0,0,0.8);
        } 
    }
`

const NavList = styled.li`
    display:flex;
    align-items:center;
    a{
        align-items:center;
        background:transparent;
        display:flex;
        flex-direction:column;
        font-size:12px;
        font-weight:400;
        justify-content:center;
        line-height:1.5;
        min-height:40px;
        min-width:80px;
        position:relative;
        text-decoration:none;

        span{
            color:rgba(0,0,0,0.8);
            display:flex;
            align-items:center;
            cursor:pointer;
            
        }

        @media(mac-width:768px){
            min-width:70px
        }
    }

    &:hover , &:active{
            a{
                span{
                    color:rgba(0,0,0,0.5);
                }
            }
        } 
`

const SignOut = styled.div`
   position:absolute;
   top:45px;
   background:white;
   border-radius:0 0 5px 5px;
   width:100px;
   height:40px;
   font-size:16px;
   transition-duration:167ms;
   text-align:center; 
   display:none;
`

const User = styled(NavList)`
   a > svg{
    width:24px;
    border-radius:50%;
   }

   a > img {
       width:24px;
       height:24px;
       border-radius:50%;
   } 

   span{
       display:flex;
       align-items:center;
   }

   &:hover{
       ${SignOut}{
           align-items:center;
           display:flex;
           justify-content:center;
       }
   }
`

const Work = styled(User)`
   border-left: 1px solid rgba(0,0,0,0.58);
`

