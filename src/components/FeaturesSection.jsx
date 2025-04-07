import React from "react";
import { CheckCircle, LayoutDashboard, Users } from "lucide-react";

function FeaturesSection() {
  return (
    <section
      id="features" // 🔹 Yeh line add ki gayi hai for internal navigation
      className="bg-[#f9f9fc] px-8 py-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            What is docport and how can we help?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Docport hosts a variety of features that aim to make your life easier, streamline
            your logistics processes and provide a better overview of all of your logistics
            processes
          </p>
        </div>

        <div className="space-y-10">
          <FeatureItem
            icon={<CheckCircle className="text-green-400" size={24} />}
            title="Collaboration"
            description="Plan, collaborate, and share your shipments with partners, carriers and everyone that's involved"
          />
          <FeatureItem
            icon={<LayoutDashboard className="text-green-400" size={24} />}
            title="Dashboard"
            description="docport dashboard brings all of your analytics to life by visualising your data for you"
          />
          <FeatureItem
            icon={<Users className="text-green-400" size={24} />}
            title="Engagement"
            description="Quickly add partners, share journeys, access documents and more with the desktop program and mobile app"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-green-50 p-2 rounded">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-700 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default FeaturesSection;
