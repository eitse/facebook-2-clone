import Head from 'next/head'
import { getSession } from 'next-auth/react'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import { db } from './components/firebase'




interface Props{
  session: any,
  posts: any
}

const Home = ({session, posts}:Props) => {
  if (!session) return <Login/>
  else return (
    <div>
      <Head>
        <title>EitseFb Clone</title>
        <link rel="icon" href="/images/fb_banner.jpg" />
      </Head>
     <Header/>
     <main className='flex bg-[#f7f8fa]  '>
      <Sidebar/>
      <Feed/>
      <Widgets/>
     </main>

    </div>
  )
}

export default Home

export const getServerSideProps = async (context:any) =>{
  //Get the User session
  const session = await getSession(context)

  //Ensure Post Display onReload using ServerSide Rendering
  const posts = await db.collection("posts").orderBy("timestamp","desc").get()

  const docs = posts.docs.map(post =>({
    id: post.id,
    ...post.data(),
    //dont fetch timestamp yet
    timestamp: null
  }))
 
  return {
    props: {
      session,
      posts: docs
    }
  }

}

