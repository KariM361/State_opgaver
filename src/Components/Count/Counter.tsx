import {useState } from 'react'
import style from './counter.module.scss'


export function Counter() {
    const [count, setCount] = useState(0)
       
        console.log('Count:', count)

        return (
            <>
            <button className={style.clickButton} onClick= {() => setCount(count + 1)}>Click</button>
            <p>Du har klikket på knappen x antal gange: {count}</p>
            </>
        )
}