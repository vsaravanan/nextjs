import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    console.log('Placing your order')
    router.push('/product')
  }

  return (
    <>
      <h1>Welcome Home</h1>
      <p>
        <Link href='/blog'>Blog</Link>
      </p>
      <p>
        <Link href='/product'>Products</Link>
      </p>
      <p>
        <Link href='/docs'>Docs</Link>
      </p>
      <p>
        <Link href='/docs/any'>any</Link>
      </p>
      <button onClick={handleClick}>Place Order</button>
    </>
  )
}
