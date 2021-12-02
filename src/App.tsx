import { useState } from "react"
import "./App.css"
import { AuthButtons } from "./firebase/AuthButtons"
import React from "react"
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth"
import { firebaseApp } from "./firebase/firebaseApp"

export const LoginContext = React.createContext<{ user: User | null }>({
  user: null,
})

const auth = getAuth(firebaseApp)

function App() {
  const [user, setUser] = useState(auth.currentUser)

  onAuthStateChanged(auth, user => setUser(user))

  return (
    <div className="App">
      <main className="App-header">
        <LoginContext.Provider value={{ user }}>
          {user ? <LogoutButton /> : <AuthButtons />}
        </LoginContext.Provider>
      </main>
    </div>
  )
}

function LogoutButton() {
  return (
    <div>
      <button onClick={() => signOut(auth)}>signout</button>
    </div>
  )
}

export default App
