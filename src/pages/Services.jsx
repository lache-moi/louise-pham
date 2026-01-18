function Services() {
  const servicesContent = {
    introduction: [
      'This practice offers short-term, capacity-aware occupational therapy for adults navigating life after illness, chronic health challenges, or major life transitions.',
      'Support is structured, practical, and grounded in everyday functioning. Services are delivered in defined blocks with clear goals and planned endings.'
    ],
    coreService: {
      title: 'Gentle Re-Entry OT Block',
      description: [
        'The Gentle Re-Entry OT Block is designed to support adults who are medically stable but finding daily life harder than expected.',
        'This block focuses on rebuilding routines, managing energy, and restoring confidence in everyday living — without pressure to rush or meet external recovery timelines.'
      ],
      structure: [
        '4–6 individual occupational therapy sessions',
        '60 minutes per session',
        'Typically delivered fortnightly',
        'Over approximately 8–12 weeks',
        'Telehealth as the primary mode of delivery'
      ],
      whatItSupports: [
        'fatigue and energy management',
        'pacing and activity planning',
        'rebuilding daily routines and structure',
        'managing overwhelm and decision fatigue',
        'adjusting to changes in identity or roles',
        'return to work or study planning',
        'occupational balance and participation',
        'adapting tasks or environments to current capacity'
      ],
      howItWorks: [
        'Initial sessions focus on understanding daily life, routines, and capacity',
        'Goals are collaboratively identified and prioritised',
        'Strategies are tested and adjusted in real-life contexts',
        'Final sessions focus on consolidation and confidence beyond therapy',
        'The aim is to support independence, not ongoing therapy.'
      ],
      sessionFrequency: [
        'Sessions are typically scheduled fortnightly to allow time for integration and real-life practice.',
        'Weekly sessions may be considered short-term where clinically appropriate. Ongoing weekly therapy is not offered as part of this model.'
      ]
    },
    optionalSupport: [
      'In some cases, a one-off session may be appropriate — for example, to support decision-making, review routines, or plan next steps.',
      'Single-session consults are limited and offered only where appropriate within scope.'
    ],
    funding: [
      'Services are available to:',
      'private paying clients',
      'NDIS self-managed participants',
      'NDIS plan-managed participants',
      'This practice does not bill Medicare.',
      'Fees are discussed upfront and outlined clearly before services commence.'
    ],
    notOffered: [
      'To ensure ethical, sustainable care, this practice does not provide:',
      'crisis or emergency mental health support',
      'acute psychiatric intervention',
      'psychotherapy or counselling services',
      'on-call or between-session support',
      'high-frequency or open-ended therapy',
      'urgent or medico-legal reporting',
      'If you require a different type of support, referrals can be discussed.'
    ],
    rightFit: [
      'This service may be a good fit if you are:',
      'seeking short-term, structured occupational therapy',
      'wanting support that respects fluctuating capacity',
      'not in acute crisis',
      'open to a slower, more sustainable pace',
      'If you\'re unsure, you\'re welcome to explore the "Is this the right fit?" page or reach out with questions.'
    ],
    nextSteps: [
      'Enquiries are welcome.',
      'This practice opens with defined intake periods and limited availability to support paced, intentional care.',
      'If you\'d like to explore whether this service may be appropriate for you, you can get in touch via the enquiry form.'
    ]
  }

  return (
    <>
      <h1 className="page-title">Services</h1>

      {servicesContent.introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <section>
        <h2>Core service</h2>
        <h3>{servicesContent.coreService.title}</h3>
        {servicesContent.coreService.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <h4>Structure</h4>
        <ul className="support-areas-list">
          {servicesContent.coreService.structure.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>Sessions are collaborative and paced to reflect current capacity.</p>

        <h4>What this block may support</h4>
        <p>Intervention is individualised, but commonly includes support with:</p>
        <ul className="support-areas-list">
          {servicesContent.coreService.whatItSupports.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>The focus is on translating insight into sustainable daily living.</p>

        <h4>How the block works</h4>
        <p>Support is delivered in a clear and contained way:</p>
        <ul className="support-areas-list">
          {servicesContent.coreService.howItWorks.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4>Session frequency</h4>
        {servicesContent.coreService.sessionFrequency.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section>
        <h2>Optional additional support</h2>
        <h3>Single-session consult</h3>
        {servicesContent.optionalSupport.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section>
        <h2>Funding and fees</h2>
        <p>{servicesContent.funding[0]}</p>
        <ul className="support-areas-list">
          {servicesContent.funding.slice(1, 4).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {servicesContent.funding.slice(4).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section>
        <h2>What this practice does not offer</h2>
        <p>{servicesContent.notOffered[0]}</p>
        <ul className="support-areas-list">
          {servicesContent.notOffered.slice(1, 7).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{servicesContent.notOffered[7]}</p>
      </section>

      <section>
        <h2>Is this the right fit?</h2>
        <p>{servicesContent.rightFit[0]}</p>
        <ul className="support-areas-list">
          {servicesContent.rightFit.slice(1, 5).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{servicesContent.rightFit[5]}</p>
      </section>

      <section>
        <h2>Next steps</h2>
        {servicesContent.nextSteps.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </>
  )
}

export default Services
