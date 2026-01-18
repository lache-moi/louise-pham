function FAQ() {
  const faqContent = {
    questions: [
      {
        question: 'What kind of support do you offer?',
        answer: 'Short-term, capacity-aware occupational therapy for adults navigating life after illness, chronic health challenges, or major life transitions. Support focuses on routines, energy, and everyday functioning.'
      },
      {
        question: 'Is this therapy or counselling?',
        answer: 'No. This is occupational therapy. While reflection may be part of sessions, the focus is on practical changes to daily life rather than psychotherapy or counselling.'
      },
      {
        question: 'Who is this service for?',
        answer: 'Adults (18+) who are medically stable but finding daily life harder than expected, particularly following illness, mental health challenges, or significant life change.'
      },
      {
        question: 'Who is this service not suitable for?',
        answer: 'This practice does not provide crisis or emergency mental health support, psychotherapy, or open-ended weekly therapy.'
      },
      {
        question: 'What does "capacity-aware" mean?',
        answer: 'Working with what is realistically available — physically, cognitively, and emotionally — and planning for fluctuation rather than pushing through limits.'
      },
      {
        question: 'How are sessions structured?',
        answer: 'Support is provided in short-term blocks of 4–6 sessions, typically fortnightly, with clear goals and a planned ending.'
      },
      {
        question: 'Do you offer a free consultation?',
        answer: 'A complimentary 15–20 minute phone call is available to explore fit and clarify next steps. This is not a therapy session.'
      },
      {
        question: 'Do you work with NDIS participants?',
        answer: 'Yes. Services are available to NDIS self-managed and plan-managed participants. NDIA-managed funding is not accepted.'
      },
      {
        question: 'Do you offer Medicare rebates?',
        answer: 'No. This practice does not bill Medicare.'
      },
      {
        question: 'How do I get started?',
        answer: 'You\'re welcome to get in touch via the enquiry form to explore whether this support may be a good fit.'
      }
    ]
  }

  return (
    <>
      <h1 className="page-title">Frequently Asked Questions</h1>

      {faqContent.questions.map((item, index) => (
        <section key={index}>
          <h2>{item.question}</h2>
          <p>{item.answer}</p>
        </section>
      ))}
    </>
  )
}

export default FAQ
