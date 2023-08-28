"use client"

import { Header } from "@/components/Header"
import styled from "styled-components"

const Home = () => {
  return (
    <Container>
      <Header />
      <Body>
        <LogoContainer>
          <Logo src="https://meta-static.op.gg/logo/image/fc9a4aeddcf438c0b4faa8556253fadc.png?image=q_auto,f_webp,w_auto&v=1692943905742" />
        </LogoContainer>
      </Body>
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1080px;
  margin: 0px auto;
`
const LogoContainer = styled.div`
  margin: 56px 0px 46px;
`
const Logo = styled.img`
  display: block;
  max-height: 224px;
  margin: 0px auto;
`
