import{ useState } from 'react'

export function Grettings() {

    const [grettings, setGrettings] = useState('mogens')
    console.log(grettings)

    return(
        <>
  <input onChange={(event)=> setGrettings(event.target.value)} type="text" />
  <p>{grettings}</p>

</> 
    )
}

//opgave 2