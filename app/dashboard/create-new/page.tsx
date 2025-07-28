"use client"

import SelectTopic from "./(component)/selectTopic"

function page() {

 function onHandleInputChange(fieldName:string,fieldValue:string){
    console.log(fieldName,fieldValue);
 }
  return (
    <div className="p-10">
       <div className="text-purple-700 text-4xl font-bold  flex justify-center">
         Create New
       </div>
       <div>
         <SelectTopic onUserSelect={onHandleInputChange}/>
       </div>
    </div>
  )
}

export default page
