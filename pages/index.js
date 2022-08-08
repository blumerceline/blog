
import { PostCard, Categories, PostWidget } from '../components';
import Head from 'next/head'
import Image from 'next/image'
import {getPosts} from '../services'
import { Key } from 'react';


export default function Home({posts}){
    return (
    <div className="container mx-auto px-10 mb-8 ">
      <div className="bg-fixed" style="background-image: url('../public/bg.jpg')">
        <Head>
          <title>Celine Blumer | Brisbane Based Web Developer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <h1 className='text-lg text-black heading-text'>Web dev is a journey.</h1>
        <h1 className='text-lg text-black heading-text'>Join me!</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='lg:sticky relative top-8'>
            <PostWidget/>
            <Categories />
          </div>
        </div>
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