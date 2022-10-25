import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from '../../shared/services/firebase/firebase';

const handleSignIn = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
  .then((result)=>{
    console.log(result)
  }).catch((error)=> {
    console.log(error)
  });
}

const Home = () => {
    return (
      <button type="button" onClick={handleSignIn}>Login</button>
    );
}
  
export default Home