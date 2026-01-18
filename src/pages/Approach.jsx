function Approach() {
  const approachContent = {
    introduction: [
      'This practice offers occupational therapy that is grounded, structured, and responsive to real life.',
      'My approach is informed by evidence-based occupational therapy frameworks and shaped by an understanding that recovery, adjustment, and participation are rarely linear. Capacity can fluctuate, priorities change, and daily life often needs to be rebuilt rather than resumed.',
      'Support here is practical, collaborative, and intentionally paced.'
    ],
    capacityAware: [
      'Capacity includes physical energy, cognitive load, emotional bandwidth, nervous system regulation, and environmental demands.',
      'A capacity-aware approach means working with what is realistically available, planning for fluctuation, and prioritising sustainability over speed. Limits are treated as information, not failure.'
    ],
    groundedInLife: [
      'Occupational therapy focuses on how people live their lives — their routines, roles, environments, and daily activities.',
      'Intervention centres on identifying what makes daily life harder than it needs to be and making practical adjustments that support participation, confidence, and occupational balance.',
      'Reflection is always linked back to function.'
    ],
    evidenceBased: [
      'Intervention is informed by established occupational therapy models, including:',
      'Model of Human Occupation (MOHO)',
      'Person–Environment–Occupation (PEO) model',
      'Occupational balance principles',
      'These frameworks provide structure while allowing care to remain individualised.'
    ],
    clearStructure: [
      'Support is delivered in short-term blocks with defined goals and planned endings. This structure supports independence, integration, and ethical care.',
      'This practice does not provide crisis support, psychotherapy, or open-ended weekly therapy.'
    ],
    collaborative: [
      'Sessions are collaborative and practical. Lived experience is respected, strategies are developed together, and the aim is confidence and capability beyond therapy.'
    ],
    nextSteps: [
      'If this approach feels aligned, you\'re welcome to explore the Services page or reach out via the enquiry form to discuss fit.'
    ]
  }

  return (
    <>
      <h1 className="page-title">Approach</h1>

      {approachContent.introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <section>
        <h2>Capacity-aware care</h2>
        {approachContent.capacityAware.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section>
        <h2>Grounded in everyday life</h2>
        {approachContent.groundedInLife.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section>
        <h2>Evidence-based frameworks</h2>
        <p>{approachContent.evidenceBased[0]}</p>
        <ul className="support-areas-list">
          {approachContent.evidenceBased.slice(1, 4).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{approachContent.evidenceBased[4]}</p>
      </section>

      <section>
        <h2>Clear structure and boundaries</h2>
        {approachContent.clearStructure.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section>
        <h2>Collaborative and respectful</h2>
        {approachContent.collaborative.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section>
        <h2>Next steps</h2>
        {approachContent.nextSteps.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </>
  )
}

export default Approach
