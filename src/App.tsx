import { useEffect, useState } from 'react';
import { auth, googleProvider } from './firebase';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import MainApp from './components/MainApp';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, setUser);
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <button
          onClick={() => signInWithPopup(auth, googleProvider)}
          className="bg-white text-black px-6 py-2 rounded-full"
        >
          continue with google
        </button>
      </div>
    );
  }

  return <MainApp />;
};

export default App;