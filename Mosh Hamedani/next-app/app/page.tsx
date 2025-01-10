import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link> 
      {/* // using LINK will only redirect the page and request only the required files ( not complete) */}
      <ProductCard/>
    </main>
  )
}
