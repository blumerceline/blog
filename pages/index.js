
import { PostCard, Categories, PostWidget } from '../components';
import Head from 'next/head'
import Image from 'next/image'
import {getPosts} from '../services'
import { Key } from 'react';


export default function Home({posts}){
    return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Celine Blumer | Brisbane Based Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          <h1 className='text-white'>Brisbane Based Developer, Building on the Web</h1>
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