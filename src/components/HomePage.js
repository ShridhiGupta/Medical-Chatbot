import React from "react";
import "./../styles/HomePage.css";

function HomePage({ onGetStarted }) {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="logo">LifeSense AI</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#security">Security</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Advanced AI Health Assistant</h1>
          <p className="hero-subtitle">
            Get instant healthcare answers powered by advanced AI technology
          </p>
          <button className="cta-button" onClick={onGetStarted}>
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <div className="floating-card">
            <div className="card-icon">💬</div>
            <p>Instant AI Responses</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Why Choose LifeSense AI</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Answers</h3>
            <p>Get immediate responses to your health-related questions</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Privacy First</h3>
            <p>Your data is encrypted and secure with industry standards</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Evidence Based</h3>
            <p>Answers backed by medical research and professional sources</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Accurate</h3>
            <p>Advanced AI trained on comprehensive medical databases</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💾</div>
            <h3>Save History</h3>
            <p>Keep track of your conversations and health inquiries</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Follow-ups</h3>
            <p>Get suggested follow-up questions for deeper insights</p>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="security">
        <h2>Security & Compliance</h2>
        <div className="security-content">
          <div className="security-text">
            <h3>Your Health Data is Protected</h3>
            <p>
              LifeSense AI uses industry-standard data encryption and follows
              strict privacy protocols to keep your information safe.
            </p>
            <ul className="security-list">
              <li>✓ End-to-end encryption</li>
              <li>✓ HIPAA compliant</li>
              <li>✓ No data retention</li>
              <li>✓ GDPR compliant</li>
            </ul>
          </div>
          <div className="security-badges">
            <div className="badge">🔐 HIPAA</div>
            <div className="badge">🌍 GDPR</div>
            <div className="badge">🛡️ SOC 2</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Ask Your Question</h3>
            <p>Type any health-related question in simple language</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Get AI Response</h3>
            <p>Receive instant, accurate answers from our AI assistant</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Explore More</h3>
            <p>Ask follow-up questions and get detailed information</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>Is my data stored?</h4>
            <p>
              No, we don't retain chat history. All conversations are secure
              and encrypted.
            </p>
          </div>
          <div className="faq-item">
            <h4>Is it medically accurate?</h4>
            <p>
              Yes, our AI is trained on comprehensive medical databases and
              professional sources.
            </p>
          </div>
          <div className="faq-item">
            <h4>Can I use it for diagnosis?</h4>
            <p>
              Our AI provides information and insights, but always consult a
              healthcare professional for diagnosis.
            </p>
          </div>
          <div className="faq-item">
            <h4>Is there a mobile app?</h4>
            <p>
              Currently available on web. Mobile apps are in development.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of users getting instant health insights</p>
        <button className="cta-button large" onClick={onGetStarted}>
          Start Chatting Now
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 LifeSense AI. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
