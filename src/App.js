import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();

  const handleSignInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      })

  }

  return (
    <div className="App">
      <h1>Simple Firebase Authentication.</h1>
      <button onClick={handleSignInGoogle}>Sign in Google</button>
    </div>
  );
}

export default App;
