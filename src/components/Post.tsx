//props: { author: "" , content: ""}
// criaçao de componentes 

import { format, formatDistanceToNow } from 'date-fns'
import  ptBR  from 'date-fns/locale/pt-BR'
import { FormEvent, ChangeEvent, useState, InvalidEvent } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
} 

interface Content {  
  type: 'paragraph' | 'link'
  content: string;
}

interface PostProps { 
  author: Author;
  publishedAt: Date;
  content: Content[];
}


export function Post({ author, publishedAt, content}: PostProps){   
  
  const [comments, setComments] = useState([ 
   'Parabéns pelo post, ficou muito bom'
  ])

                     
  const [newCommentText, setNewCommentText] = useState('')


  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR
  })


  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true, 
  })

 
  function handleCreateNewComment(event: FormEvent) { 
    event.preventDefault(); 

    setComments([...comments, newCommentText ]); //add um novo comentario
    setNewCommentText('');
  }

  
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')// pra mensagem de validaçao
    setNewCommentText(event.target.value)    
  }


  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('essa campo ´e obrigatorio!!!!') 
  }

                       
  function deleteComment(commentToDelete: string) {   
    const commentsWithoutDeletedOne = comments.filter(commentList => {
      return commentList != commentToDelete
    })

    setComments( commentsWithoutDeletedOne ) 
  }

  return (
    <article className={styles.Post}> 
      <header className={styles.header}>

        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong> 
            <span>{author.role}</span> 
          </div>
        </div> 

        {/* hora e dia*/} 
        <time title ={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => { 
          if(line.type == 'paragraph') {
              return <p key={line.content}>{line.content}</p>;
          } else if (line.type == 'link') {
              return <p key={line.content}><a href="">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={ handleCreateNewComment } className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
           name='imput'
           placeholder='Deixe um comentario'
           value={newCommentText} 
           onChange={handleNewCommentChange}
           onInvalid={handleNewCommentInvalid} 
           required={true}
        />

        <footer>
          <button type='submit' disabled={newCommentText.length == 0} >Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>       
        {comments.map(comment => {  
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment} 
              />
            )
        })}                 
      </div>
    </article>
  )
}