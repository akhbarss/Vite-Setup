import {
  RouterProvider,
  createBrowserRouter,
  Link,
} from "react-router-dom"
import "./App.css"

const Navbar = () => (
  <nav 
  style={{ 
    display: "flex",
    position: 'fixed',
    top: 0,
    width: "100%",
    height: "13vh",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem"
   }}
  >
    <Link to={"/"}>Dashboard</Link>
    <Link to={"/about"}>About</Link>
  </nav>
)

const App = () => {
  return (
    <RouterProvider router={createBrowserRouter([
      {
        path: "/",
        Component: () => (
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }}>
            <Navbar />
            <h1>DASHBOARD</h1>
          </div>
        )
      },
      {
        path: "/about",
        Component: () => (
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }}>
            <Navbar />
            <h1>ABOUT</h1>
          </div>
        )
      },
    ])} />
  )
}

export default App