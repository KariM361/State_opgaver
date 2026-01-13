import{ useState } from 'react'
import style from './Grettings/Grettings.module.scss'

export function Grettings() {

    const [grettings, setGrettings] = useState('Send en besked til en ven.')
    console.log(grettings)

    return(
        <>
  <input className={style.styleInput} onChange={(event)=> setGrettings(event.target.value)} type="text" />
  <p>{grettings}</p>

</> 
    )
}

