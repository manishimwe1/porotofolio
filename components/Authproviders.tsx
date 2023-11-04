 "use client"
import { getProviders, signIn } from "next-auth/react" 
import { useState, useEffect } from 'react'

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;

}
type Providers = Record<string, Provider>

const Authproviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null)

  useEffect(() => {
    const fecthProviders = async () => {
      const res = await getProviders()
      
      console.log(res)
      setProviders(res)
    }
    fecthProviders()
  },[])

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider,i) => (
          <button key={i}
            onClick={() => signIn()}
          >{provider.id}</button>
        ))}
      </div>
    )
  }
   
 }
 
 export default Authproviders