import React from 'react'
import InputBox from './InputBox'
import Stories from './Stories'
import Posts from './Posts'


type Props = {}

function Feed({}: Props) {
  return (
    <div className='flex-grow pb-44 pt-6 mr-4 xl:mr-40
              overflow-y-visible scrollbar-hide'>
        <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
            {/* {"stories"} */}
            <Stories/>
            {/* {InputBox} */}
            <InputBox/>
            {/* {Posts} */}
            <Posts/>
        </div>
    </div>
  )
}

export default Feed