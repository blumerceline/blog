
import { PostCard, Categories, PostWidget } from '../components';
import Head from 'next/head'
import {getPosts} from '../services'
import { Key } from 'react';

export default function Home({posts}){
    return (
    <div className="container mx-auto px-10 mb-8 ">
      <div className="bg-fixed">
        <Head>
          <title>Celine Blumer | Brisbane Based Web Developer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <h1 className='text-6xl text-white heading-text font-bold'>Web dev,</h1>
        <h1 className='text-6xl text-white heading-text font-bold'>made simple!</h1>
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