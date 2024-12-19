import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Greet from "../components/Greet";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

export default function Root() {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      (deferredPrompt as any).prompt();
      (deferredPrompt as any).userChoice.then(
        (choiceResult: { outcome: string }) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
          } else {
            console.log("User dismissed the A2HS prompt");
          }
          setDeferredPrompt(null);
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="container mx-auto px-1.5">
        <div className="text-xs sm:text-sm text-slate-700 flex justify-between items-center py-2.5">
          <Logo />
          <Greet />
          {deferredPrompt && (
            <button
              className="uppercase text-blue-600 font-bold"
              onClick={handleInstallClick}
            >
              Install App
            </button>
          )}
        </div>

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
