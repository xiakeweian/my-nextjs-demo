/*
 * @Description: 
 * @Author: wuyanxia
 * @LastEditTime: 2025-06-09 23:09:38
 * @Date: 2025-06-09 22:51:29
 * @LastEditors: wuyanxia
 */
"use client";
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const pathnameArray = pathname.split('/');
  console.log(pathname, 'pathname')
  return <div>Review {pathnameArray[4]} Not Found for product {pathnameArray[2]}</div>
}