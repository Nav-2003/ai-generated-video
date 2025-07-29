"use client"

import SelectStyle from "./(component)/selectStyle";
import SelectTopic from "./(component)/selectTopic";
import SelectDuration from "./(component)/SelectDuration";

function page() {

 function onHandleInputChange(fieldName:string,fieldValue:string){
    console.log(fieldName,fieldValue);
 }
  return (
    <div >
       <div className="text-purple-700 text-4xl font-bold  flex justify-center">
         Create New
       </div>
       <div>
        <div  className="shadow-md p-10 px-10 rounded-xl bg-white space-y-4">
         <SelectTopic onUserSelect={onHandleInputChange}/>
         <SelectStyle onUserSelect={onHandleInputChange}/>
         <SelectDuration/>
         </div>
       </div>
    </div>
  )
}

export default page
