import React from 'react'
import StoryCard from './StoryCard'

type Props = {}

const stories = [
    {
        name: "Young Hit Eitse",
        src:"https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p"
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },

]

function Stories({}: Props) {
  return (
    <div className='flex justify-center space-x-3'>
        {stories.map( (story) => {
            return(
                <StoryCard key={story.src} name={story.name} src={story.src}
                profile ={story.profile}/>
    )
        })}
    </div>
  )
}

export default Stories