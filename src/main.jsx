import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AddCoffee from "./components/AddCoffee.jsx"
import UpdateCoffee from "./components/UpdateCoffee.jsx"
import SignIn from "./components/SignIn.jsx"
import SignUp from "./components/SignUp.jsx"
import AuthProvider from "./providers/AuthProvider.jsx"
import Users from "./components/Users.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () =>
      fetch("https://coffee-server-2hkhw5ry4-akbar7554.vercel.app/coffee"),
  },
  {
    path: "add-Coffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "update-Coffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-server-2hkhw5ry4-akbar7554.vercel.app/coffee/${params.id}`
      ),
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () =>
      fetch("https://coffee-server-2hkhw5ry4-akbar7554.vercel.app/user"),
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
