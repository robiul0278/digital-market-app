// components/Features.tsx
import FeatureCard from "./FeatureCard";
import {
  BadgeCheck,
  PackageCheck,
  Headphones,
  ShieldCheck,
} from "lucide-react";

export default function Features() {
  const features = [
    { icon: BadgeCheck, title: "AUTHENTIC PRODUCT" },
    { icon: PackageCheck, title: "FAST DELIVERY" },
    { icon: Headphones, title: "10AM–12PM SUPPORT" },
    { icon: ShieldCheck, title: "SECURE CHECKOUT" },
  ];

  // duplicate list for smooth loop
  const marqueeList = [...features, ...features];

  return (
    <div className="max-w-7xl mx-auto p-4 md:py-10 lg:py-10">
      {/* Mobile: marquee */}
      <div className="block sm:hidden overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeList.map((feature, index) => (
            <div
              key={index}
              className="min-w-[250px] snap-start mx-2"
            >
              <FeatureCard icon={feature.icon} title={feature.title} index={index % 4} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: grid */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} index={index} />
        ))}
      </div>
    </div>
  );
}
