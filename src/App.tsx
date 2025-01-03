import { useEffect, useState } from 'react';
import MainApp from './components/MainApp';

declare global {
  interface Window {
    google: any;
  }
}

interface GoogleUser {
  email: string;
  name: string;
  picture: string;
}

const App = () => {
  const [user, setUser] = useState<GoogleUser | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: 'client_id',
        callback: handleCredentialResponse
      });
      window.google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { 
          theme: "filled_black", 
          size: "large",
          text: "continue_with",
          shape: "pill"
        }
      );
    };
  }, []);

  const handleCredentialResponse = (response: any) => {
    // Decode the JWT token to get user info
    const decodedToken = JSON.parse(atob(response.credential.split('.')[1]));
    setUser({
      email: decodedToken.email,
      name: decodedToken.name,
      picture: decodedToken.picture
    });
  };

  const handleSignOut = () => {
    window.google.accounts.id.disableAutoSelect();
    setUser(null);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div id="signInDiv"></div>
      </div>
    );
  }

  return <MainApp onSignOut={handleSignOut} user={{ email: user.email }} />;
};

export default App;