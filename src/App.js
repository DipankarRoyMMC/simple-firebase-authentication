import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});

  //  sign in with google 
  const googleProvider = new GoogleAuthProvider();
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error('error', error);
      })
  }
  // sign out 
  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      })
  }

  // sing in with github 
  const githubProdvider = new GithubAuthProvider();

  const handleSiginInWithGithub = () => {
    signInWithPopup(auth, githubProdvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      })

  }

  return (
    <div className="App">
      <h1>Simple Firebase Authentication.</h1>
      {/* conditional rendering  */}
      {user.uid ? <button onClick={handleSingOut}>Sign Out</button> :
        <>
          <button onClick={handleSignInWithGoogle}>Sign In with Google</button>
          <button onClick={handleSiginInWithGithub}>Sign in with Github</button>
        </>
      }

      <h2>Name : {user.displayName}</h2>
      <p>User Email address: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
