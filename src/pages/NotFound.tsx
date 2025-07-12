import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div className="space-y-6.5 p-6 ">
     <p className="text-5xl">404 not found</p>
     <Link to="/" className="px-2 py-1 bg-blue-400 rounded text-white" >Go to Home</Link>
    </div>
  )
}

export default NotFound
