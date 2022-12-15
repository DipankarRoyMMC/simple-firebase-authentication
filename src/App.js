import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error('error', error);
      })
  }

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      })
  }


  return (
    <div className="App">
      <h1>Simple Firebase Authentication.</h1>
      {/* conditional rendering  */}
      {user.email ? <button onClick={handleSingOut}>Sing Out</button> :
        <button onClick={handleSignInWithGoogle}>Sign In with Google</button>

      }

      <h2>Name : {user.displayName}</h2>
      <p>User Email address: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
