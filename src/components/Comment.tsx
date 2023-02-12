import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void; 
}
                                    
export function Comment({ content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content) 
  }  

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }
 
  return (
    <div className={styles.comment}>
        <Avatar 
          hasBorder={false} 
          src="https://github.com/kayqueew.png"
        /> 

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Kayque Roger</strong>
                <time title ='11 de maio as 8h' dateTime='2022-07-1 '>Cerca de 1h atrás</time>
              </div>

              <button onClick={handleDeleteComment} title='Deletar comentario'>
                <Trash size={24}/>
              </button>
            </header>

            <p>{content}</p> {/* comentarios */}
          </div> 

          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp/>
              Curtir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
    </div>
  )  
}