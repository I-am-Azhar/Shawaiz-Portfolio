import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="relative w-full py-16 px-4 overflow-hidden bg-white">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/AboutMeBG.svg"
          alt="About Me Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <h1 
          className="font-anton text-5xl md:text-6xl lg:text-7xl mb-6 text-center"
          style={{
            background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ABOUT ME
        </h1>

        {/* Description Paragraph */}
        <p className="text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto text-black/70">
          I'm a creative professional with 3+ years of experience leading graphic design and digital marketing campaigns. I specialize in creating performance-driven ads and visual identities for brands
        </p>

        {/* Gradient Containers with Stripes */}
        <div className="space-y-6 md:space-y-8">
          {/* First Row - 3+ and 25+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* First Stripe - Years of Experience */}
            <div 
              className="rounded-2xl p-6 md:p-8 lg:p-10 relative flex items-start gap-4 md:gap-6 animate-gradient shadow-xl"
              style={{
                background: "linear-gradient(135deg, #b471e5 0%, #efd7fa 12.5%, #f7dfff 25%, #fde5ff 37.5%, #ffffff 50%, #fde5ff 62.5%, #f7dfff 75%, #efd7fa 87.5%, #b471e5 100%)",
                backgroundSize: "400% 400%",
                backgroundPosition: "0% 50%",
                animation: "gradientShift 16s linear infinite",
              }}
            >
              {/* Number Box - 3+ */}
              <div 
                className="rounded-xl p-4 md:p-6 flex-shrink-0 shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
                  3+
                </h1>
              </div>

              {/* Content beside number */}
              <div className="flex-1 pt-2">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  Years of Experience
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• 2 years in freelancing</li>
                  <li>• 1 year of professional corporate</li>
                </ul>
              </div>
            </div>

            {/* Second Stripe - Happy Clients */}
            <div 
              className="rounded-2xl p-6 md:p-8 lg:p-10 relative flex items-start gap-4 md:gap-6 animate-gradient shadow-xl"
              style={{
                background: "linear-gradient(135deg, #b471e5 0%, #efd7fa 12.5%, #f7dfff 25%, #fde5ff 37.5%, #ffffff 50%, #fde5ff 62.5%, #f7dfff 75%, #efd7fa 87.5%, #b471e5 100%)",
                backgroundSize: "400% 400%",
                backgroundPosition: "0% 50%",
                animation: "gradientShift 16s linear infinite",
              }}
            >
              {/* Number Box - 25+ */}
              <div 
                className="rounded-xl p-4 md:p-6 flex-shrink-0 shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
                  25+
                </h1>
              </div>

              {/* Content beside number */}
              <div className="flex-1 pt-2">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  Happy Clients
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Local Business</li>
                  <li>• Mid level Business</li>
                  <li>• Celebrity Pages</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Row - 50+ Projects */}
          <div 
            className="rounded-2xl p-6 md:p-8 lg:p-10 animate-gradient shadow-xl"
            style={{
              background: "linear-gradient(135deg, #b471e5 0%, #efd7fa 12.5%, #f7dfff 25%, #fde5ff 37.5%, #ffffff 50%, #fde5ff 62.5%, #f7dfff 75%, #efd7fa 87.5%, #b471e5 100%)",
              backgroundSize: "400% 400%",
              backgroundPosition: "0% 50%",
              animation: "gradientShift 8s linear infinite",
            }}
          >
            <div className="relative flex items-start gap-4 md:gap-6">
              {/* Number Box - 50+ */}
              <div 
                className="rounded-xl p-4 md:p-6 flex-shrink-0 shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
                  50+
                </h1>
              </div>

              {/* Content beside number */}
              <div className="flex-1 pt-2">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  Projects
                </h2>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 text-gray-700 text-sm">
                  <li>• Social Media Campaings</li>
                  <li>• Website Designs</li>
                  <li>• Socail Media Branding</li>
                  <li>• Marketing Reels</li>
                  <li>• 30+ Reel Edition</li>
                  <li>• Page Management</li>
                  <li>• Flyers</li>
                  <li>• Banners</li>
                  <li>• logos</li>
                  <li>• Poster Design</li>
                  <li>• Landing Pages</li>
                  <li>• App Designs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

