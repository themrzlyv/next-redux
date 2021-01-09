import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addmylist } from '../store/actions/listAction'
import { fetchposts, fetchusers } from '../store/actions/postAction'

import styles from '../styles/Home.module.css'

export default function Home() {


  const dispatch = useDispatch()
  const {posts} = useSelector(state=>state.posts)
  const {users} = useSelector(state=>state.users)
  const {mylist} = useSelector(state => state)

  useEffect(()=> {
    dispatch(fetchposts())
  } , [])

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        mylist ? 
            <li>{mylist.length}</li>
          :
          ''
      }

          {
            posts ? posts.map(el => 
              <li>{el.title}</li>
            )
            :
            ''
          }

          <button onClick={() => dispatch(fetchusers())}>add users</button>
          {
            users ? users.map(item=> 
                <li key={item.id}>
                {item.name}
                <button onClick={() => dispatch(addmylist(item))}>addmylist</button>
                </li>
            )
            :
            ''
          }


    </div>
  )
}
