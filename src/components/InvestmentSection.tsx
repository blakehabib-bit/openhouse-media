interface ValueItem {
  role: string;
  detail: string;
  price: string;
}

interface ListItem {
  text: string;
}

interface InvestmentProps {
  title: string;
  subtitle: string;
  valueStack: ValueItem[];
  totalValue: string;
  priceLabel: string;
  price: string;
  pricePeriod: string;
  priceNote: string;
  includes: ListItem[];
  roiTitle: string;
  monthlyInvestment: string;
  avgCommission: string;
  breakEven: string;
  avgListings: string;
  avgListingsDetail: string;
}

export default function InvestmentSection({
  title,
  subtitle,
  valueStack,
  totalValue,
  priceLabel,
  price,
  pricePeriod,
  priceNote,
  includes,
  roiTitle,
  monthlyInvestment,
  avgCommission,
  breakEven,
  avgListings,
  avgListingsDetail,
}: InvestmentProps) {
  return (
    <section id="investment" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-gray-600">{subtitle}</p>
          </div>

          {/* Value Stack */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-8">
            <div className="space-y-4 mb-8">
              {valueStack.map((item) => (
                <div key={item.role} className="flex justify-between items-center pb-4 border-b border-purple-200">
                  <div>
                    <div className="font-semibold text-lg">{item.role}</div>
                    <div className="text-gray-600">{item.detail}</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-700">{item.price}</div>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4">
                <div className="text-xl font-bold">Total Market Value:</div>
                <div className="text-4xl font-bold text-gray-900">{totalValue}</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-sm font-semibold text-purple-600 mb-2">{priceLabel}</div>
                <div className="text-6xl font-bold text-purple-900 mb-2">
                  {price}<span className="text-2xl font-normal text-gray-600">{pricePeriod}</span>
                </div>
                <div className="text-gray-600">{priceNote}</div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {includes.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="#cta"
                className="block w-full bg-purple-600 text-white text-center px-8 py-5 rounded-lg font-bold text-lg hover:bg-purple-700 transition"
              >
                Book Your Free Suburb Audit →
              </a>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-8">{roiTitle}</h3>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center pb-3 border-b border-green-200">
                  <span>Your monthly investment:</span>
                  <span className="font-bold">{monthlyInvestment}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-green-200">
                  <span>Average NZ listing commission:</span>
                  <span className="font-bold">{avgCommission}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-green-200">
                  <span>Listings needed to break even:</span>
                  <span className="font-bold text-green-600">{breakEven}</span>
                </div>
                <div className="pt-4 text-center">
                  <div className="text-sm text-gray-600 mb-2">Our average agent wins:</div>
                  <div className="text-5xl font-bold text-green-600">{avgListings}</div>
                  <div className="text-gray-600 mt-2">{avgListingsDetail}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
