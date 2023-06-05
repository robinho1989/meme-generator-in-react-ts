import styles from './input.module.css'

export const Input=({placeholder}:{placeholder:string})=>{
    return <input placeholder={placeholder} type="text" className={styles.input} />
}