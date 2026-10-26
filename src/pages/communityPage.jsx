import React, { useId, useState, useEffect } from 'react';
import './CommunityPage.css';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="community-faq-item">
      <h2>
        <button
          type="button"
          id={`${id}-trigger`}
          aria-expanded={open}
          aria-controls={`${id}-answer`}
          onClick={() => setOpen(value => !value)}
        >
          <span>{question}</span>
          <span className="community-faq-icon" aria-hidden="true">
            {open ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
          </span>
        </button>
      </h2>
      <div id={`${id}-answer`} hidden={!open} aria-labelledby={`${id}-trigger`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

const CommunityPage = () => {
  useEffect(() => {
    document.title = 'Community Guidelines | PeakTew';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="community-page">
      <section className="community-guidelines" aria-labelledby="community-title">
        <h1 id="community-title">Respect, Safety, Connection</h1>
        <p className="community-intro">
          At PeakTew, we believe in building a community that's as vibrant and welcoming as it is diverse. Here's how we do it:
        </p>
        <div className="community-rules">
          {[
            ["1. Respect", "We're all here to connect, so treat every interaction with kindness and respect."],
            ["2. Safety First", "Your safety is our priority. Our \"Emergency button\" and supportive community are here to assist you in case of danger. Together we create a safe and welcoming environment for everyone."],
            ["3. Authenticity", "Be yourself! PeakTew is a place where you can be genuine and authentic without fear of judgment."],
            ["4. Inclusivity", "Embrace diversity and celebrate what makes each of us unique. At PeakTew, we welcome everyone."],
            ["5. Privacy", "Your privacy matters. We're committed to protecting your data and giving you control over your personal information."],
            ["6. Contribution", "Be an active participant in our community. Share your experiences, support local businesses, get involved in social initiatives that matter to you."],
            ["7. Compliance", "Abide by standards and ensure your actions contribute positively to our environment. Report any misconduct or suspicious behavior to maintain the integrity and safety of our community. Any breach of the guidelines will lead to your account being deactivated."],
            ["8. One Account Per Person", "You will only be able to create one PeakTew account and cannot share your account. Infringing this will lead to a permanent ban from all PeakTew-related platforms."],
            ["9. Abide By The Law", "Illegal content or activities are strictly prohibited. You cannot use PeakTew to buy or sell drugs, or counterfeit goods, or seek assistance for any unlawful actions."],
          ].map(([title, description]) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{description}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="community-faq" aria-label="Frequently asked questions">
        {[
          ["What makes PeakTew different from other social media apps?", "PeakTew isn’t about endless scrolling, it’s about creating real-world connections. From meeting new friends to discovering events and planning activities, we focus on bringing people together in meaningful ways."],
          ["How does PeakTew work?", "PeakTew uses cutting-edge technology to connect you with people, places, and opportunities in your area. Simply set your preferences and let PeakTew do the rest. You'll receive personalized recommendations based on your interests and proximity, making it easy to discover new experiences and forge meaningful connections."],
          ["Is PeakTew safe to use?", "Absolutely! Your safety is our top priority. We've implemented robust safety features, including user verification and community reporting tools, to ensure a secure and welcoming environment for all our users."],
          ["Can I find job or volunteer opportunities on PeakTew?", "Yes! PeakTew offers features like Job Offers and Associations & non-profit organizations to help you find employment or volunteer opportunities in your community. Whether you're looking for your dream job or a chance to give back, PeakTew has you covered."],
          ["How does PeakTew protect my privacy?", "We take your privacy seriously. Your data is encrypted and securely stored, and we never share your personal information with third parties without your consent. You have full control over your profile visibility and can adjust your privacy settings at any time."],
          ["What makes PeakTew different from other social networks?", "Unlike traditional social networks that keep you glued to your screen, PeakTew encourages you to get out and explore the world around you. Our innovative features like Hotspots and Personalised Suggested Journey make it easy to discover new places, meet interesting people, and create unforgettable memories. Join PeakTew today and start living life to the fullest!"],
          ["How can I report inappropriate behavior or content on PeakTew?", "If you encounter any inappropriate behavior or content on PeakTew, please report it to our moderation team immediately. You can do this by selecting the \"Report\" option within the app or contacting our support team directly at support@peaktew.com. We take all reports seriously and will take appropriate action to address any violations of our community guidelines."],
          ["I think my account has been hacked, what should I do?", "If you suspect that your account has been hacked, please take immediate action. First, contact us right away at support@peaktew.com so we can assist you in securing your account. Additionally, consider informing people in your surroundings about the situation."],
          ["What should I do if I encounter a dangerous situation in real life while using PeakTew?", "When using PeakTew, you are provided with numerous safety features, our main one being the “emergency button”. In the encounter with a dangerous individual and/or situation, the press of this button will alert all PeakTew users in your direct surroundings and share your location."],
          ["What happens if somebody breaches the Community Guidelines?", "As detailed in the “Compliance” section of our guidelines, any breach of the guidelines will lead to your account being deactivated. Each individual is entitled to one account, which cannot be shared with someone else."],
          ["How can I avoid being tracked while using PeakTew?", "The PeakTew app does not enable your current location to be tracked. A user can only detect your presence within a certain radius (50m /150ft) but will be unable to use our app to obtain your exact location."],
        ].map(([q, a]) => (
          <FaqItem key={q} question={q} answer={a}/>
        ))}
      </section>
    </main>
  );
}

export default CommunityPage;
