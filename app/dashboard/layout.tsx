import Header from "./(component)/header"
import Sidebar from "./(component)/sidebar"

function layout({children}:{children:React.ReactNode}) {
  return (
    <div> 
      <Header/> 
      <div className="flex">
      <Sidebar/>
      <div>
      {children}
      </div>
      </div>
    </div>
  )
}

export default layout
