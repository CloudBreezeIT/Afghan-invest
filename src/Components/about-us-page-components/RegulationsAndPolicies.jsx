import React from "react";

export default function RegulationsAndPolicies() {
  const policies = [
    {
      title: "Privacy Policy",
      description:
        "Our privacy policy outlines how we collect, use, and protect your personal information.",
    },
    {
      title: "Terms of Service",
      description:
        "These terms govern your use of our services and outline your rights and responsibilities.",
    },
    {
      title: "Refund Policy",
      description:
        "Learn about our refund process, eligibility, and how to request a refund.",
    },
    {
      title: "Cookie Policy",
      description:
        "This policy explains how we use cookies and similar technologies on our website.",
    },
  ];

  const faqs = [
    {
      question: "How can I access the full terms and conditions?",
      answer: "You can view the full terms and conditions on our Terms of Service page.",
    },
    {
      question: "What should I do if I have concerns about my privacy?",
      answer: "Please contact our support team for any privacy-related concerns or questions.",
    },
    {
      question: "How do I request a refund?",
      answer: "To request a refund, please visit our Refund Policy page for detailed instructions.",
    },
    {
      question: "What types of cookies do you use?",
      answer: "We use essential cookies to operate our website and analytics cookies to improve user experience.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100 pb-8">
      {/* Hero Section */}
      <div
        className="w-full min-h-96 mt-[64px] flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2012/10/26/03/11/children-63175_1280.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-center text-4xl font-bold shadow-lg">
          Regulations and Policies
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold mb-10 text-mstheme">
          Important Policies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {policy.title}
              </h3>
              <p className="text-gray-600">{policy.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs Section */}
      <div className="w-full max-w-5xl mx-auto px-4 py-16 bg-gray-200 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-bold mb-10 text-mstheme">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
