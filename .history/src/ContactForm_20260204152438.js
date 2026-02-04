import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    name: '',
    telephone: '',
    email: '',
    sujet: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Configuration EmailJS - Remplacez par vos propres clés
const serviceID = 'service_hmjvp1m'; // Votre Service ID
const templateID = 'Portfolio_template'; // Votre Template ID
const publicKey = 'DKSIxFpd_pd32N-Za'; // Votre Clé Publique

      const templateParams = {
        from_firstname: formData.firstname,
        from_name: formData.name,
        from_phone: formData.telephone,
        from_email: formData.email,
        subject: formData.sujet,
        message: formData.message,
        to_name: 'Oussama SEYID JEBARI'
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubmitStatus('success');
      // Réinitialiser le formulaire
      setFormData({
        firstname: '',
        name: '',
        telephone: '',
        email: '',
        sujet: '',
        message: ''
      });

      // Masquer le message de succès après 5 secondes
      setTimeout(() => setSubmitStatus(null), 5000);

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="my-20 px-4 text-white">
      <h2 className="text-4xl font-bold mb-4 text-center mt-20">Contactez-moi</h2>
      <div className="relative top-1/2 w-1/3 mx-auto mb-10 h-0.5 bg-primary transform -translate-y-1/2 z-0 hidden sm:block" />
      
      <div className="max-w mx-auto bg-gray-100 p-8 rounded-lg text-gray-800">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-gray-800">
          
          {/* Message de succès */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              ✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
            </div>
          )}

          {/* Message d'erreur */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
               Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="firstname" className="block text-xl font-medium mb-2">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              maxLength="100"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-xl font-medium mb-2">
              Prénom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              maxLength="100"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="telephone" className="block text-xl font-medium mb-2">
              Tél. <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Ex: +33 6 12 34 56 78"
              pattern="^(\+?[0-9]{1,3})?[0-9\s]{9,15}$"
              title="Entrez un numéro valide : 06 12 34 56 78 ou +33612345678"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-xl font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Entrez une adresse email valide"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="sujet" className="block text-xl font-medium mb-2">
              Sujet <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="sujet"
              name="sujet"
              value={formData.sujet}
              onChange={handleChange}
              maxLength="200"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-xl font-medium mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Écrivez votre message ici..."
              rows="5"
              maxLength="2000"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-primary text-white font-bold py-2 px-6 rounded transition-colors duration-300 ${
              isSubmitting 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-blue-900'
            }`}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

