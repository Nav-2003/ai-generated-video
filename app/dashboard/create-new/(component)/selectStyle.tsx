"use client"

import Image from "next/image"
import { useState } from "react"

type T={
    onUserSelect:(fieldName:string,fieldValue:string)=>void;
}
function SelectStyle({onUserSelect}:T) {
const [image,setimage]=useState('');
const styleOptions=[
    {
        name:"coolMan",
        image:"/img-1.png"
    },
    {
        name:"bhootiya",
        image:"/img-2.png"
    },
    {
        name:"khandhar",
        image:"/img-3.png"
    },
    {
        name:"jaanu",
        image:"/img-4.png"
    },
    {
        name:"raja-ji",
        image:"/img-5.png"
    }
]
  return (
    <div >
         <h1 className="font-bold text-2xl text-purple-700 mt-10">Style</h1> 
         <p className="text-gray-500">Select your video style</p>
         <div className="grid grid-cols-5 gap-3 ">
            {
              styleOptions.map((item,index)=>(
                <div key={index}><Image key={index} src={item.image} width={200} height={200} alt={item.name} 
                className="rounded-xl hover:scale-104 transition duration-300 cursor-pointer "
                onClick={()=>{setimage(item.name)
                    onUserSelect('image',item.name);
                }}
                /> </div>
              ))
            }
         </div>
    </div>
  )
}

export default SelectStyle
