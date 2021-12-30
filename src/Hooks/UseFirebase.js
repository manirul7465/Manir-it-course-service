import { useState,useEffect } from "react";
import {
  getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged,
  signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile,getIdToken
} from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";

// initialize firebase app
initializeFirebase();
const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin,setAdmin]=useState(false);
  const [token,setToken]=useState('');
  
  const googleProvider = new GoogleAuthProvider();
  const registerUser = ( email, password,name, navigate, location) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = { email, displayName: name };
        setUser(newUser);
       
        //  save user to the database
         saveUser(email,name,'POST')

        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {

        }).catch((error) => {

        });
        const destination = location?.state?.from || '/';
        navigate(destination)
        

      })
      .catch((error) => {

        setAuthError(error.message);

      })
      .finally(() => setIsLoading(false));

  }

  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        navigate(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));

  }

  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const destination = location?.state?.from || '/';
        navigate(destination);
        const user = result.user;
        saveUser(user.email,user.displayName,'PUT')
        setAuthError('');


      }).catch((error) => {
        setAuthError(error.message);
      }).finally(() => setIsLoading(false));
  }


  //  observe user state.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken=>{
          setToken(idToken)
        })
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth])
   
useEffect(()=>{
  fetch(`https://pure-escarpment-40758.herokuapp.com/users/${user.email}`)
  .then(res=>res.json())
  .then(data=>setAdmin(data.admin))
},[user.email])

  const logout = () => {
    setIsLoading(true);
    signOut(auth).then(() => {

    }).catch((error) => {

    })
      .finally(() => setIsLoading(false));
  }

    const saveUser=(email,displayName,method)=>{
     const user={email,displayName};
     fetch('https://pure-escarpment-40758.herokuapp.com/users',{
       method:method,
       headers:{
         
         'content-type':'application/json'
       },
       body:JSON.stringify(user)
     })
     .then()
    }

  return {
    user,
    authError,
    admin,
    token,
    isLoading,
    registerUser,
    signInWithGoogle,
    loginUser,
    logout,

  }
}
export default useFirebase;