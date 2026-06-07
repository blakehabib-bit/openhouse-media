interface CaseStudyFeaturedProps {
  eyebrow: string;
  client: string;
  objective: string;
  solution: string;
  resultHeadline: string;
  resultDetail: string;
  image?: string;
}

export default function CaseStudyFeatured({
  eyebrow,
  client,
  objective,
  solution,
  resultHeadline,
  resultDetail,
  image,
}: CaseStudyFeaturedProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 items-stretch">
              {image && (
                <div className="relative min-h-[300px] md:min-h-[420px]">
                  <img
                    src={image}
                    alt={client}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-10 md:p-14 text-white flex flex-col justify-center">
                <p className="text-sm font-semibold text-purple-300 uppercase tracking-widest mb-4">
                  {eyebrow}
                </p>
                <h3 className="text-3xl font-bold mb-8">{client}</h3>

                <div className="space-y-5 mb-8">
                  <div>
                    <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">
                      Objective
                    </div>
                    <p className="text-purple-100">{objective}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">
                      Solution
                    </div>
                    <p className="text-purple-100">{solution}</p>
                  </div>
                </div>

                <div className="border-t border-purple-700/50 pt-6">
                  <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">
                    Result
                  </div>
                  <p className="text-2xl md:text-3xl font-bold mb-3 gradient-text">
                    {resultHeadline}
                  </p>
                  {resultDetail && (
                    <p className="text-purple-100 text-sm leading-relaxed">
                      {resultDetail}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
