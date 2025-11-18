import { Instagram } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full bg-[#5797d7] h-20 md:h-24 flex items-center justify-center px-4">
        <h1 className="text-white font-semibold text-lg md:text-2xl tracking-tight">
          SAINTNIC MELBOURNE
        </h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12 relative">
        {/* Angel Background Image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="relative w-full h-full max-w-[800px] flex items-center justify-center">
            <Image
              src="/coming-soon/angel-bg.png"
              alt=""
              width={634}
              height={499}
              className="opacity-100 object-contain"
              priority
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Coming Soon Text */}
          <div className="text-center space-y-2 md:space-y-4">
            <h2 className="text-[#5797d7] font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight">
              COMING
            </h2>
            <h3 className="text-[#5797d7] italic font-medium text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Soon
            </h3>
          </div>

          {/* Decorative Line */}
          <div className="w-32 md:w-48 h-px bg-[#5797d7] my-4 md:my-8" />

          {/* Instagram Box */}
          <div className="mb-8 md:mb-12">
            <a
              href="https://instagram.com/saintnic.melbourne"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="border-[3px] border-[#5797d7] bg-white rounded-[10px] px-6 py-4 md:px-8 md:py-5 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center gap-3 md:gap-4">
                  <Instagram className="w-6 h-6 md:w-8 md:h-8 text-[#5797d7]" />
                  <span className="text-[#5797d7] font-semibold text-lg md:text-[22px]">
                    @saintnic.melbourne
                  </span>
                </div>
              </div>
            </a>
            <p className="text-[#5797d7] font-medium text-sm text-center mt-3">
              Follow our progress
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
