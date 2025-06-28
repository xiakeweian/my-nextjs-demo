/*
 * @Description: 
 * @Author: wuyanxia
 * @LastEditTime: 2025-06-10 10:26:55
 * @Date: 2025-06-09 16:43:23
 * @LastEditors: wuyanxia
 */
import Link from 'next/link';

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about">
          About Us
        </Link>
      </li>
      <li>
        <Link href="/blog/first">
          Blog first
        </Link>
      </li>
      <li>
        <Link href="/blog/second">
          Blog second
        </Link>
      </li>
      <li>
        <Link href="/dashboard" replace>
          dashboard
        </Link>
      </li>
      <li>
        <Link href={{
        pathname: '/products',
        query: { productId: '1' },
      }}>
          products
        </Link>
      </li>
    </ul>
  )
}

export default Home;