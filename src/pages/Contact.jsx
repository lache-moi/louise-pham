import { useState } from 'react'

function Contact() {
  const contactContent = {
    introduction: [
      'If you\'d like to explore whether this style of occupational therapy may be a good fit for your current needs, you\'re welcome to reach out via the enquiry form below.',
      'This practice works with a small caseload and opens with defined intake periods to support paced, intentional care.'
    ]
  }

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredContact: '',
    reasonForEnquiry: '',
    supportLookingFor: '',
    funding: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <h1 className="page-title">Contact</h1>

      {contactContent.introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <section>
        <h2>Enquiry form</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone number (optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="preferredContact">Preferred contact method</label>
            <select
              id="preferredContact"
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="reasonForEnquiry">Reason for enquiry</label>
            <select
              id="reasonForEnquiry"
              name="reasonForEnquiry"
              value={formData.reasonForEnquiry}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="self-referral">Self-referral</option>
              <option value="referral-from-health-professional">Referral from health professional</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="supportLookingFor">What support are you looking for?</label>
            <textarea
              id="supportLookingFor"
              name="supportLookingFor"
              value={formData.supportLookingFor}
              onChange={handleChange}
              rows="4"
              placeholder="A brief overview is enough (e.g. what you're navigating and what you'd like support with)."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="funding">Funding (if known)</label>
            <select
              id="funding"
              name="funding"
              value={formData.funding}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="private">Private</option>
              <option value="ndis-self-managed">NDIS self-managed</option>
              <option value="ndis-plan-managed">NDIS plan-managed</option>
              <option value="unsure">Unsure</option>
            </select>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>
    </>
  )
}

export default Contact
