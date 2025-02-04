import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import { Provider } from '@repo/panda-css/app/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Turborepo',
    description: 'Generated by create turbo'
}

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <html lang="ja">
            <body className={inter.className}>
                <Provider>{children}</Provider>
            </body>
        </html>
    )
}

export default RootLayout
