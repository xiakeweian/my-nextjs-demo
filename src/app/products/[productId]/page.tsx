/*
 * @Description: 
 * @Author: wuyanxia
 * @LastEditTime: 2025-06-09 22:22:36
 * @Date: 2025-06-09 22:13:01
 * @LastEditors: wuyanxia
 */
export default async function ProductDetails({
  params
}: {
  params: Promise<{productId: string}>
}) {
  const productId = (await params).productId;
  console.log('Product ID:', productId);
  return <div>Product Detail {productId}</div>;
}