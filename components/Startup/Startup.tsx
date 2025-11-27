"use client"
import Loading_screen from "./loading-screen/loading-screen";
import { useState, useEffect } from "react";
import Signin from "./signin/signin";
import { AnimatePresence, motion } from "framer-motion";
export default function Startup() {
    const [loadingScreen, setLoadingScreen] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoadingScreen(false)
        }, 4000);
    }, [])
    return (
        <AnimatePresence mode="wait">
            {loadingScreen ? (
                <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                >
                    <Loading_screen />
                </motion.div>
            ) : (
                <motion.div
                    key="signin"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.9 } }}
                >
                    <Signin />
                </motion.div>
            )}
        </AnimatePresence>

    );
}
