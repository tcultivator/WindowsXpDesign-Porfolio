"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loading_screen from "./loading-screen/loading-screen";
import HomeScreen from "../homeScreen/HomeScreen";

const Startup: React.FC = () => {

    const [session, setSession] = useState<string | null>(null);

    useEffect(() => {
        const storedSession = sessionStorage.getItem("session");

        if (storedSession === null) {
            setSession(storedSession);
        }
    }, []);

    return (
        <AnimatePresence mode="wait">
            {session ?

                (
                    <motion.div
                        key="home"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.9 } }}
                    >
                        <HomeScreen />
                    </motion.div>
                ) : (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    >
                        <Loading_screen />
                    </motion.div>
                )}
        </AnimatePresence>
    );
};

export default Startup;
