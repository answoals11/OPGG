export const OptionRouter = {
  leagueOfLegends: {
    name: "리그오브레전드",
    isNew: false,
    imgUrl:
      "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg?image=q_auto,f_webp,w_48&v=1692842706170",
  },
  Gigs: {
    name: "Gigs",
    isNew: true,
    imgUrl:
      "https://opgg-gnb.akamaized.net/static/images/icons/gigs.svg?image=q_auto,f_webp,w_48&v=1692842706170",
    url: "https://gigs.op.gg",
  },
  Desktop: {
    name: "데스크톱",
    isNew: false,
    imgUrl:
      "https://opgg-gnb.akamaized.net/static/images/icons/01-icon-00-logo-icon-opggsquare.svg?image=q_auto,f_webp,w_48&v=1692842706170",
    url: "https://op.gg/desktop/",
  },
  TFT: {
    name: "전략적 팀 전투",
    isNew: true,
    imgUrl:
      "https://opgg-gnb.akamaized.net/static/images/icons/img_navi_tft-whte.svg?image=q_auto,f_webp,w_48&v=1692842706170",
    url: "https://tft.op.gg",
  },
  Valorant: {
    name: "발로란트",
    isNew: false,
    imgUrl:
      "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-valorant-white.svg?image=q_auto,f_webp,w_48&v=1692842706170",
    url: "https://valorant.op.gg",
  },
  PUBG: {
    name: "배틀그라운드",
    isNew: false,
    imgUrl:
      "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-pubg-gray.svg?image=q_auto,f_webp,w_48&v=1692842706170",
    url: "https://pubg.op.gg",
  },
  OverWatch2: {
    name: "오버워치2",
    isNew: true,
    imgUrl:
      "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-overwatch-gray.svg?image=q_auto,f_webp,w_48&v=1692842706170",
    url: "https://overwatch.op.gg",
  },
  IternalReturn: {
    name: "이터널 리턴",
    isNew: false,
    imgUrl:
      "https://opgg-gnb.akamaized.net/static/images/icons/img_navi_bs.svg?image=q_auto,f_webp,w_48&v=1692842706170",
    url: "https://er.op.gg",
  },
  Esports: {
    name: "이스포츠",
    isNew: false,
    imgUrl:
      "https://opgg-gnb.akamaized.net/static/images/icons/img_navi_esports.svg?image=q_auto,f_webp,w_48&v=1692842706170",
    url: "https://esports.op.gg",
  },
  TalkGG: {
    name: "톡피지지",
    isNew: false,
    imgUrl:
      "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-talk-white.svg?image=q_auto,f_webp,w_48&v=1692842706170",
    url: "https://talk.op.gg",
  },
}

export const NavigateRouter = {
  Home: {
    name: "홈",
    route: "/",
  },
  Champions: {
    name: "챔피언 분석",
    route: "/champions",
  },
  Arena: {
    name: "아레나",
    route: "/modes/arena",
  },
  GameMode: {
    name: "게임모드",
    route: "/modes/aram",
  },
  Statistics: {
    name: "통계",
    route: "/statistics/champions",
  },
  Ranking: {
    name: "랭킹",
    route: "/leaderboards/tier",
  },
  Spectate: {
    name: "프로관전",
    route: "/spectate/live/pro-gamer",
  },
  MultiSearch: {
    name: "멀티서치",
    route: "/multisearch",
  },
  Community: {
    name: "커뮤니티",
    route: "https://talk.op.gg/s/lol/all?sort=popular",
  },
  Lecture: {
    name: "강의",
    route:
      "https://gigs.op.gg/products?game=LOL&?utm_source=opgg&utm_medium=lnb&utm_campaign=lol",
  },
}
