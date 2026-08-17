import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kucho-pro-navi.com"),
  twitter: {
    card: "summary_large_image",
  },
  title: {
    default: "空調プロナビ｜業務用エアコン比較・業者ランキング",
    template: "%s | 空調プロナビ",
  },
  description:
    "業務用エアコンの設置・交換・修理業者を徹底比較。飲食店・オフィス・工場など業種別おすすめ業者ランキングと費用相場を解説。",
  keywords: ["業務用エアコン", "空調工事", "業者比較", "ランキング"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <div style={{ background: "rgba(0,0,0,0.04)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <p style={{ maxWidth: 1152, margin: "0 auto", padding: "4px 16px", fontSize: 11, color: "#6b7280" }}>本サイトはプロモーション(PR)を含みます。</p>
        </div>
{children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"空調プロナビ\",\"url\":\"https://kucho-pro-navi-deploy.pages.dev/\",\"logo\":\"https://kucho-pro-navi-deploy.pages.dev/favicon.ico\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"株式会社MediaX\",\"url\":\"https://mediax.biz\"},\"sameAs\":[\"https://kucho-pro-navi-deploy.pages.dev/about/\"]}" }}
        />
        </body>
    </html>
  );
}
