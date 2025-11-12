import React, { useState } from 'react';
import { Menu, X, Target, Zap, TrendingUp, Users, Building2, Lightbulb, ArrowRight, Mail, Globe, MapPin, Send } from 'lucide-react';
import Header from '../components/Header';
import AIsolution from "../assets/Aisolution.png";
import AIhand from "../assets/AIHand.png";

// Header Component

// Main Page Component
export default function AISolutionProvidersPage() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Thank you for reaching out! We will get back to you soon.');
        // Add your form submission logic here
    };


    return (
        <div className="bg-white">
            <Header />

            {/* Hero Banner */}
            <section
                className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-white mb-8"
                style={{
                    backgroundImage: `url(${AIsolution})`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 via-gray-700/70 to-teal-600/60"></div>

                {/* Content */}
                <div className="container mx-auto max-w-6xl text-center relative z-10 px-6">
                    <h1 className=" font-normal text-[64px] leading-[60px] tracking-[0] text-white text-center drop-shadow-lg mb-8">
                        For AI Solution Providers
                    </h1>

                </div>
            </section>
            <div className="bg-white max-w-7xl mx-auto px-6 md:px-16">

                {/* Challenge Section */}
                <section className="py-16 px-6 bg-white">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className=" font-normal text-[50px] leading-[61px] tracking-[0] text-[#000000]  mb-6">
                            The Challenge: Bridging the Gap from Code to Factory Floor
                        </h2>
                        


                        <div className="space-y-4 text-[#374151] leading-relaxed">
                            <p>
                                AI and advanced technology providers often face hurdles - complex, and costly sales cycles when targeting the industrial ecosystem. The primary challenge is not just technological - it's understanding the real pain points manufacturers face, navigating complex procurement cycles, and demonstrating tangible ROI faster than the 2-3-year timelines in manufacturing expansions.
                            </p>
                            <p>
                                Selling innovation to factories requires AI teams to think like manufacturers, speak in costs-roi and business resilience, build trust with plant teams, and align tech benefits to factory floor pain - like OEE, scrap rate, machine uptime, and anomaly detection for the supply chain or predictive machine disruption.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Go-to-Market Strategy */}
                <section className="py-16 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-regular text-gray-800 mb-2">
                            Go-to-Market Strategy
                        </h2>
                        <div className="w-48 h-1 bg-[#1695A3] mb-6"></div>

                        <p className="text-gray-700 mb-10 leading-relaxed">
                            Stop wasting time on broad marketing efforts. We provide a tailored, end-to-end GTM roadmap designed specifically for the unique pace and requirements of the manufacturing industry, ensuring <span className="font-semibold">rapid growth and focused client acquisition.</span>
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="font-bold text-lg text-gray-800">
                                        Accelerated Market Entry:
                                    </h3>
                                    <div className="bg-teal-100 p-2 rounded-lg">
                                        <Target className="w-6 h-6 text-teal-600" />
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    We hand-hold your team through the entire process, defining your ideal client profile (ICP) within manufacturing, identifying their critical pain points, and precisely aligning your solution's value proposition.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="font-bold text-lg text-gray-800">
                                        Targeted Business Opportunity Exploration:
                                    </h3>
                                    <div className="bg-teal-100 p-2 rounded-lg">
                                        <Zap className="w-6 h-6 text-teal-600" />
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    We move beyond generic sales pitches. Our strategy focuses on exploring concrete business opportunities and showing manufacturing leaders exactly how your AI solution will deliver tangible ROI—whether through OEE improvement, predictive maintenance cost savings, or supply chain optimization.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="font-bold text-lg text-gray-800">
                                        End-to-End GTM Implementation:
                                    </h3>
                                    <div className="bg-teal-100 p-2 rounded-lg">
                                        <TrendingUp className="w-6 h-6 text-teal-600" />
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    From market sizing and competitive analysis to defining channel strategy and initial outreach messaging, we provide a complete playbook for you to effectively enter and scale in the manufacturing market.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Market Access Section */}
                <section className="py-16 px-6 bg-[#E7F5F6]">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                            Market Access & Partnership Development
                        </h2>
                        <div className="w-64 h-1 bg-[#1695A3] mb-6"></div>

                        <p className="text-gray-700 mb-10 leading-relaxed max-w-3xl">
                            Gaining market access in manufacturing often depends on the right relationships and strategic alliances. We are your bridge to crucial industry players, helping you build a robust ecosystem that accelerates client acquisition.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            {/* Left Content */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-2">
                                        Direct Market Access:
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        We open doors to decision-makers and high-potential clients within the manufacturing sector, leveraging our 17 years of accumulated industry trust and network. This dramatically reduces your customer acquisition cost and time-to-sale.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-800 mb-2">
                                        Strategic Partnership Building:
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        We identify and secure high-value partnerships—with system integrators, established technology companies, or complementary service providers—that can co-sell your solution and expand your reach. These alliances are essential for embedding your technology deeply within the manufacturing value chain.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-800 mb-2">
                                        Client Onboarding Acceleration:
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        We help structure pilot programs and commercial agreements to ensure a smooth transition from proof-of-concept to full-scale deployment, building momentum for you to onboard new clients efficiently.
                                    </p>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="flex justify-center md:justify-end">
                                <img
                                    src={AIhand}
                                    alt="Manufacturing Robot"
                                    className="rounded-2xl shadow-xl w-full max-w-md"
                                />
                            </div>
                        </div>
                    </div>
                </section>


                {/* Business Strategy Section */}
                <section className="py-16 px-6 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center">
                            Business Strategy & Commercial Scaling
                        </h2>
                        <div className="w-48 h-1 bg-teal-500 mx-auto mb-6"></div>

                        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Having a great product is only half the battle; scaling your business requires a robust, commercially sound strategy. We provide the expertise needed to turn your technology success into <span className="font-bold">exponential business growth.</span>
                        </p>

                        {/* Carousel Container */}
                        <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Card 1 */}
                                <div className="bg-[#E7F5F6] p-6 rounded-xl">
                                    <TrendingUp className="w-10 h-10 text-teal-600 mb-4" />
                                    <h3 className="font-bold text-gray-800 mb-3">
                                        Scalable Growth Strategy:
                                    </h3>
                                    <p className="text-xs text-gray-700 leading-relaxed">
                                        We design robust scaling strategies focused on sustainable growth—whether through direct sales, reseller partnerships, or customer success-led expansion—ensuring you can capture the manufacturing market. We focus on building a scalable market entry playbook with a customer acquisition strategy that fuels efficient business growth.
                                    </p>
                                </div>

                                {/* Card 2 - Center/Active */}
                                <div className="bg-white border-2 border-teal-500 p-6 rounded-xl shadow-lg">
                                    <Building2 className="w-10 h-10 text-teal-600 mb-4" />
                                    <h3 className="font-bold text-gray-800 mb-3">
                                        Commercial Model Optimization:
                                    </h3>
                                    <p className="text-xs text-gray-700 leading-relaxed">
                                        We help you refine your financial and pricing model—subscription, one-time, hybrid—to attract investors and ensure your solution generates maximum value for both you and your manufacturing clients.
                                    </p>
                                </div>

                                {/* Card 3 */}
                                <div className="bg-[#E7F5F6] p-6 rounded-xl">
                                    <Users className="w-10 h-10 text-teal-600 mb-4" />
                                    <h3 className="font-bold text-gray-800 mb-3">
                                        Generating Industry Expertise:
                                    </h3>
                                    <p className="text-xs text-gray-700 leading-relaxed">
                                        By collaborating with us, you gain immediate access to deep manufacturing domain expertise, including supply chain, technology, adoption readiness, and procurement culture—knowledge that would typically require years of trial and error to develop on your own. We help you move faster through manufacturing.
                                    </p>
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors">
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 p-2 rounded-full transition-colors">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-2 mt-8">
                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                <div className="w-8 h-2 rounded-full bg-teal-600"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white py-16 px-6">
                    <div className="container mx-auto max-w-6xl">
                        {/* Heading */}
                        <div className="text-center mb-12">
                            <h2 className="font-semibold text-[36px]   text-[#111827] flex items-center justify-center text-center mb-2">
                                Let's Build Your Strategy for Growth
                            </h2>
                            <div className="w-24 h-1 bg-[#1695A3] mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
                            {/* Left Side - Get in Touch */}
                            <div>
                                <h3 className="  text-2xl font-bold text-[#111827] mb-8">Get in Touch</h3>

                                <div className="space-y-6">
                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#E5F3F4] p-3 rounded-lg">
                                            <Mail className="w-6 h-6 text-teal-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#111827] mb-1">Email</h4>
                                            <a
                                                href="mailto:info@mechstratglobal.com"
                                                className="text-[#1695A3] hover:text-teal-700"
                                            >
                                                info@mechstratglobal.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Website */}
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#E5F3F4] p-3 rounded-lg">
                                            <Globe className="w-6 h-6 text-[#1695A3]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#111827] mb-1">Website</h4>
                                            <a
                                                href="https://www.MechStratGlobal.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-teal-600 hover:text-teal-700"
                                            >
                                                www.MechStratGlobal.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Locations */}
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#E5F3F4] p-3 rounded-lg">
                                            <MapPin className="w-6 h-6 text-teal-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#111827] mb-1">Locations</h4>
                                            <p className="text-gray-600">Bengaluru | Munich</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Contact Form */}
                            <div>
                                <div className="space-y-6">
                                    {/* Name Field */}
                                    <div>
                                        <label className="block text-[#111827] font-medium mb-2">
                                            Name <span className="text-[#111827]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Company Field */}
                                    <div>
                                        <label className="block text-[#111827] font-medium mb-2">
                                            Company <span className="text-[#111827]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your company"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label className="block text-[#111827]text-gray-700 font-medium mb-2">
                                            Email <span className="text-[#111827]">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@company.com"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label className="block text-[#111827] font-medium mb-2">
                                            Message <span className="text-[#111827]">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your needs..."
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        onClick={handleSubmit}
                                        className="w-full bg-[#1695A3] hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                                    >
                                        Schedule a Consultation
                                        <Send className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                         
                
                            {/* Footer */}
                      


                {/* Footer */}
          
            </div>

                  <footer className="bg-[#1695A3] py-8 px-6">
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