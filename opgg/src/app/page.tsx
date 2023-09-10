"use client"

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Color } from "@/constants/colors"
import styled from "styled-components"

const Home = () => {
  return (
    <Container>
      <Header />
      <Body>
        <LogoContainer>
          <Logo src="https://meta-static.op.gg/logo/image/fc9a4aeddcf438c0b4faa8556253fadc.png?image=q_auto,f_webp,w_auto&v=1692943905742" />
        </LogoContainer>
        <SearchContainer>
          <SearchBar>
            <RegionSelectorContainer>
              <Label>Region</Label>
              <RegionSelectorButton>
                <RegionText>Korea</RegionText>
              </RegionSelectorButton>
            </RegionSelectorContainer>
            <PlayerSearchContainer>
              <Label>Search</Label>
              <PlayerSearchInput placeholder="소환사명, 소환사명, ..." />
            </PlayerSearchContainer>
            <GGButton />
          </SearchBar>
        </SearchContainer>
      </Body>
      <Footer />
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
const SearchContainer = styled.div`
  width: 800px;
  margin: 0px auto;
`
const SearchBar = styled.form`
  display: flex;
  align-items: center;
  height: 60px;

  border-radius: 30px;

  background-color: ${Color.gray0};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
`
const RegionSelectorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 40px;

  padding-left: 32px;
  padding-right: 8px;
  margin-right: 8px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -7px;
    width: 1px;
    height: 14px;
    background: ${Color.gray200};
  }
`
const Label = styled.small`
  margin-bottom: 4px;

  color: ${Color.gray900};
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
`
const RegionSelectorButton = styled.button`
  position: relative;
  width: 192px;
  border: none;
  outline: none;
  text-align: left;
  background-color: inherit;

  &::after {
    position: absolute;
    content: "";
    top: 50%;
    right: 15px;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    margin-top: -2.5px;
    border-top-color: ${Color.gray400};
  }
`
const RegionText = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: ${Color.gray400};
`
const PlayerSearchContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
const PlayerSearchInput = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  outline: none;

  background-color: inherit;

  &::placeholder {
    color: ${Color.gray400};
  }
`
const GGButton = styled.button`
  width: 42px;
  height: 100%;

  border: 0;
  padding-right: 32px;
  padding-left: 12px;

  background-color: inherit;
  background-image: url("https://s-lol-web.op.gg/images/icon/icon-gg.svg");
  background-repeat: no-repeat;
  background-size: 42px;
  background-position: 12px center;

  box-sizing: content-box;
  cursor: pointer;
`
