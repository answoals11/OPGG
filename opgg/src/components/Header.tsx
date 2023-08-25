"use client"

import { Color } from "@/constants/colors"
import { OptionRouter } from "@/constants/optionRouter"
import styled, { css } from "styled-components"

export const Header = () => {
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
          <ul style={{ display: "flex", height: "40px", float: "left" }}>
            {Object.entries(OptionRouter).map(
              (
                [key, value]: [
                  key: string,
                  value: { name: string; imgUrl: string; url?: string }
                ],
                idx: number
              ) => {
                return (
                  <OptionItem href={key} selected={idx === 0}>
                    <img
                      src={value.imgUrl}
                      style={{ width: "24px", height: "24px" }}
                    />
                    <span>{value.name}</span>
                  </OptionItem>
                )
              }
            )}
          </ul>
        </OptionNavigator>
      </OptionBar>
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
`

const NavigationBar = styled.div``

const LogoContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98px;
  height: 40px;
`

const OptionNavigator = styled.nav`
  font-size: 12px;
`
const OptionItem = styled.a<{ selected: boolean }>`
  ${({ selected }) => {
    if (selected) {
      return css`
        height: 40px;
        padding: 0 12px 0 0;
      `
    } else {
      return css`
        height: 32px;
        padding: 0 8px;
        margin: 4px 2px;
      `
    }
  }}

  display: flex;
  align-items: center;
  gap: 8px;
`
