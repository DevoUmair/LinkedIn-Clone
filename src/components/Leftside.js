import styled from 'styled-components'

const Leftside = () => {
    return (
            <Container>

                  <ArtCard>
                      <Userinfo>
                          <CardBackground />
                          <a>
                              <Photo />
                              <Link>Welcome there!</Link>
                          </a>
                          <a>
                              <AddaPhoto> Add a photo </AddaPhoto>
                          </a>
                      </Userinfo>
                      <Widget>
                          <a>
                               <div>
                                    <span>Connetction</span>
                                    <span>Grow Your network</span>
                               </div>
                               <img src='images/widget-icon.svg'></img>
                          </a>
                      </Widget>
                      <Item>
                          <span>
                              <img src='images/item-icon.svg'></img>
                              My Item
                          </span>
                      </Item>
                  </ArtCard>

                  <CommunityCard>
                      <a>
                          <span>Grops</span>
                      </a>
                      <a>
                          <span>
                              Events
                              <img src='images/plus-icon.svg'></img>
                          </span>
                      </a>
                      <a>
                           <span>Folow Hashtag</span>
                      </a>
                      <a>
                          <span>Discover More</span>
                      </a>
                  </CommunityCard>

            </Container>
    )        
}

const Container = styled.div`
    grid-area:Leftside;
`

const ArtCard = styled.div`
    text-align:center;
    overflow:hidden;
    margin-bottom:8px;
    background-color:#fff;
    border-radius:5px;
    transition:box-shadow 83ms;
    position:relative;
    border:none;
    box-shadow:0 0 0 1px rgba(0 0 0 /15%) , 0 0 0 1px rgba(0 0 0 /20%);
`

const Userinfo = styled.div`
     border-bottom:1px solid rgba(0,0,0,0.15);
     padding:12px 12px 16px;
     word-wrap:break-word;
     word-break:break-word;
`

const CardBackground = styled.div`
     background: url("/images/card-bg.svg");
     background-position:center;
     background-size:462px;
     height:54px;
     margin:-12px -12px 0;
`

const Photo = styled.div`
     box-shadow:none;
     background: url("/images/photo.svg");
     width:72px;
     height:72px;   
     box-sizing:border-box;
     background-clip:content-box;
     background-color:white;
     background-position:center;
     background-size:60%;
     border:2px solid white;
     margin:-38px auto 12px;
     background-repeat:no-repeat;
     border-radius:50%;
`

const Link = styled.div`
     font-size:16px;
     line-height:1.5;
     color:rgba(0,0,0,0.9);
     font-weight:600;
`

const AddaPhoto = styled.div`
     color:#0a66c2;
     margin-top:4px;
     line-height:1.33;
     font-weight:400;
`

const Widget = styled.div`
     border-bottom:1px solid rgba(0,0,0,0.15);
     padding-top:12px;
     padding-bottom:12px;

     & > a {
          text-decoration:none;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:4px 12px;
     }

     &:hover{
         background:rgba(0,0,0,0.08);
     }

     div{
         display:flex;
         flex-direction:column;
         text-align:left;
         span{
             font-size:17px;
             line-height:1.333;
             &:first-child{
                 color:rgba(0,0,0,0.6)
             }
             &:nth-child(2){
                color:rgba(0,0,0,1)
             }
         }
     }

     svg{
         color:rgba(0,0,0,1);
     }
`

const Item = styled.a`
     border-color:rgba(0,0,0,0.8);
     text-align:left;
     padding:12px;
     font-size:15px;
     display:block;

     span{
         display:flex;
         align-items:center;
         color:rgba(0,0,0,1);
         svg{
             color:rgba(0,0,0,0.6);
         }
     }

     &:hover{
         background-color:rgba(0,0,0,0.08);
     }
`

const CommunityCard = styled(ArtCard)`
    padding:8px 0 0;
    text-align:left;
    display:flex;
    flex-direction:column;
    a{
        color:black;
        padding:4px 12px 4px 12px;
        font-size:15px;

        &:hover{
            color:#0a66c2;
        }

        span{
            display:flex;
            align-items:center;
            justify-content:space-between;
        }

        &:last-child{
            color:rgba(0,0,0,0.6);
            text-decoration:none;
            border-top:1px solid #d6cec2;
            padding:12px;
            &:hover{
                background:rgba(0,0,0,0.06);
            }
        }
    }
`



export default Leftside