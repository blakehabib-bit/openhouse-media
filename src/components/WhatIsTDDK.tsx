interface WhatIsTDDKProps {
  eyebrow: string;
  body: string;
}

export default function WhatIsTDDK({ eyebrow, body }: WhatIsTDDKProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-6">
            {eyebrow}
          </p>
          <p className="text-2xl md:text-3xl text-gray-900 leading-relaxed font-light">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
