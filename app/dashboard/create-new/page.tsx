import SelectTopic from "./(component)/selectTopic"

function page() {
  return (
    <div className="p-10">
       <div className="text-purple-700 text-4xl font-bold  flex justify-center">
         Create New
       </div>
       <div>
         <SelectTopic/>
       </div>
    </div>
  )
}

export default page
