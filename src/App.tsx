import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';


import './global.css'
import styles from './App.module.css'



interface Posts {
  id: number;
  author: {
    avatarUrl: string;
    name:string;
    role: string;
  },
  content: {
    type: 'paragraph' | 'link';
    content: string
  }[],
  publishedAt: Date
}

const posts:Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/79871232?v=4',
      name: 'Alan Verissimo',
      role: 'web developer'
    },

    content: [ 
      {type: 'paragraph', content: 'E aí pessoaaal 👋' } ,

      {type: 'paragraph', content: 'acabei de subir mais um projeto no meu portifa. É um projeto que fiz no ignite.'},

      {type: 'link', content: 'https://github.com/alanverissimo'},  
    ],

    publishedAt: new Date('2023-01-09 20:00:'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/BugaiOF.png',
      name: 'BugaiOF',
      role: 'web developer'
    },

    content: [
      {type: 'paragraph', content: 'fala galera 👋' } ,

      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. É um projeto que fiz no ignite.'},

      {type: 'link', content: 'https://github.com/BugaiOF'},  
    ],

    publishedAt: new Date('2023-01-03 20:00:'),
  }
]


export function App() {
  return (
    <div>
      <Header/>

     <div className={styles.wrapper}>
      
        <Sidebar/> 
      
      <main>
        
       
        {posts.map(post => {  
          return (
           <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
           />
         )
        })}
      </main>
     </div> 
    </div>
  )
}


