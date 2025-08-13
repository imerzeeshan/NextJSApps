import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata = {
  title: "ShanTech",
  description:
    "This is a website create by Zeeshan using NextJS React Framework",
  keywords: ["imerzeeshan", "iamerzeeshan", "Zeeshan", "shan"],
  icons: {
    icon: "/globe.svg",
  },
  metadataBase: new URL("https://shaantech.com"),
  openGraph: {
    type: "website",
    title: "Your Page Title",
    description: "A concise description for Open Graph.",
    images: [
      {
        url: "/next.svg", // relative path
        width: 1200,
        height: 630,
        alt: "Descriptive alt text",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Page Title",
    description: "A concise description for Twitter cards.",
    images: ["https://imerzeeshan.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navigation />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
