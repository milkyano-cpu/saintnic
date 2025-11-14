import { Section } from './ui/Section';
import { MapPin } from 'lucide-react';

export function LocationSection() {
  return (
    <Section variant="medium-blue" className="bg-[#01588d] py-12">
      <div className="space-y-6">
        {/* Section Title */}
        <h2 className="text-center text-2xl font-bold text-white">
          Where to Find Us
        </h2>

        {/* Map Card */}
        <div className="overflow-hidden rounded-[10px] bg-white">
          {/* Map Area */}
          <div className="relative h-[207px] w-full">
            {/* Placeholder for map image */}
            <div className="absolute inset-0 bg-gray-300" />

            {/* Logo Pin Overlay */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                {/* Pin background */}
                <div className="rounded-[3px] border border-aspire-blue bg-white px-3 py-2">
                  <div className="flex flex-col items-center">
                    <p className="text-[4px] font-black tracking-wider text-aspire-text-dark">
                      ASPIRE
                    </p>
                    <p className="text-[3px] font-semibold tracking-wide text-aspire-text-dark">
                      ACADEMICS
                    </p>
                  </div>
                </div>
                {/* Pin point */}
                <div className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2">
                  <MapPin className="h-full w-full fill-red-500 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Address Info */}
          <div className="space-y-2 p-6 text-center">
            <p className="text-xs font-medium text-black">
              Unit 15, 150 Palmers Rd, Truganina VIC 3029
            </p>
            <p className="text-xs text-gray-500">
              Parking available. Easy access from Williams Landing, Tarneit, and
              surrounding suburbs.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
