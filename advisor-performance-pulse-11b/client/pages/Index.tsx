import { ArrowRight, TrendingUp, Target, Clock, Mail } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary">
              Protocolo Tours
            </div>
            <div className="text-sm text-gray-600">
              Performance Reporting Platform
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Every Travel Advisor,{" "}
              <span className="text-primary">Their Perfect Quarter</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Automated quarterly performance reports that drive results. See
              your numbers, find your opportunities, and close more business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2">
                Get Started <ArrowRight size={20} />
              </button>
              <button className="border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Problem/Solution Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Problem With Manual Reviews
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-1">×</span>
                  <span>Data scattered across systems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-1">×</span>
                  <span>No visibility into missed opportunities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-1">×</span>
                  <span>Outdated performance insights</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-1">×</span>
                  <span>Generic feedback, not actionable intelligence</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">
                  Performance Dashboard Preview
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Automatic, quarter after quarter
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Data Ingestion
              </h3>
              <p className="text-gray-600 text-sm">
                Monthly data pulls from Sion or CSV uploads keep your numbers
                current
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Analysis
              </h3>
              <p className="text-gray-600 text-sm">
                Quarterly reports compare performance, highlight trends, and
                surface opportunities
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Personalization
              </h3>
              <p className="text-gray-600 text-sm">
                Each advisor gets their own metrics and actionable insights
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Delivery
              </h3>
              <p className="text-gray-600 text-sm">
                Staggered emails ensure every advisor sees their results
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What You Get
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                    <TrendingUp size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Performance Clarity
                  </h3>
                  <p className="text-gray-600">
                    Each advisor sees exactly how they're performing—their
                    revenue, bookings, growth rate, and ranking
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary text-gray-900">
                    <Target size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Opportunity Detection
                  </h3>
                  <p className="text-gray-600">
                    Uncover inactive clients waiting to rebook, repeat customers
                    ready for upgrades, and untapped suppliers
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                    <Clock size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Complete Automation
                  </h3>
                  <p className="text-gray-600">
                    Set it and forget it. Monthly data pulls, quarterly reports,
                    staggered delivery—all hands-free
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary text-gray-900">
                    <Mail size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Attention-Grabbing Delivery
                  </h3>
                  <p className="text-gray-600">
                    Direct, motivating emails that cut through noise and demand
                    action
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Integration Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Works With Your Data
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether Sion has an API or you export CSV monthly, we handle it.
              No manual data entry, no complicated setup.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Travel Advisors
                </h3>
                <p className="text-sm text-gray-600">Names, contact info, and performance history</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Client Data
                </h3>
                <p className="text-sm text-gray-600">Bookings, revenue, repeat business, and recency</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Supplier Insights
                </h3>
                <p className="text-sm text-gray-600">Usage patterns and untapped opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                +25%
              </div>
              <p className="text-gray-300">Average sales lift in first year</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                10x
              </div>
              <p className="text-gray-300">Faster insights vs manual reviews</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                0 hrs
              </div>
              <p className="text-gray-300">Hands-on management needed</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Advisor Performance?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Set up automated quarterly reports in minutes. Your advisors will
            thank you.
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2 mx-auto text-lg">
            Start Free Trial <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-600">
              © 2025 Protocolo Tours. All rights reserved.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-900 transition">
                Terms
              </a>
              <a href="#" className="hover:text-gray-900 transition">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
