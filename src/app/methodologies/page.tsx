"use client";

import { motion } from "framer-motion";

export default function MethodologyPage() {
  return (
    <motion.div
      className="min-h-screen bg-slate-950 text-white p-6 md:p-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-[#64ffda] mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Methodology
        </motion.h1>

        <p className="text-slate-300 mb-6 leading-relaxed">
          This page outlines how the Sentiment Analysis Dashboard processes, analyzes, and visualizes
          debate transcripts to uncover emotional and linguistic trends. The goal is to provide
          transparency about the models, datasets, and techniques used to produce these insights.
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">1. Data Collection</h2>
          <p className="text-slate-400 leading-relaxed">
            Debate transcripts were sourced from publicly available records of U.S. presidential debates. 
            Each transcript was cleaned to remove stage directions, interruptions, and non-verbal cues.
            The data is organized by year and candidate, ensuring comparability across election cycles.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">2. Text Preprocessing</h2>
          <p className="text-slate-400 leading-relaxed">
            The raw text undergoes tokenization, lowercasing, and stopword removal using standard NLP
            preprocessing techniques. This ensures that analysis focuses on meaningful linguistic content.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">3. Sentiment Analysis</h2>
          <p className="text-slate-400 leading-relaxed">
            Sentiment polarity and subjectivity are computed using the TextBlob library, which applies a
            lexicon-based approach to score each statement on a scale from -1 (negative) to +1 (positive).
            The same analysis is used to measure subjectivity, capturing how opinionated the language is.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">4. Emotion Classification</h2>
          <p className="text-slate-400 leading-relaxed">
            To detect emotional tones such as <span className="text-[#64ffda]">joy</span>,{" "}
            <span className="text-[#64ffda]">sadness</span>, <span className="text-[#64ffda]">anger</span>,
            and <span className="text-[#64ffda]">surprise</span>, a transformer-based emotion model
            (such as DistilBERT fine-tuned for emotion detection) is used. The output probabilities are
            averaged per candidate and debate.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">5. Visualization</h2>
          <p className="text-slate-400 leading-relaxed">
            Sentiment and emotion scores are visualized using interactive charts powered by Recharts
            and animated transitions via Framer Motion. These visualizations help highlight patterns
            over time and across participants.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">6. Limitations</h2>
          <p className="text-slate-400 leading-relaxed">
            The sentiment analysis is lexicon-based, which may not fully capture sarcasm, context,
            or complex linguistic nuances. Additionally, emotional inference is model-dependent
            and subject to dataset bias.
          </p>
        </section>

        <div className="mt-10 p-4 border-t border-slate-700 text-sm text-slate-500">
          Last updated: November 2025 · Developed by{" "}
          <a
            href="https://afzalmiah.dev"
            className="text-[#64ffda] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Afzal Miah
          </a>
        </div>
      </div>
    </motion.div>
  );
}
