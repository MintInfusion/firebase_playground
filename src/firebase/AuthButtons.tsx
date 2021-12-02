import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { GithubAuthProvider } from "@firebase/auth"
import { StyledFirebaseAuth, Props } from "react-firebaseui"
import logo from "./logo.svg"
import { firebaseApp } from "./firebaseApp"

export function AuthButtons() {
  const uiConfig: Props["uiConfig"] = {
    signInFlow: "popup",
    callbacks: {
      signInSuccessWithAuthResult() {
        return false
      },
    },
    signInOptions: [GithubAuthProvider.PROVIDER_ID],
  }

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth(firebaseApp)}
      />
    </div>
  )
}
