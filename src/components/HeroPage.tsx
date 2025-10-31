import Image from "next/image";

export default function HeroPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
        {/* Person Image - Positioned to overlap text with masking effect - Part of hero section */}
        <div 
          className="absolute top-[15%] left-[15%] right-[15%] bottom-[15%] md:inset-0 z-30 flex items-end justify-center"
          style={{
            clipPath: "inset(0% 0% 0% 0%)",
          }}
        >
          <Image
            src="/assets/Hero.svg"
            alt="Person"
            width={1920}
            height={1080}
            className="object-contain w-[70vw] h-[70vh] md:w-full md:h-full"
            priority
          />
        </div>

        {/* Main Container */}
        <div className="relative w-full max-w-7xl mx-auto z-20">
          {/* Main Heading with Horizontal Gradient - Mask 1 */}
          <div className="relative w-full flex justify-center items-center lg:-mt-32">
            <h1 
              className="font-anton text-[6rem] md:text-[14rem] lg:text-[18rem] leading-none font-bold text-center relative z-0"
              style={{
                background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SHAWAIZ
            </h1>
          </div>

          {/* Bottom Section with Icons and Labels */}
          <div className="relative w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-[-80px] md:mt-[-120px] lg:mt-[-150px] z-20 px-4">
            {/* Left Section - Digital Marketer */}
            <div className="flex flex-col items-start justify-end">
              {/* Icon - Digital Marketer */}
              <div className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-3 relative">
                <Image
                  src="/assets/HeroLeft.svg"
                  alt="Digital Marketer Icon"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
              
              {/* Text Label */}
              <div className="font-anton text-base md:text-2xl lg:text-3xl">
                <div
                  className="block"
                  style={{
                    background: "linear-gradient(180deg, #004aad 0%, #cb6ce6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1.1",
                  }}
                >
                  Digital
                </div>
                <div
                  className="block"
                  style={{
                    background: "linear-gradient(180deg, #004aad 0%, #cb6ce6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1.1",
                  }}
                >
                  Marketer
                </div>
              </div>
            </div>

            {/* Center Spacer */}
            <div className="hidden md:block"></div>

            {/* Right Section - Graphic Designer */}
            <div className="flex flex-col items-end justify-end md:col-start-3">
              {/* Icon - Graphic Designer */}
              <div className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-3 relative">
                <Image
                  src="/assets/HeroRight.svg"
                  alt="Graphic Designer Icon"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
              
              {/* Text Label */}
              <div className="font-anton text-base md:text-2xl lg:text-3xl text-right">
                <div
                  className="block"
                  style={{
                    background: "linear-gradient(180deg, #004aad 0%, #cb6ce6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1.1",
                  }}
                >
                  Graphic
                </div>
                <div
                  className="block"
                  style={{
                    background: "linear-gradient(180deg, #004aad 0%, #cb6ce6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1.1",
                  }}
                >
                  Designer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

