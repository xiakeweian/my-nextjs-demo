/*
 * @Description: 
 * @Author: wuyanxia
 * @LastEditTime: 2025-06-09 22:50:36
 * @Date: 2025-06-09 22:25:09
 * @LastEditors: wuyanxia
 */
import{ notFound } from 'next/navigation'
export default async function ProductReview({
  params
}: {
  params: Promise<{productId: string; reviewId: string}>
}) {
  
  const {productId, reviewId } = await params;
  if(parseInt(reviewId) > 1000) { notFound(); }
  console.log('Product ID:', productId);
  return <div>review {reviewId} about product {productId}</div>;
}