import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopMain from './Home/TopMain'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container'>
      <TopMain/>
    </div>
  )
}
