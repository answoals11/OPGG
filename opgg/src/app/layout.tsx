import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import StyledComponentsRegistry from "@/components/registry"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "롤 전적 검색은 OP.GG - 게임 전적, 챔피언 공략, 카운터 정보, 랭킹 등",
  description: "CloneCoding, Generated by Moon",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://s-lol-web.op.gg/favicon.ico"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}