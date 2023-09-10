import { Color } from "@/constants/colors"
import { FooterRouter } from "@/constants/router"
import styled from "styled-components"

type Value = {
  title: string
  router: { text: string; route: string; newTap: boolean }[]
}

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <NavigatorSection>
          <strong style={{ flexBasis: "170px" }}>
            <a href="/">
              <img
                src="https://s-lol-web.op.gg/images/icon/icon-opgglogo-gray.svg?v=1693375322808"
                width={96}
                height={24}
              />
            </a>
          </strong>
          <Navigator>
            <Title>OP.GG</Title>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {Object.entries(FooterRouter).map(
                ([key, value]: [key: string, value: Value]) => {
                  return value.router.map(({ text, route, newTap }) => {
                    return (
                      <NavigateItem
                        href={route}
                        target={newTap ? "_blank" : ""}
                      >
                        {text}
                      </NavigateItem>
                    )
                  })
                }
              )}
            </nav>
          </Navigator>
        </NavigatorSection>
        <SNSSection>
          <ETC>
            © 2012-2023 OP.GG. OP.GG isn’t endorsed by Riot Games and doesn’t
            reflect the views or opinions of Riot Games or anyone officially
            involved in producing or managing League of Legends. League of
            Legends and Riot Games are trademarks or registered trademarks of
            Riot Games, Inc. League of Legends © Riot Games, Inc.
          </ETC>
          <SNSNavigator>
            <a target="_blank" href="https://www.instagram.com/opgg_official">
              <img
                src="https://s-lol-web.op.gg/images/icon/icon-logo-instagram.svg?v=1693294894548"
                width={24}
                height={24}
              />
            </a>
            <a target="_blank" href="https://www.youtube.com/@opgg_official">
              <img
                src="https://s-lol-web.op.gg/images/icon/icon-logo-youtube.svg?v=1693294894548"
                width={24}
                height={24}
              />
            </a>
            <a target="_blank" href="https://twitter.com/opgg_official">
              <img
                src="https://s-lol-web.op.gg/images/icon/icon-logo-x.svg?v=1693294894548"
                width={24}
                height={24}
              />
            </a>
            <a target="_blank" href="https://www.facebook.com/opgg.official/">
              <img
                src="https://s-lol-web.op.gg/images/icon/icon-logo-facebook.svg?v=1693294894548"
                width={24}
                height={24}
              />
            </a>
          </SNSNavigator>
        </SNSSection>
      </Wrapper>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 1080px;

  padding: 48px 0;
  margin-top: 48px;
  background: transparent;
`
const Wrapper = styled.div`
  width: 1080px;
  margin: 0 auto;
`
const NavigatorSection = styled.section`
  display: flex;
`
const SNSSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  height: 54px;

  border-top: 1px solid;
  border-color: ${Color.gray250};
  padding-top: 24px;
  margin-top: 24px;
`
const SNSNavigator = styled.nav`
  display: flex;

  a + a {
    margin-left: 12px;
  }
  a > img {
    vertical-align: bottom;
  }
`
const ETC = styled.small`
  font-size: 11px;
  color: ${Color.gray400};
`
const Navigator = styled.div`
  flex-basis: 170px;
  margin-left: 12px;
`
const Title = styled.strong`
  display: block;
  padding-bottom: 16px;
  font-size: 14px;
  font-weight: bold;
`
const NavigateItem = styled.a`
  height: 20px;
  color: ${Color.gray500};
  font-size: 14px;

  & + & {
    margin-top: 4px;
  }
`
