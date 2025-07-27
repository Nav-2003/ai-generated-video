"use client"
import { useUser } from '@clerk/nextjs'
import { useEffect } from 'react';
import { registerUser } from './actions/registerUser';

function Provider({children}:{children:React.ReactNode}) {
  const {user,isSignedIn,isLoaded}=useUser();

  useEffect(()=>{
      if(isSignedIn&&user){
        registerUser({
          name: user.fullName,
           email: user.primaryEmailAddress?.emailAddress || null,
           imageUrl: user.imageUrl,
        })
      }
  },[user,isSignedIn])

   return (
    <div>
       {children}
    </div>
  )
}

export default Provider
