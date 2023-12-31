import './globals.css';
import { Inter } from 'next/font/google';
import DetailLink from './list/DetailLink';
import Link from 'next/link';
import LoginBtn from './LoginBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LogoutBtn from './\bLogoutBtn';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <DetailLink />
            <Link href="/list">글 목록</Link>
            <Link href="/write">글 작성</Link>
            <>
              {session && `${session.user.name}님 반갑습니다.`}
            </>
            {session ? <LogoutBtn /> : <LoginBtn /> }
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          footer입니다. footer입니다. footer입니다.
        </footer>
      </body>
      
    </html>
  )
}
