"use client";
import { useEffect, useState } from "react";

const LoadingBar = () => {
    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setVisible(false);
        }, 1510);
        return () => clearTimeout(loadingTimer);
    }, []);
    return (
        <div
            className={
                visible
                    ? `fixed inset-0 flex items-center justify-center bg-neutral-950 z-60 transition-opacity duration-500`
                    : "hidden"
            }
        >
            <div className="w-full max-w-md px-8">
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-light text-white tracking-wider mb-2">
                        Loading
                    </h2>
                    <p className="text-sm text-white/40 font-light">
                        Preparing your experience
                    </p>
                </div>

                <div className="relative h-2 bg-neutral-800 rounded-full overflow-hidden border border-red-600/30">
                    <div className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 animate-loading-bar shadow-lg shadow-red-600/50" />
                </div>

                <p className="text-xs text-white/30 text-center mt-6 font-light tracking-widest uppercase">
                    frasier.dev
                </p>
            </div>
        </div>
    );
};
export default LoadingBar;
