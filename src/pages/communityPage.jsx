import React, { useId, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import DarkModeToggle from '../components/DarkModeToggle';
import fullRing from '../assets/full_big_ring.webp';
import './CommunityPage.css';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const RULES = [
  ["Compliance", "Follow our rules and ensure your actions contribute positively to our environment. Report any misconduct or suspicious behavior to maintain the integrity and safety of our community. Any breach of the guidelines will lead to your account being deactivated."],
  ["Abide by the Law", "Illegal content or activities are strictly prohibited. You cannot use PeakTew to engage in, promote, coordinate, or seek assistance with any unlawful action."],
  ["No Harassment or Bullying", "Harassment, bullying, intimidation, hate speech, discrimination, threats, or unwanted contact will not be tolerated."],
  ["Safety First", "Your safety is our priority. Our “emergency button” can notify people nearby to help as you wait for appropriate emergency responders. You can also report inappropriate behavior or content to the moderation team. Together, we create a safe and welcoming environment for everyone."],
  ["Privacy", "Your privacy matters. We're committed to protecting your data and giving you control over your personal information. If you have any questions or concerns, please contact us."],
  ["One account per person", "You are only allowed one PeakTew account and cannot share your account. Infringing this will result in a permanent account suspension from all PeakTew-related platforms."],
  ["Honest Representation", "Use accurate information and represent yourself truthfully. Fake profiles, impersonation, and misleading information are prohibited."],
  ["Authenticity", "Be yourself. PeakTew is a place where you can be genuine and authentic without the pressure of judgment, constant approval, or social media validation."],
  ["Respect", "We're all here to connect, so treat every interaction with kindness and respect."],
  ["Belonging", "Embrace diversity and celebrate what makes each of us unique. At PeakTew, we welcome everyone."],
  ["Contribution", "Be an active participant in your community. Share your experiences, support local businesses, and get involved in social initiatives that matter to you."],
  ["Have Fun", "PeakTew is here to help you enjoy new experiences. Stay open, be positive, and make the most of it."],
];

const FAQ_GROUPS = [
  {
    title: "Getting Started",
    items: [
      ["How does PeakTew work?", "PeakTew connects you with people, places, and events in your area. Simply set your status and preferences and let us do the rest. You'll receive personalized recommendations based on your interests and proximity, making it easy for you to discover what’s happening in your surroundings."],
      ["What makes PeakTew different from other social networks?", "We designed PeakTew around you in real-time, helping you discover nearby opportunities as they happen. Instead of encouraging endless scrolling, we bring people, places, and events together in one simple experience, with custom notifications that appear when the timing is right. With features like Status Matching, we make it easier for you to find opportunities that match your interests, activities, or plans based on what you add to your status."],
      ["How do I sign up for PeakTew?", ["You can download PeakTew from the App Store or Google Play Store. After downloading the app, however, we are currently operating through a whitelist system in selected areas and universities. If the app is not yet available in your location, you can join the waitlist directly through the app. If many people from the same area join the waitlist, we will consider opening access there.", "You can also contact us through social media if you believe your university, student association, or community could be a strong fit for collaboration or early access."]],
    ],
  },
  {
    title: "Features",
    items: [
      ["What are the “Peals”?", "A peal is the real-time notification you receive when another person, place, or event matching your interests is within a 50-meter/55-yards/150-foot radius of you."],
      ["How do I send someone a direct message on the PeakTew app?", "Unlike traditional platforms, there is no direct messaging feature in the app. If you’d like to connect with someone after viewing their profile, simply look around your surroundings. Once you spot them, you can start a conversation in person."],
    ],
  },
  {
    title: "Safety and Security",
    items: [
      ["Is PeakTew safe to use?", "Absolutely! Your safety is our top priority. We've implemented robust safety features, including user verification and community reporting tools, to ensure a secure and welcoming environment for all our users."],
      ["What safety tools are available on PeakTew?", ["PeakTew includes several safety tools designed to help users stay in control of their visibility, interactions, and location. Users can turn the app off at any time with the online/offline button, which stops them from being visible and prevents them from receiving notifications.", "For location safety, our app uses an approximate 50-meter/55-yards/150-foot range while operating, meaning other users cannot track your exact live location. If a user is in danger, they can press the emergency button, which alerts nearby users and shares their exact location so others can assist. We also allow users to hide their profile from specific people or block certain users from seeing their profile. Additionally, users can report inappropriate behavior or content to the moderation team."]],
      ["I think my account has been hacked. What should I do?", "If you suspect that your account has been hacked, please take immediate action. First, contact us right away at support@peaktew.com, so we can assist you in securing your account. Additionally, consider informing the people in your surroundings about the situation."],
    ],
  },
  {
    title: "Privacy",
    items: [
      ["How does PeakTew protect my privacy?", "We take your privacy seriously. Your data is encrypted and securely stored, and we never share your personal information with third parties without your consent. You have full control over your profile visibility and can adjust your privacy settings at any time. If you have any questions or concerns, please contact us at support@peaktew.com."],
      ["Can other users track my exact location? Is any location information shared?", "The PeakTew app does not enable real-time, live location tracking. Users can only detect your presence within a small radius, but will be unable to use our app to obtain your exact location. Your exact location is only shared when you press the emergency button. In that case, your location is shared with nearby users so they can assist you."],
    ],
  },
  {
    title: "Community and Conduct",
    items: [
      ["What happens if somebody breaches the Community Guidelines?", "As detailed in the “Compliance” section of our guidelines, any breach of the guidelines may result in disciplinary action, including temporary suspension or permanent account deactivation. Each individual is entitled to one account, which cannot be shared."],
      ["How can I report inappropriate behavior or content on PeakTew?", "If you encounter any inappropriate behavior or content on PeakTew, please report it to our moderation team immediately. You can do this by selecting the “Report” option in the app, submitting a request through “Contact Support” in the app, or emailing our support team directly at support@peaktew.com. We take all reports seriously and will take appropriate action to address any violations of our community guidelines."],
    ],
  },
  {
    title: "Technical Support",
    items: [
      ["What devices are supported by PeakTew?", "The PeakTew app is available on compatible iOS and Android devices. You can download the app from the App Store or Google Play Store if it is available in your region or whitelisted area."],
      ["Why am I not receiving Peals or notifications?", "If you are not receiving Peals or notifications, check that notifications and location permissions are enabled for PeakTew in your device settings. You should also make sure that you are online in the app and that your notification preferences, such as people, places, or events, are turned on. To receive the highest number of notifications, ensure Status Matching is turned off. When Status Matching is off, the app can show you all the opportunities nearby."],
    ],
  },
  {
    title: "Human Resources",
    items: [
      ["I’m interested in working for PeakTew. How do I apply?", "If you are interested in joining our team and believe you share our values, motivation, and vision, you can find openings on our LinkedIn page and apply directly. Alternatively, you can also email us at careers@peaktew.com with your resume, a short explanation of who you are, and, if relevant, a cover letter or portfolio. Our team will review your application and contact you if there is a potential fit."],
    ],
  },
];

function Answer({ answer }) {
  return Array.isArray(answer)
    ? answer.map(paragraph => <p key={paragraph}>{paragraph}</p>)
    : <p>{answer}</p>;
}

export function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="community-faq-item">
      <h4>
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
      </h4>
      <div id={`${id}-answer`} hidden={!open} aria-labelledby={`${id}-trigger`}>
        <Answer answer={answer} />
      </div>
    </div>
  );
}

