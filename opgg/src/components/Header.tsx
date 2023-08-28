"use client"

import { Color } from "@/constants/colors"
import { OptionRouter, NavigateRouter } from "@/constants/router"
import styled, { css } from "styled-components"
import { usePathname } from "../../node_modules/next/navigation"

export const Header = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <Container>
      <OptionBar>
        <LogoContainer>
          <img
            src="https://s-lol-web.op.gg/images/icon/opgglogo.svg?v=1692712288005"
            alt="OP.GG"
            width={65}
            height={16}
          />
        </LogoContainer>
        <OptionNavigator>
          <UlStyle>
            {Object.entries(OptionRouter).map(
              (
                [key, value]: [
                  key: string,
                  value: {
                    name: string
                    isNew: boolean
                    imgUrl: string
                    url?: string
                  }
                ],
                idx: number
              ) => {
                return (
                  <li style={{ listStyle: "none" }}>
                    <OptionItem key={key} href={value.url} selected={idx === 0}>
                      <img
                        src={value.imgUrl}
                        style={{ width: "24px", height: "24px" }}
                      />
                      {value.isNew && <NewIcon>N</NewIcon>}
                      <span>{value.name}</span>
                    </OptionItem>
                  </li>
                )
              }
            )}
          </UlStyle>
        </OptionNavigator>
        <MenuContainer>
          <MenuIcon url="https://s-lol-web.op.gg/images/icon/feedback.svg" />
          <MenuIcon url="https://s-lol-web.op.gg/images/icon/icon-darkmode.svg" />
          <div style={{ display: "flex", alignItems: "center" }}>
            <MenuIcon
              url="https://s-lol-web.op.gg/images/icon/icon-world-light-blue.svg?v=1692943905742"
              style={{ cursor: "default" }}
            />
            <DropdownButton>한국어</DropdownButton>
          </div>
          <LoginButton>로그인</LoginButton>
        </MenuContainer>
      </OptionBar>
      <NavigationBar>
        <Navigation>
          <UlStyle>
            {Object.entries(NavigateRouter).map(
              ([key, value]: [
                key: string,
                value: { name: string; route: string }
              ]) => {
                return (
                  <ListStyle key={key}>
                    <a href={value.route}>
                      <NaviateItem isCurrent={value.route === pathname}>
                        {value.name}
                      </NaviateItem>
                    </a>
                  </ListStyle>
                )
              }
            )}
          </UlStyle>
          <PatchnoteButton>
            <Icon />
            <div style={{ fontWeight: 700, color: "#FEEC9C" }}>13.17</div>
            패치노트 보기
          </PatchnoteButton>
        </Navigation>
      </NavigationBar>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1080px;
  width: 100%;
  height: 89px;

  background-color: ${Color.main500};
`
const OptionBar = styled.div`
  display: flex;
  width: 100%;
  height: 40px;

  background-color: ${Color.main100};
`

const NavigationBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  border-bottom: 1px solid ${Color.main400};
`

const LogoContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98px;
  height: 40px;

  background-color: ${Color.main500};
`

const OptionNavigator = styled.nav`
  flex: 1;
  font-size: 12px;
`
const OptionItem = styled.a<{ selected: boolean }>`
  ${({ selected }) => {
    if (selected) {
      return css`
        height: 40px;
        padding: 0 12px 0 0;
        background-color: ${Color.main500};
      `
    } else {
      return css`
        height: 32px;
        padding: 0 8px;
        margin: 4px;
        color: #c3cbd1;
      `
    }
  }}

  display: flex;
  align-items: center;
  gap: 8px;
`
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`

const MenuIcon = styled.button<{ url: string }>`
  width: 24px;
  height: 24px;

  border: none;
  outline: none;
  background: url(${({ url }) => url});
  cursor: pointer;

  & + &,
  & + div {
    margin-left: 8px;
  }
`
const LoginButton = styled.a`
  border-radius: 4px;
  padding: 4px 16px;
  margin: 0 16px;

  line-height: 18px;
  font-size: 12px;
  background-color: ${Color.main500};
  white-space: nowrap;
`
const DropdownButton = styled.button`
  position: relative;
  border: none;
  padding: 0 23px 0 8px;

  color: #c3cbd1;
  font-size: 12px;
  background: none;

  &::after {
    position: absolute;
    content: "";
    top: 50%;
    right: 5px;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    margin-top: -2.5px;
    border-top-color: #c3cbd1;
  }
`
const NewIcon = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  border-radius: 50%;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  background-color: #ffb900;
  color: #28344e;
`
const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1080px;
`
const NaviateItem = styled.div<{ isCurrent: boolean }>`
  display: flex;
  align-items: center;

  padding: 13px 0 10px;
  border-bottom: ${({ isCurrent }) => (isCurrent ? "3px solid #fff" : "none")};
  color: ${({ isCurrent }) => (isCurrent ? "#fff" : "#B3CDFF")};
  line-height: 22px;
  font-size: 15px;
`
const UlStyle = styled.ul`
  display: flex;
  height: 100%;
`
const ListStyle = styled.li`
  list-style: none;
  & + & {
    margin-left: 24px;
  }
`
const PatchnoteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 32px;

  border: none;
  border-radius: 16px;
  padding: 4px 12px 4px 8px;

  font-size: 12px;
  line-height: 16px;
  background-color: ${Color.main400};

  cursor: pointer;

  &:hover {
    & > span {
      background: url("https://s-lol-web.op.gg/images/icon/icon-down-small-white.svg");
      transform: rotate(-90deg);
      background-repeat: no-repeat;
      background-size: contain;
    }
    background-color: #2f5ec0;
  }
`
const Icon = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("https://s-lol-web.op.gg/assets/images/buttons/icon-navi-lol@2x.png");
  background-size: contain;
`
