import React, { useEffect } from "react";
// import Header from './components/layout/Header'; // Ensure path matches your project structure
import Header from './Component/layout/header';
import Footer from './Component/layout/footer';
import { Providers } from "./Component/lib/providers"; // Custom providers
import "./index.css"; // Import global styles

const googleAnalyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

function App() {
  useEffect(() => {
    if (googleAnalyticsId) {
      const script1 = document.createElement("script");
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      script1.async = true;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', '${googleAnalyticsId}');
      `;
      document.head.appendChild(script2);
    }
  }, []);

  return (
    <div className="bg-gray text-gray-600 antialiased">
      <Providers>
        <Header />
        {/* <main className="flex min-h-screen w-full flex-col">{children}</main> */}
        <Footer />
      </Providers>
    </div>
  );
}

export default App;

{/* <Providers>
  <Header />
  <main className="flex min-h-screen w-full flex-col">
    This is where the main content will go
    <h1>Welcome to my Portfolio</h1>
    Add children or route components here
  </main>
  <Footer />
</Providers>; */}
