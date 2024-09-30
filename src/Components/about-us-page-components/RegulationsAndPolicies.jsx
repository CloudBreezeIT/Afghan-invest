import React from "react";
import { useTranslation } from "react-i18next";

export default function RegulationsAndPolicies() {
  const { t } = useTranslation();
  const policies = [
    {
      title: t("regAndPol-imp-pol-1st-card-title"),
      description:
        t("regAndPol-imp-pol-1st-card-desc"),
    },
    {
      title: t("regAndPol-imp-pol-2nd-card-title"),
      description:
      t("regAndPol-imp-pol-2nd-card-desc"),
    },
    {
      title: t("regAndPol-imp-pol-3rd-card-title"),
      description:
      t("regAndPol-imp-pol-3rd-card-desc"),
    },
    {
      title: t("regAndPol-imp-pol-4th-card-title"),
      description:
      t("regAndPol-imp-pol-4th-card-desc"),
    },
  ];

  const faqs = [
    {
      question: t("regAndPol-freq-Ques-1"),
      answer: t("regAndPol-freq-Ques-1-answer"),
    },
    {
      question: t("regAndPol-freq-Ques-2"),
      answer: t("regAndPol-freq-Ques-2-answer"),
    },
    {
      question: t("regAndPol-freq-Ques-3"),
      answer:t("regAndPol-freq-Ques-3-answer"),
    },
    {
      question: t("regAndPol-freq-Ques-4"),
      answer: t("regAndPol-freq-Ques-4-answer"),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100 pb-8">
      {/* Hero Section */}
      <div
        className="w-full min-h-96 mt-[64px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2012/10/26/03/11/children-63175_1280.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
          {t("regAndPol-main-title")}
          </h1>
          <p className="text-xl mb-6">
          {t("regAndPol-main-desc")}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold mb-10 text-mstheme">
        {t("regAndPol-imp-pol-main-title")}
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
          {t("regAndPol-freq-Ques-main-Title")}
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
