// import { useRouter } from "next/router";

import { Box } from 'gestalt'
import PostConent from './_components/post-content'

export default function PostDescription({
  params,
}: {
  params: { slug: string }
}) {
  // const router = useRouter();
  // console.log(router.query.slug);
  console.log(params.slug)
  return <PostConent title={params.slug.replaceAll('-', ' ')} />
    // <div style={{ height: '100vh', marginTop: '120px', paddingTop:'200px', }}>
    //   <h1 style={{ zIndex: 999 }}>{params.slug}</h1>
    // </div>
  
}
