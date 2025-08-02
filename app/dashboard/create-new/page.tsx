"use client"

import SelectStyle from "./(component)/selectStyle";
import SelectTopic from "./(component)/selectTopic";
import SelectDuration from "./(component)/SelectDuration";
import { useState } from "react";
import axios from "axios";

type T={
  topic:string,
  image:string,
  duration:string
}
function page() {
const [formData,setformData]=useState<T>({
 topic:"",
  image:"",
  duration:""
});
 function onHandleInputChange(fieldName:string,fieldValue:string){
    setformData(prev=>({
      ...prev,
      [fieldName]:fieldValue
    }))
 }
 async function GetVideoScript(){
  const prompt=`Write script to generate ${formData.duration} video on topic:${formData.topic} 
  along with AI image prompt in ${formData.image} for each scene and give me result 
  in json formate with imageprompt and contentText as field,No plain text`;
  let data={
    prompt:prompt
  }
  const result=await axios.post('/api/get-video-script',{
    prompt:prompt
  })
  console.log(result.data);
 }
  return (
    <div >
       <div className="text-purple-700 text-4xl font-bold  flex justify-center mt-5">
         Create New
       </div>
       <div>
        <div  className="shadow-md  px-10 rounded-xl bg-white space-y-4">
         <SelectTopic onUserSelect={onHandleInputChange}/>
         <SelectStyle onUserSelect={onHandleInputChange}/>
         <SelectDuration onUserSelect={onHandleInputChange}/>
          <button className="rounded-xl bg-purple-700 p-2 text-xl text-amber-50 w-full 
          cursor-pointer mb-10 hover:scale-103 transition duration-300" onClick={GetVideoScript}>create video</button>
         </div>
       </div>
    </div>
  )
}

export default page
