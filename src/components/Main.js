import styled from 'styled-components'

const Main = () => {
    return <Container>
                 <ShareBox>
                    <div>
                      <img src='images/user.svg'></img>
                      <button>Start a post</button>
                    </div>
                    <div>
                        <button>
                          <img src='images/uploadImg.svg'></img>
                          <span>Photo</span>
                        </button>
                        <button>
                          <img src='images/UploadVideo.svg'></img>
                          <span>Video</span>
                        </button>
                        <button>
                          <img src='images/UploadEvent.svg'></img>
                          <span>Event</span>
                        </button>
                        <button>
                          <img src='images/UploadArtical.svg'></img>
                          <span>Write Artical</span>
                        </button>
                    </div>
                 </ShareBox>
                 <div>
                   <Article>
                        <SharedActor>
                          <a>
                            <img src='images/user.svg'></img>
                            <div>
                                <span>Tittele</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                          </a>
                          <button>
                              <img src='images/hamburger.svg'></img>
                          </button>
                        </SharedActor>
                        <Discription>Description</Discription>
                        <SharedImg>
                          <a>
                            <img src='images/post1.jpeg'></img>
                          </a>
                        </SharedImg>
                        <SocialCount>
                          <li>
                             <button>
                               <img src='https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss'></img>
                               <img src='https://static-exp1.licdn.com/sc/h/cm8d2ytayynyhw5ieaare0tl3'></img>
                               <span>75</span>
                             </button>
                          </li>
                          <li>
                            <a>
                              2 comments
                            </a>
                          </li>
                        </SocialCount>
                        <SocilaAction>
                            <button>
                              <img src='images/like.svg'></img>
                              <span>like</span>
                            </button>
                            <button>
                              <img src='images/comment.svg'></img>
                              <span>Comment</span>
                            </button>
                            <button>
                              <img src='images/share.svg'></img>
                              <span>Share</span>
                            </button>
                            <button>
                              <img src='images/send.svg'></img>
                              <span>Share</span>
                            </button>
                        </SocilaAction>
                    </Article>
                 </div>
          </Container>
}

const Container = styled.div`
  grid-area:Main;
`
const CommanCard = styled.div`
  text-align:center;
  overflow:hidden;
  margin-bottom:8px;
  background-color:#fff;
  border-radius:5px;
  position:relative;
  box-shadow:0 0 0 1px rgba(0 0 0 /15%) , 0 0 0 1px rgba(0 0 0 /20%);
`

const ShareBox = styled(CommanCard)`
  display: flex;
  flex-direction:column; 
  color:#958b7b;
  margin: 0 0 8px;
  background: white;
  
  div{
    button{
      outline:none;
      color:rgba(0,0,0,0.6);
      font-size:14px;
      line-height:1.5;
      min-height:48px;
      background:transparent;
      border:none;
      display: flex;
      align-items:center;
      font-weight:600;
    }
    &:first-child{
      display:flex;
      align-items:center;
      padding:8px 16px 8px  16px;

      img{
         width:48px;
         border-radius:50%;
         margin-right:8px;
      }
      button{
        margin:4px 0;
        flex-grow:1;
        border-radius:35px;
        padding-left:16px;
        border:1px solid rgba(0,0,0,0.15);
        background-color:white;
        text-align:left;
      }
    }
    &:nth-child(2){
      display: flex;
      flex-wrap:wrap;
      justify-content:space-around;
      padding:4px;

      button{
        img{
          margin:0 4px 0 -2px;
        }
        span{
          color:#70b5f9;
        }
      }
    }
  }
`

const Article  = styled(CommanCard) ` 
  padding:0;
  margin:0 0 8px;
  overflow:visible;
`

const SharedActor = styled.div`
   padding-right:40px;
   flex-wrap:nowrap;
   padding:12px 16px 0;
   margin-bottom:8px;
   align-items:center;
   display: flex;

   a{
     margin-right:12px;
     flex-grow:1;
     overflow:hidden;
     display:flex;
     text-decoration:none;

     img{
       width:48px;
       height:48px;
     }

     & > div{
       display:flex;
       flex-direction:column;
       flex-grow:1;
       flex-basis:0;
       margin-left:8px;
       overflow:hidden;
       span{
         text-align:left;
         &:first-child{
           font-size:14px;
           font-weight:400;
           color:rgba(0,0,0,1)
         }
         &:nth-child(n+1){
           font-size:12px;
           color:rgba(0,0,0,0.5);
         }
       }
     }
   }

   button{
     position:absolute;
     right:12px;
     top:0;
     background:transparent;
     border:none;
     outline:none;
   }
`

const Discription = styled.div`
    padding:0 16px;
    overflow:hidden;
    color:rgba(0,0,0,0.9);
    font-size:14px;
    text-align:left;
`

const SharedImg = styled.div`
   margin-top:8px;
   width:100%;
   display: block;
   position:relative;
   background-color:#f9fafb;
   img{
     object-fit:contain;
     width:100%;
     height:100%;
   }
`

const SocialCount = styled.ul`
   line-height:1.3;
   display: flex;
   align-items:center;
   justify-content:space-between;
   overflow:auto;
   margin:0 16px;
   padding:8px 0;
   border-bottom:1px solid #e9e5df;
   list-style:none;
   li{
     margin-right:5px;
     font-size:12px;
     button{
       display: flex;
       align-items:center;
       background:none;
       outline:none;
       border:none;

       span{
         color:rgba(0,0,0,0.6);
         font-size:12px;
         padding: 0px 3px;
       }
     }
   }
`

const SocilaAction = styled.div`
   align-items:center;
   display:flex;
   margin:0;
   justify-content:space-around;
   min-height:48px;
   padding:4px 8px;

   button{
     display:inline-block;
     align-items:center;
     flex-basis:23%;
     padding:8px;
     color:rgba(0,0,0,0.6);
     background: transparent;
     outline:none;
     border:none;
     border-radius:5px;
     &:hover{
       background: rgba(0,0,0,0.15);
     }

     span{
       margin-left:8px;
     }
   }
`
export default Main