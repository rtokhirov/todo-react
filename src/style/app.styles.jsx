import styled from "styled-components";

export const Main =styled.div`
  z-index: -1;
  width: 100%;
  min-height: 100vh;
  padding-top: 4rem;
  background-color:${props=> props.dark?'#171823':'#F2F2F2'};
`
export const Container = styled.div`
  position: relative;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-bottom: 2rem;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  max-width: 540px;
  z-index: 2;
  user-select: none;
  h1{
    font-size: 4rem;
    line-height: 1;
    letter-spacing: 1.5rem; 
    z-index: 2;
    /* color: ; */
  }
`
export const Img =styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 300px;
  height: 26rem;
  
`

export const Header =styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 3rem;
  img{
    cursor: pointer;
  }
  `

export const Form = styled.form`
  display: flex;
  gap: 2.4rem;
  width: 100%;
  background-color:${props=>props.dark?'#25273D':'#FFFFFF'};
  box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 2rem;
  margin-bottom: 2.4rem;
  input{
    width: 100%;
    border: 0;
    font-family: 'Josefin Sans';
    color: ${props=>props.dark?'#C8CBE7':'#393A4B'};
    background-color:${props=>props.dark?'#25273D':'#FFFFFF'};
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.25px;
  }
  input:focus{
      outline: 0;
  }
  img{
    cursor: pointer;
  }
`

export const Menu =styled.div`
  width: 100%;
  background-color:${props=>props.dark?'#25273D':'#FFFFFF'};
  font-family: 'Josefin Sans';
  color:${props=>props.dark?'#C8CBE7':'#494C6B'};
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.25px;
  box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li{
    display: flex;
    gap: 2.4rem;
    padding: 1rem 2rem;
    border-bottom: 1px solid #393A4B;

    div{
      width: 100%;
      display: flex;
      flex-direction: column;
      small{
      display: inline-block;
      text-align: right;
      color: gray;
      font-size: 1.2rem;
    }
    }
    img{
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 700px) {
    font-size: 1.5rem;
    line-height: 1;
    small{
      margin-top: 2px;
      font-size: 8px
    }
  }
  @media only screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
`
export const Li =styled.ul`
    display: flex;
    gap: 2.4rem;
    padding: 1rem 2rem;
    border-bottom: 1px solid #393A4B;
    div{
      width: 100%;
      display: flex;
      flex-direction: column;
      small{
      display: inline-block;
      text-align: right;
      color: gray;
      font-size: 1.2rem;
    }
    }
    img{
      cursor: pointer;
    }
`
export const CanselBTN =styled.img`
  margin-left: auto;
  cursor: pointer;
`

export const Bottom =styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.194444px;
  color:${props=>props.dark?'#5B5E7E':'#9495A5'};
  p:hover{
    color:${props=>props.dark?'#E3E4F1':'#494C6B'};
    cursor: pointer;
  }
  div{
    display: flex;
    justify-content: space-between;
    gap:1.8rem;
    font-weight: 700;
    @media only screen and (max-width: 500px) {
      position: absolute;
      top: 7rem;
      left: 0;
      width: 100%;
      padding: 1.5rem 0;
      justify-content: center;
      background-color:${props=>props.dark?'#25273D':'#FFFFFF'};
      /* background-color: #25273D; */
      /* background-color: #FFFFFF; */
      box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
      border-radius: 5px;
    }
  }
  small{
    font-size: 1.2rem;
  }
`
