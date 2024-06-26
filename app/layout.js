import './globals.css';
import { Inter } from 'next/font/google';
import DetailLink from './list/DetailLink';
import Link from 'next/link';
import LoginBtn from './LoginBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LogoutBtn from './LogoutBtn';
import {cookies} from 'next/headers';
import DarkMode from './DarkMode';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);

  let res = cookies().get('mode');
  console.log("res", res.value);

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={res != undefined &&  res.value === "dark" ? "dark-mode" : "light-mode"}>
          <nav className="navbar">
            <DetailLink />
            <Link href="/list">글 목록</Link>
            <Link href="/write">글 작성</Link>
            <>
              {session && `${session.user.name}님 반갑습니다.`}
            </>
            {session ? <LogoutBtn /> : <LoginBtn /> }
            <DarkMode/>
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
