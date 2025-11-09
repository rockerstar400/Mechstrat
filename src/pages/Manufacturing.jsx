import Header  from "../components/Header";
  import {Target, Users ,TrendingUp} from 'lucide-react';
  import Aibaner from "../assets/Aicompany.png"
export default function Manufacturing() {
  return (
    <div className="bg-white">
      <Header />

      {/* Hero Banner */}
      <section 
        className="relative bg-cover h-[600px] bg-center py-20 px-6"
        style={{ 
          backgroundImage: `url(${Aibaner})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-teal-800/60"></div>
        
        {/* Content */}
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            For Manufacturing Companies
          </h1>
        </div>
      </section>

      {/* Business Consulting Section */}
      <section className="py-16 px-6 bg-[#E7F5F6]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Business Consulting & Growth Strategy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Side - Text Content */}
            <div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                In today's competitive landscape, standing still is the surest way to moving backward. Our <span className="font-bold">Business Consulting & Growth Strategy</span> service is designed to be the catalyst for your next phase of expansion and profitability. We don't just offer advice - we partner with you to implement bold, measurable growth initiatives.
              </p>

              {/* Three Cards */}
              <div className="space-y-6">
                {/* Card 1 */}
                <div className="flex gap-4 items-start">
                  <div className="bg-white p-3 rounded-lg flex-shrink-0">
                    <Users className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Business Expansion & New Client Acquisition:
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      We help identify your next high-value market position and develop a robust strategy for penetrating new markets and acquiring high-growth customers. Our approach includes targeted market segmentation to ensure your offerings land campaigns that drive your top line.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex gap-4 items-start">
                  <div className="bg-white p-3 rounded-lg flex-shrink-0">
                    <Target className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Optimizing Product/Service Distribution Strategy:
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      We analyze your product/service offerings and redesign the most efficient and profitable <span className="font-semibold">distribution channels</span>, whether you need to leverage your existing distribution network, build new regional footprints, or ensure your offerings reach customers efficiently and effectively.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex gap-4 items-start">
                  <div className="bg-white p-3 rounded-lg flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Revenue & Business Share Increase:
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Our ultimate goal is tangible financial impact. We focus on strategies that directly lead to increased <span className="font-semibold">revenue</span> and an expanded <span className="font-semibold">market share</span> within your industry, ensuring your growth is sustained and strategically sound.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Dashboard Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop"
                  alt="Manufacturing Performance Dashboard"
                  className="rounded-2xl shadow-2xl w-full"
                />
                {/* Dashboard Overlay Text */}
                <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                  <h4 className="font-bold text-gray-800 text-sm">Manufacturing Performance Dashboard</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-600 py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-white text-sm mb-2">
            © 2025 · MechStrat Global. All rights reserved.
          </p>
          <p className="text-white/90 text-sm">
            Business Strategy for a Smarter Manufacturing World
          </p>
        </div>
      </footer>
    </div>
  );
}