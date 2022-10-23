import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { device } from '../constants/breakpoints'

const Button = styled.button`
  background: #ffa700;
  border: none;
  width: 300px;
  height: 65px;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media${device.mobile} {
    height: 50px;
  }
`

const StyledNFTImage = styled.div`
  #nft {
    width: 300px;
    height: 300px;
  }
  #nft img {
    width: 100%;
    height: 100%;
  }
  #nft #nft-info {
    display: none;
    width: 0px;
    height: 0px;
    padding: 0px;
  }
  #nft #nft-footer {
    display: none;
    width: 0px;
    height: 0px;
    padding: 0px;
  }
`
const BaseContainer = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  @media ${device.mobile} {
    max-width: 100%;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`

const LoadingContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const Header = styled.h1`
  color: white;
  display: flex;
  justify-content: center;
`

const Text = styled.span`
  color: white;
  font-size: 20px;
  @media ${device.mobile} {
    font-size: 15px;
    max-width: 350px;
    text-align: center;
    margin: 0;
    position: absolute;
    bottom: -160px;
  }
`

const ImageContainer = styled.div`
  position: relative;
`

const MainCard = styled.div`
  width: 320px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  flex-direction: column;
  border: 1px solid #707070;
  background: #000;
  padding: 10px;
  @media ${device.mobile} {
    width: 320px;
    height: 400px;
    padding: 10px;
  }
`
const Card = styled.div`
  height: ${({ hasImage }) => (hasImage ? '300px' : '375px')};
  width: 100%;
  background-color: white;
  border: ${({ active }) => active && '3px solid #ffa700'};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.mobile} {
    height: 100px;
    width: 100px;
    padding: 5px;
    display: flex;
    flex: 1;
    display: inline-block;
    margin: 5px;
  }
`


const Landing = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [items, setItems] = useState([{title:"LOL",link:"sadasdasdas"},{title:"LOL",link:"sadasdasdas"}])


  return (
    <div>
      <Header>Boogle</Header>
      <BaseContainer>
        <Container>
          {items.map((item,index)=>{
              return(
                <MainCard key={index}>
                  <Text>{JSON.stringify(item,null,2)}</Text>
                </MainCard>
              )
          })}
        </Container>
      </BaseContainer>
    </div>
  )
}

export default Landing
