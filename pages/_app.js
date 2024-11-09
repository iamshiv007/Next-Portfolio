import "@/styles/globals.css";
import "@/styles/animation.css";
import "@/styles/cssGrid.css";
import "@/styles/Home.module.css";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga4";

import { PortfolioProvider } from "@/contextApi/PortfolioContext";
import ThemeProvider from "@/context/themeContext";

// Initialize Google Analytics only if in production and the Measurement ID is provided
if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_MEASUREMENT_ID) {
    ReactGA.initialize(process.env.NEXT_PUBLIC_MEASUREMENT_ID);
} else if (!process.env.NEXT_PUBLIC_MEASUREMENT_ID) {
    console.warn("Google Analytics Measurement ID is missing");
}

export default function App({ Component, pageProps }) {
    return (
        <PortfolioProvider>
            <ThemeProvider>
                <Component {...pageProps} />
                <Analytics />
            </ThemeProvider>
        </PortfolioProvider>
    );
}
