import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-[#052e4d] text-white">
      {/* Logo and Tagline */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center gap-2">
                <div className="h-8 w-8 rounded-full bg-aspire-orange" />
                <span className="text-2xl font-black tracking-wide">
                  ASPIRE
                </span>
              </div>
              <p className="text-lg">
                Learning is the process of acquiring new understanding,
                knowledge, behaviors, skills, values, attitudes, and preferences
              </p>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-semibold">Contact Us</h3>
              <div className="mx-auto h-[4px] w-[85px] bg-aspire-orange" />
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center justify-center gap-4">
                <Phone className="h-6 w-6" />
                <a
                  href="tel:+61452092360"
                  className="text-lg hover:text-aspire-orange"
                >
                  +61 452 092 360
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center gap-4">
                <Mail className="h-6 w-6" />
                <a
                  href="mailto:info@aspireacademics.au"
                  className="text-lg hover:text-aspire-orange"
                >
                  info@aspireacademics.au
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start justify-center gap-4">
                <MapPin className="mt-1 h-6 w-6 flex-shrink-0" />
                <p className="text-lg">
                  Unit 15, 150 Palmers Road
                  <br />
                  Truganina 3029
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-aspire-medium-blue py-8">
        <p className="text-center text-sm font-bold">
          © Copyright 2025 AspireAcademics.au Designed by Milkyano Digital
        </p>
      </div>
    </footer>
  );
}
