
import { PostCard, Categories, PostWidget } from '../components';
import Head from 'next/head'
import {getPosts} from '../services'
import { Key } from 'react';
import {girlOneImg} from '../public/girl.JPG';
import {dudeImg} from '../public/dude.JPG';
import {girlTwoImg} from '../public/gal3.JPG';
import Image from 'next/image';

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

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className='col-span-1 lg:col-span-6'>
        <Image src={girlOneImg} width="250px" height="250px"/>
        </div>
        <div className='col-span-1 lg:col-span-6'>
          <h1>Read articles</h1>
          <p>I post about all things web dev, digitalisation and beyond.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className='col-span-1 lg:col-span-6'>
          <h1>Follow my progress</h1>
          <p>I write coding logs, to record what I'm currently learning.</p>
        </div>
        <div className='col-span-1 lg:col-span-6'>
        <Image src={dudeImg} width="250px" height="250px"/>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className='col-span-1 lg:col-span-6'>
        <Image src={girlTwoImg} width="250px" height="250px"/>
        </div>
        <div className='col-span-1 lg:col-span-6'>
          <h1>View projects</h1>
          <p>Feel free to have a look at some things I've worked on.</p>
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