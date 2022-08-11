
import { PostCard, Categories, PostWidget } from '../components';
import Head from 'next/head'
import Image from 'next/image'
import {getPosts} from '../services'
import { Key } from 'react';

const BgImage = dynamic(() => import("../public/bg.jpg"),{
  ssr: false
});

export default function Home({posts}){
    return (
    <div className="container mx-auto px-10 mb-8 ">
      <div className="bg-fixed">
        <Head>
          <title>Celine Blumer | Brisbane Based Web Developer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <BgImage/>
        
        <h1 className='text-lg text-black heading-text'>Web dev,</h1>
        <h1 className='text-lg text-black heading-text'>made simple!</h1>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [];

  return{
    props:{posts}
  }
}