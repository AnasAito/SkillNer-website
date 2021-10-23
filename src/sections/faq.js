/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    question: 'Why SkillNer  is open source?',
    answer:
      "3 months ago we wanted to create an application based on job postings but didn't find any free tools to make them.  So we took the initiative and start a toolkit soo all developers can use or contribute to it",
  },
  {
    question: 'How to contribute?',
    answer:
      "Our code extracts well skills but can't be perfect. that is why we need your help either by visiting  our GitHub repository or joining the discussion to stay in the loop ",
  },
  {
    question: 'What is the motivation behind skillner ?',
    answer:
      'Skillner is only a part of a toolkit that contains not only code but also datasets to enrich your apps.  we hope it will be the first option when building labor-related application.',
  },

  // More questions...
];

export default function Faqs() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Reach out to{' '}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                us
              </a>{' '}
              .
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
