import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Inter } from 'next/font/google';
import Wrapper from '@/components/Wrapper';
import Link from 'next/link';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NFT Marketplace',
  description: 'swap your NFTs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Wrapper>
          <nav className={'p-6 flex  items-center justify-between  border-b-2'}>
            <h1 className={'py-3 px-3 font-bold text-3xl'}>NFT Marketplace</h1>
            <div className={'flex items-center justify-between'}>
              <div>
                <Link href={'/'} className={'p-3 mr-3 hover:text-blue-500'}>
                  Home
                </Link>
                <Link href={'/sell'} className={'p-3 mr-3 hover:text-blue-500'}>
                  Sell NFT
                </Link>
              </div>
              <Header />
            </div>
          </nav>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
