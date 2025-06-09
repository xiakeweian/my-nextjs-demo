/*
 * @Description: 通配段路由 [...slug] 用于匹配任意数量的路径段
 * @Author: wuyanxia
 * @LastEditTime: 2025-06-09 22:43:09
 * @Date: 2025-06-09 22:34:41
 * @LastEditors: wuyanxia
 */

export default async function Docs({
  params
}: {
  params: Promise<{slug: string}>
}) {
  const { slug } = await params;
  if(slug?.length === 2) {
    return <h1>view docs for feature {slug[0]} and concept {slug[1]}</h1>
  }
  console.log('slug:', slug);
  return <div>docs home {slug}</div>;
}