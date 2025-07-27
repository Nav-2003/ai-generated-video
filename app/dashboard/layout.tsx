import Header from "./(component)/header"
import Sidebar from "./(component)/sidebar"

function layout({children}:{children:React.ReactNode}) {
  return (
    <div> 
      <Header/> 
      <Sidebar/>
      {children}
    </div>
  )
}

export default layout