function FaqGroup({ title, items }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="community-faq-group" data-open={open}>
      <h3>
        <button
          type="button"
          id={`${id}-trigger`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen(value => !value)}
        >
          <span>{title}</span>
          <span className="community-faq-icon" aria-hidden="true">
            {open ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
          </span>
        </button>
      </h3>
      <div id={`${id}-panel`} role="region" hidden={!open} aria-labelledby={`${id}-trigger`} className="community-faq-group-panel">
        {items.map(([question, answer]) => (
          <FaqItem key={question} question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
}

export function HomeFaq() {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="community-page home-faq">
      <section className="community-faq" aria-labelledby={`${id}-title`}>
        <h2 id={`${id}-title`}>
          <button
            type="button"
            className="home-faq-trigger"
            aria-expanded={open}
            aria-controls={`${id}-cards`}
            onClick={() => setOpen(value => !value)}
          >
            <span className="home-faq-label">
              <span>FAQs</span>
              {open ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
            </span>
            <span className="home-faq-hint">
              {open ? 'Hide frequently asked questions' : 'Show frequently asked questions'}
            </span>
          </button>
        </h2>
        <div id={`${id}-cards`} className="home-faq-cards" hidden={!open}>
          {FAQ_GROUPS.map(group => (
            <FaqGroup key={group.title} title={group.title} items={group.items} />
          ))}
        </div>
      </section>
    </div>
  );
}

const CommunityPage = () => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = 'Community Guidelines | PeakTew';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DarkModeToggle />
      <main className="community-page">
        <div className="community-ring-wrapper" aria-hidden="true">
          <motion.img
            src={fullRing}
            alt=""
            decoding="async"
            className="community-ring"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
          <div className="community-ring-overlay" />
        </div>
        <section className="community-guidelines" aria-labelledby="community-title">
          <h1 id="community-title">Respect, Safety, Connection</h1>
          <p className="community-intro">
            At PeakTew, we believe in building a community that's as vibrant and welcoming as it is diverse. Here's how we do it:
          </p>
          <div className="community-rules">
            {RULES.map(([title, description], index) => (
              <section key={title}>
                <h2>{`${index + 1}. ${title}`}</h2>
                <p>{description}</p>
              </section>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default CommunityPage;
