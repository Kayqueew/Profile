
import { ImgHTMLAttributes } from 'react'; //todas as propriedades que uma tag img pode receber, entap nao precisa ficar passando o src e alt
import styles from './Avatar.module.css';


interface AvatarProps extends ImgHTMLAttributes <HTMLImageElement> {
  hasBorder?: boolean;
}
                                       
export function Avatar({hasBorder = true, ...props }: AvatarProps) { 
  return (          
    <img         
      className={hasBorder ? styles.avatarWithBorder : styles.Avatar} 
      {...props}
    />
  )
}  
