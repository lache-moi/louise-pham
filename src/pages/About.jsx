function About() {
  const aboutContent = {
    title: 'Get To Know Me',
    professionalBackground: [
      'I\'m an Occupational Therapist with a background in health, rehabilitation, and psychosocial support, with a particular focus on supporting people through illness recovery and major life transitions.',
      'My professional training and experience have centred on understanding how health, mental wellbeing, environment, and life context intersect to shape how people function in their everyday lives. Through my work, I\'ve supported individuals navigating cancer survivorship, chronic illness, fatigue, mental health challenges, and periods of significant disruption — particularly when medical treatment has ended, but daily life still feels difficult to manage.',
      'What drew me to occupational therapy was its focus on real life. Rather than working solely at the level of symptoms or diagnosis, OT allowed me to sit alongside people as they navigated the practical, emotional, and identity-related impacts of health and life change — and to translate insight into everyday routines, roles, and participation.',
      'Over time, I found myself most drawn to the in-between spaces: listening carefully to how people described their days, noticing where things felt stuck or overwhelming, and working collaboratively to make daily life feel more manageable, meaningful, and sustainable again.',
      'This foundation continues to shape my practice today — supporting adults to rebuild structure, confidence, and participation after illness or major transition, in ways that respect fluctuating capacity and real-world demands.'
    ],
    approachInPractice: [
      'My work is grounded in evidence-based occupational therapy frameworks, including the Model of Human Occupation (MOHO) and the Person–Environment–Occupation (PEO) model. I also draw on capacity-aware, trauma-informed, and recovery-oriented approaches.',
      'In practice, this means I work collaboratively and at a pace that reflects where someone is currently at — physically, cognitively, and emotionally. Therapy focuses on routines, roles, energy management, and participation, rather than pushing toward idealised recovery timelines.',
      'I work within clear scope and boundaries, and support is delivered in short-term blocks with defined goals and planned endings. This structure is intentional, and is designed to support independence, confidence, and sustainability beyond therapy.'
    ],
    whyIDoThisWork: [
      'Through both my professional experience and my own life journey, I\'ve seen how disruptive illness and major life events can be — not just medically, but in how they reshape identity, relationships, and daily life.',
      'There is often an unspoken expectation that once treatment ends, life should return to normal. In reality, capacity can shift, priorities change, and familiar routines may no longer fit. This gap — between surviving and living again — is where much of my work sits.',
      'This practice was created to offer support in that space: care that is practical, thoughtful, and grounded in everyday life, without pressure to rush or perform recovery.',
      'I also believe strongly in care that is sustainable for the clinician. I maintain a small caseload, work with clear boundaries, and engage in supervision and reflective practice so that the work I offer remains ethical, present, and grounded.'
    ],
    personalPerspective: [
      'While my work is grounded in professional training and evidence-based practice, I bring a deep respect for the complexity of lived experience.',
      'I understand how life can change abruptly, how confidence in your body or routines can be shaken, and how rebuilding often looks quieter and slower than expected. I also know the importance of caring for yourself while navigating health, work, and life demands.',
      'Outside of work, I value practices that support regulation and balance - including movement, time in nature, and creating rhythms that are sustainable rather than perfect. Not because I have things figured out, but because I\'ve learned how essential it is to work with capacity rather than against it.'
    ],
    nextSteps: [
      'If this approach feels aligned, you\'re welcome to get in touch to explore whether this support may be a good fit for your current needs.',
      'Enquiries are an opportunity to ask questions and understand how this work is structured. This practice opens with defined intake periods and limited availability to support paced, intentional care.'
    ]
  }

  return (
    <>
      <h1 className="page-title">{aboutContent.title}</h1>

      <section>
        <h2>My professional background</h2>
        {aboutContent.professionalBackground.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section>
        <h2>My approach in practice</h2>
        {aboutContent.approachInPractice.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section>
        <h2>Why I do this work</h2>
        {aboutContent.whyIDoThisWork.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section>
        <h2>A personal perspective</h2>
        {aboutContent.personalPerspective.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section>
        <h2>Next steps</h2>
        {aboutContent.nextSteps.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </>
  )
}

export default About
