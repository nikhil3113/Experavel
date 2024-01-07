import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Travel from "./pages/Travel"
import AddComment from "./pages/AddComment"
import AddPost from "./pages/AddPost"
const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Travel />} />
          <Route path="/comment/:id" element={<AddComment />} />
          <Route path="/add" element={<AddPost />} />
      </Routes>
    </>
  )
}

export default App