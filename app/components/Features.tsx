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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 md:py-10 lg:py-10">
      {features.map((feature, index) => (
        <FeatureCard key={index} icon={feature.icon} title={feature.title} />
      ))}
    </div>
  );
}
