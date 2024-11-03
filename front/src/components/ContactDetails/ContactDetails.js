import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './ContactDetails.css';

const ContactDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const form = useRef();

  const contactInfo = [
    { icon: Phone, title: 'Téléphone', content: '+33 766558150'},
    { icon: MapPin, title: 'Adresse', content: '105 allée Francois Mitterand , Rouen 76000' },
    { icon: Mail, title: 'Email', content: 'gajanraj.m@gmail.com' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    emailjs.sendForm('service_g37ktaa', 'template_j15hfye', form.current, 'FEnvAMGXOTyDcx1gs')
      .then((result) => {
        console.log(result.text);
        setStatusMessage("Message envoyé ! Je vous répondrai bientôt.");
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
        setStatusMessage("Une erreur s'est produite. Veuillez réessayer plus tard.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact-details">
      <div className="container">
        <h2 className="section-title">Contactez-moi</h2>
        <div className="contact-grid">
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon-wrapper">
                  <item.icon className="contact-icon" />
                </div>
                <div className="contact-text">
                  <h3 className="contact-item-title">{item.title}</h3>
                  <p className="contact-item-content">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <h3 className="form-title">Envoyez-moi un message</h3>
            {statusMessage && <div className="status-message" data-testid="status-message">{statusMessage}</div>}
            <div className="form-group">
              <label htmlFor="from_name" className="form-label">Votre nom</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                className="form-input"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="reply_to" className="form-label">Votre email</label>
              <input
                type="email"
                id="reply_to"
                name="reply_to"
                className="form-input"
                placeholder="Votre Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Votre message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Votre message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              <Send className="button-icon" /> {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;