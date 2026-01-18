function Home() {
  const homeContent = {
    welcome: {
      header: 'Occupational Therapy for Life Re-entry after Illness and Major Transitions',
      subheader: 'Short-term, capacity-aware support for adults rebuilding routines, energy, and daily life – at a pace that respects where you’re at'
    },
    supportAreas: [
      'Life after cancer or serious illness',
      'Chronic illness and fluctuating energy',
      'Fatigue, pacing, and activity management',
      'Disrupted routines or loss of structure',
      'Changes in identity, roles, or sense of self',
      'Mental health challenges affecting daily life',
      'Overwhelm with work, study, or daily responsibilities',
      'Returning to work, study, or community roles',
      'Grief and adjustment following health or life changes'
    ],
    approach: [
      'I work in a way that is personalised, capacity-aware, and grounded in everyday life.',
      'This practice is designed to be a calm, supportive space where you can feel understood without pressure to rush or perform recovery. Support is shaped around your current capacity, priorities, and the realities of your daily life.',
      'Together, we explore what has shifted for you, identify what\'s making everyday life harder than it needs to be, and build practical strategies that support participation, confidence, and sustainability. Your strengths, values, and lived experience guide the work — not fixed expectations or timelines.',
      'The focus is on helping you reconnect with daily life in a way that feels steady, realistic, and your own.'
    ],
    aboutMe: [
      'Hi, I\'m Louise',
      'I\'m an Occupational Therapist with experience supporting adults through illness recovery, chronic health conditions, and major life transitions.',
      'I work with people navigating the functional and emotional impacts of cancer survivorship, chronic illness, mental health challenges, and periods of significant change. This includes supporting individuals who feel medically "well" but are struggling to regain structure, confidence, or participation in daily life.',
      'My work integrates evidence-based occupational therapy frameworks with a capacity-aware, recovery-oriented approach. Intervention is practical, collaborative, and focused on helping people rebuild routines, roles, and everyday functioning in a way that is sustainable and realistic.'
    ]
  }

  return (
    <div className="home-page">
      {/* Section 1: Welcome with images */}
      <section className="home-section welcome-section">
        <div className="welcome-image left-image"></div>
        <div className="welcome-center">
          <h2>{homeContent.welcome.header}</h2>
          <p className="welcome-subheader">{homeContent.welcome.subheader}</p>
        </div>
        <div className="welcome-image right-image"></div>
      </section>

      {/* Section 2: Areas I commonly support */}
      <section className="home-section">
        <h2 className="section-title">Areas I commonly support</h2>
        <p>I work with adults navigating the everyday impacts of illness, mental health challenges, and major life transitions.</p>
        <p>This support may be helpful if you are experiencing:</p>
        <ul className="support-areas-list">
          {homeContent.supportAreas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </section>

      {/* Section 3: My Approach */}
      <section className="home-section">
        <h2 className="section-title">My Approach</h2>
        {homeContent.approach.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      {/* Quote Section */}
      <section className="home-section quote-section">
        <blockquote className="stylistic-quote">
          <p className="quote-text">"And now that you don't have to be perfect, you can be good."</p>
          <p className="quote-author">— John Steinbeck</p>
        </blockquote>
      </section>

      {/* Section 4: About Me */}
      <section className="home-section">
        <h2 className="section-title">About Me</h2>
        {homeContent.aboutMe.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </div>
  )
}

export default Home
