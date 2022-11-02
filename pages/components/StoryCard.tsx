import Image from 'next/image'
import React from 'react'

type Props = {
    name: string
    src: any
    profile: any
}

function StoryCard({name, src, profile}: Props) {
  return (
    <div className='relative transform ease-in hover:scale-105 overflow-x p-3 transition duration-200
        h-14 w-14  md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer'>
        <Image
            className='absolute z-40  opacity-0 lg:opacity-100
            rounded-full top-10 '
            src={profile}
            width={40}
            height={40}
            layout="fixed"
            objectFit="cover"
            priority={true}
        />

        <Image 
            src={src}
            className='object-cover filter brightness-75
            rounded-full lg:rounded-3xl'
            layout="fill"
            priority={true}
        />

        <p className='opacity-0 mx-auto lg:opacity-100 absolute top-40
        font-bold text-white'>{name}</p>


    </div>
  )
}

export default StoryCard