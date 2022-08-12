
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
          <link rel="icon" href="/icon.JPG" />
        </Head>
        <div>
          <h1 className='text-6xl text-white heading-text font-bold'>Web dev,</h1>
          <h1 className='text-6xl text-white heading-text font-bold'>made simple.</h1>
          <p className='text-white text-2xl mt-10'>Blog of Brisbane-Based Developer Celine Blumer.</p>
          <p className='text-white text-2xl'>Come code with me!</p>
          <button className='buttonStyle'>About Me</button>
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