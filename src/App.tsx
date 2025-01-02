import { useEffect, useState } from 'react';
import MainApp from './components/MainApp';

declare global {
  interface Window {
    google: any;
  }
}

const App = () => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: '686063210353-nd6vvl07equsdmos1g3s81vfsq417l4f.apps.googleusercontent.com',
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
    setUser(response.credential);
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

  return <MainApp onSignOut={handleSignOut} />;
};

export default App;