import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function AdvisorDashboard() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary">
              Protocolo Tours
            </div>
            <div className="text-sm text-gray-600">Advisor Portal</div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Your Q4 2024 Performance Report
          </h1>
          <p className="text-lg text-gray-600">
            See how you performed this quarter and where your next opportunities
            are
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {/* Total Revenue */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">
                Total Revenue
              </h3>
              <div className="flex items-center gap-1 text-green-600">
                <ArrowUpRight size={16} />
                <span className="text-xs font-semibold">+12%</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900">$187,450</div>
            <p className="text-xs text-gray-500 mt-2">vs $167,200 last quarter</p>
          </div>

          {/* Bookings */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Bookings</h3>
              <div className="flex items-center gap-1 text-red-600">
                <ArrowDownRight size={16} />
                <span className="text-xs font-semibold">-3%</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900">24</div>
            <p className="text-xs text-gray-500 mt-2">vs 25 last quarter</p>
          </div>

          {/* Active Clients */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Active Clients</h3>
              <div className="flex items-center gap-1 text-green-600">
                <ArrowUpRight size={16} />
                <span className="text-xs font-semibold">+5%</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900">18</div>
            <p className="text-xs text-gray-500 mt-2">1 new client this quarter</p>
          </div>

          {/* Avg Booking Value */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">
                Avg Booking Value
              </h3>
              <div className="flex items-center gap-1 text-green-600">
                <ArrowUpRight size={16} />
                <span className="text-xs font-semibold">+15%</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900">$7,811</div>
            <p className="text-xs text-gray-500 mt-2">Strong quarter for AUV</p>
          </div>
        </div>

        {/* Opportunities Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Inactive Clients */}
          <div className="bg-orange-50 rounded-lg border-2 border-orange-200 p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Inactive Clients Waiting to Rebook
              </h2>
              <p className="text-gray-700 mt-1">
                These clients haven't booked in 6+ months
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">
                      Margaret & David Chen
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Last booking: March 2024 (Italy trip) - $3,200
                    </p>
                  </div>
                  <span className="text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">
                    8 months
                  </span>
                </div>
              </div>
              <div className="bg-white rounded p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">
                      James Robertson
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Last booking: June 2024 (Spain) - $2,850
                    </p>
                  </div>
                  <span className="text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">
                    6 months
                  </span>
                </div>
              </div>
              <div className="bg-white rounded p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">
                      The Johnson Family
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Last booking: January 2024 (Brazil) - $5,100
                    </p>
                  </div>
                  <span className="text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">
                    11 months
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-6 p-4 bg-white rounded border-l-4 border-orange-400">
              💡 <strong>Action:</strong> Reach out this week with a "we miss
              you" offer or a curated destination based on their past trips
            </p>
          </div>

          {/* Repeat Customers */}
          <div className="bg-green-50 rounded-lg border-2 border-green-200 p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Repeat Customers Ready for Upgrades
              </h2>
              <p className="text-gray-700 mt-1">
                Loyal clients who book regularly—time to expand
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">
                      Sarah & Mike Stevens
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      2 bookings this year, 4 total - Avg: $3,400 → opportunity
                      for luxury upgrade
                    </p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    Loyal
                  </span>
                </div>
              </div>
              <div className="bg-white rounded p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">
                      Patricia Wong
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      3 bookings this year - Consider group travel or exclusive
                      experiences
                    </p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    Loyal
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-6 p-4 bg-white rounded border-l-4 border-green-400">
              💡 <strong>Action:</strong> Offer them exclusive perks, group
              discounts, or loyalty rewards to increase per-booking value
            </p>
          </div>
        </div>

        {/* Supplier Opportunities */}
        <div className="bg-blue-50 rounded-lg border-2 border-blue-200 p-8 mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Untapped Suppliers
            </h2>
            <p className="text-gray-700 mt-1">
              You haven't used these partners yet, but they're popular with
              similar advisors
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-gray-900">Azora Hotels</p>
              <p className="text-xs text-gray-600 mt-2">
                Premium Portugal stays. 8 advisors booked 12 trips last quarter
              </p>
              <p className="text-xs font-medium text-blue-600 mt-3">
                Popular in luxury segment ↗
              </p>
            </div>
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-gray-900">Costa Experiences</p>
              <p className="text-xs text-gray-600 mt-2">
                Experiential travel packages. Growing fast—15 bookings this
                quarter
              </p>
              <p className="text-xs font-medium text-blue-600 mt-3">
                Emerging opportunity ↗
              </p>
            </div>
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-gray-900">
                Galapagos Adventure Co
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Eco-tourism. High margins. 5 advisors, consistent bookings
              </p>
              <p className="text-xs font-medium text-blue-600 mt-3">
                Steady performer ↗
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-6 p-4 bg-white rounded border-l-4 border-blue-400">
            💡 <strong>Action:</strong> Request partner kits and reach out to
            these suppliers for training—your clients might love what they offer
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Next Quarter Starts Now
          </h3>
          <p className="text-gray-700 mb-6">
            Use these insights to build your strategy. We'll track your progress
            and send you a new report in 90 days.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            Download Full Report (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}
