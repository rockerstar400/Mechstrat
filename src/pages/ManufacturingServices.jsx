
import React, { useState } from 'react';
import Header from "../components/Header"
import bannner from "../assets/servicesBanner1.png";


import { CheckCircle, ChevronDown, Package, TrendingUp, Handshake, Send, MapPin, Globe, Mail } from 'lucide-react';

export default function ManufacturingCompaniesPage() {
    const [openAccordion, setOpenAccordion] = React.useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };
    const services = [
        {
            icon: Package,
            title: "Scalable Business Architecture",
            description: "We assess your internal structure (OMs, support, enablement, etc.) and help you build the necessary processes and norms required for scaling into high-volume, onboarding of large manufacturing clients."
        },
        {
            icon: TrendingUp,
            title: "Identifying New Growth Vectors",
            description: "We leverage our industry intelligence to identify emerging adjacent verticals, product features, or service offerings that allow you to naturally extend into an addressable market (TAM) within the manufacturing space."
        },
        {
            icon: Handshake,
            title: "Sustained Commercial Viability",
            description: "Our consulting ensures your growth model is defensible and your competitive moat, focusing on customer retention, high-tier Revenue Per Account (RPA), and preparing your organization for future investment or eventual exit."
        }
    ];
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
        <div className="min-h-screen bg-white">
            <Header />
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-[630px] flex items-end justify-end text-white"
                style={{
                    backgroundImage: `url(${bannner})`,
                    backgroundPosition: 'center center'
                }}
            >
                {/* Dark Overlay */}
                {/* <div className="absolute inset-0 "></div> */}

                {/* Content */}
                <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-wide text-white mb-8">
                        For Digital Technology<br /> Solution Providers
                    </h1>
                </div>
            </section>

            {/* Challenge Section */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    The Challenge: Translating Software Value<br />
                    to Manufacturing Reality
                </h2>

                <p className="text-gray-600 leading-relaxed mb-6">
                    The manufacturing sector operates on a unique cadence, driven by long investment cycles, specialized
                    machinery that's often run 24/7, and a conservative approach to risk. In this competitive market for
                    SaaS providers, the biggest challenge is <span className="font-semibold">bridging a solution's value</span> to the reality of the factory
                    floor, demanding complex procurement, and delivering rapid, profitable growth.
                </p>

                <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
                    <p className="text-gray-700">
                        <span className="font-semibold">We are your specialized Manufacturing Go-To-Market engine.</span> Leveraging our 17 years of deep industry
                        expertise, we ensure your software solutions are not just presented well but supported growth by
                        operational credibility. We work alongside your teams—from your product roadmaps to your sales calls—ensuring you're
                        smarter, and with faster market entry risks.
                    </p>
                </div>
            </div>

            {/* Go-to-Market Section */}
            <div className="bg-gradient-to-br from-gray-50 to-teal-50 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        Go-to-Market and Localization Strategy
                    </h2>

                    <p className="text-gray-600 mb-12 leading-relaxed">
                        A premium, enterprise-focused work track designed with one goal in mind: to ensure your CRM solution that succeeds
                        your product's messaging, pricing, and sales process are perfectly adapted to the sector's specific
                        demands, guaranteeing high conversion rates.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Market Penetration Roadmap */}
                        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="bg-teal-100 p-3 rounded-full">
                                    <CheckCircle className="text-teal-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        1. Market Penetration Roadmap
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Applying an evidence-based strategy for introducing your product into the manufacturing ecosystem. We
                                        includes identifying the most receptive sub-sectors (e.g., Automotive, Materials, Pharma) and validating your
                                        initial beachhead strategy for maximum impact.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Strategy Card */}
                        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="bg-teal-100 p-3 rounded-full">
                                    <CheckCircle className="text-teal-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        2. Localization & Messaging
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Tailoring your value proposition to resonate with manufacturing decision-makers. We ensure your messaging
                                        speaks directly to operational efficiency, ROI, and compliance needs specific to the industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-2 mt-12">
                        <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                </div>
            </div>

            {/* Partnership Section */}
            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-6 bg-[#E7F5F6]">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                        Partnership and Ecosystem Development
                    </h2>

                    <p className=" text-gray-700 text-center leading-relaxed mb-12 max-w-4xl mx-auto">
                        Penetration in manufacturing is often achieved through robust partnerships. We help you build a powerful
                        ecosystem that provides instant credibility and access to high-volume sales channels, accelerating your
                        business growth.
                    </p>

                    {/* Accordion Items */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden max-w-3xl mx-auto">
                        {/* Strategic Alliance Building */}
                        <div className="border-b border-gray-200">
                            <button
                                onClick={() => toggleAccordion(0)}
                                className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
                            >
                                <span className="font-semibold text-gray-900 text-lg">Strategic Alliance Building</span>
                                <ChevronDown
                                    className={`text-gray-600 transition-transform flex-shrink-0 ${openAccordion === 0 ? 'rotate-180' : ''}`}
                                    size={24}
                                />
                            </button>
                            {openAccordion === 0 && (
                                <div className="px-6 pb-5 pt-2">
                                    <p className="text-gray-700 leading-relaxed">
                                        We identify, qualify, and facilitate relationships with <span className="font-semibold">key system integrators (SIs), industrial automation firms,
                                            and established hardware vendors</span> who can package and resell your software solution.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Ecosystem Mapping */}
                        <div className="border-b border-gray-200">
                            <button
                                onClick={() => toggleAccordion(1)}
                                className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
                            >
                                <span className="font-semibold text-gray-900 text-lg">Ecosystem Mapping</span>
                                <ChevronDown
                                    className={`text-gray-600 transition-transform flex-shrink-0 ${openAccordion === 1 ? 'rotate-180' : ''}`}
                                    size={24}
                                />
                            </button>
                            {openAccordion === 1 && (
                                <div className="px-6 pb-5 pt-2">
                                    <p className="text-gray-700 leading-relaxed">
                                        Understanding the manufacturing ecosystem landscape and identifying strategic entry points for maximum impact
                                        and market penetration across different industrial segments.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Channel Growth Acceleration */}
                        <div>
                            <button
                                onClick={() => toggleAccordion(2)}
                                className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
                            >
                                <span className="font-semibold text-gray-900 text-lg">Channel Growth Acceleration</span>
                                <ChevronDown
                                    className={`text-gray-600 transition-transform flex-shrink-0 ${openAccordion === 2 ? 'rotate-180' : ''}`}
                                    size={24}
                                />
                            </button>
                            {openAccordion === 2 && (
                                <div className="px-6 pb-5 pt-2">
                                    <p className="text-gray-700 leading-relaxed">
                                        Developing and executing strategies to accelerate growth through channel partners, optimizing partner
                                        enablement, and creating scalable go-to-market models for sustained expansion.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                        Business Consulting for Growth and Expansion
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
                        Once you have initial traction, we provide the strategic guidance necessary to move beyond successful pilots
                        to large-scale, enterprise-wide deployments, ensuring your expansion is sustainable and profitable.
                    </p>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="bg-[#E7F5F6] p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    {/* Icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className="bg-teal-100 p-4 rounded-lg">
                                            <Icon className="text-teal-600" size={32} strokeWidth={2} />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-center leading-relaxed text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
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