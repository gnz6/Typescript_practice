import { useState } from "react"

// Las interfaces no ocupan espacio de codigo js (tambien puedo definirlas en otro archivo) 
interface User{
    uid: string,
    name: string,
}

export const User = () => {

// Para ponerlas como tipado se le agrega al lado del useState(tiene que respetar TODAS las propiedades)
    const [user, setUser] = useState<User>()

    const tempUser : User = {
        uid:"456",
        name:"Ricardo Pereira"
    }


    const login = ()=>{
        setUser({
            uid: "123",
            name:"Gonzalo Pirovano"
        })
    }

  return (
    <div className="mt-5">

        <h3>User:</h3>

        <button className="btn btn-outline-primary"
        onClick={login}
        >
            Login 
       </button>

       {
        (!user)

        ?<pre className="text-white">No User</pre>
        :<pre className="text-white">{JSON.stringify(user)}</pre>
       }

    </div>
  )
}
