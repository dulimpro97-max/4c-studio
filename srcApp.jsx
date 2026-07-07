import React from 'react';
import { motion } from 'motion/react';
import { Menu, ArrowRight, Star, CheckCircle } from 'lucide-react';
import './App.css';

// 4C Logo Component
const Logo4C = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="20" height="20" rx="4" fill="#D4AF37" transform="rotate(-25 4 4)" />
    <rect x="12" y="12" width="20" height="20" rx="4" fill="#D4AF37" transform="rotate(-25 12 12)" />
    <text x="8" y="30" fontFamily="Playfair Display" fontSize="20" fontWeight="700" fill="#FFFFFF">4C</text>
  </svg>
);

// Stats Component
const StatItem = ({ number, label }) => (
  <div className="stat-item">
    <span className="stat-number">{number}</span>
    <span className="stat-label">{label}</span>
  </div>
);

// Service Card Component
const ServiceCard = ({ icon, title, description, delay }) => (
  <motion.div
    className="service-card"
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <div className="service-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href="#" className="service-link">
      En savoir plus <ArrowRight size={14} />
    </a>
  </motion.div>
);

// Pillar Card Component
const PillarCard = ({ number, title, description, delay }) => (
  <motion.div
    className="pillar-card"
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <span className="pillar-number">{number}</span>
    <h4>{title}</h4>
    <p>{description}</p>
  </motion.div>
);

function App() {
  const easeOut = [0.16, 1, 0.3, 1];

  return (
    <div className="app">
      {/* ===== NAVBAR ===== */}
      <motion.nav
        className="navbar"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <div className="nav-left">
          <a href="#" className="logo-link">
            <Logo4C />
            <span className="brand-text">4C Studio</span>
          </a>
        </div>

        <ul className="nav-menu">
          <li><a href="#services">Services</a></li>
          <li><a href="#realisations">Réalisations</a></li>
          <li><a href="#process">Processus</a></li>
          <li><a href="#contact" className="cta-nav">Demander un devis</a></li>
        </ul>

        <button className="menu-toggle" aria-label="Menu">
          <Menu size={24} />
        </button>
      </motion.nav>

      {/* ===== HERO ===== */}
      <section className="hero">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
        >
          Agence Digitale Premium
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
        >
          Le digital mérite mieux<br />
          <span>qu'un simple site web.</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: easeOut }}
        >
          Nous concevons des expériences digitales élégantes, performantes et pensées
          pour développer votre activité et valoriser votre image.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: easeOut }}
        >
          <a href="#services" className="btn-primary">Découvrir nos services</a>
          <a href="#realisations" className="btn-secondary">
            Voir nos réalisations <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Hero Stats */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: easeOut }}
        >
          <StatItem number="100+" label="Projets réalisés" />
          <StatItem number="50+" label="Clients satisfaits" />
          <StatItem number="98%" label="Taux de satisfaction" />
          <StatItem number="5★" label="Avis Google" />
        </motion.div>
      </section>

      {/* ===== 4 PILIERS ===== */}
      <section className="pillars" id="pillars">
        <div className="section-header">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nos 4 piliers
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Une approche <span>globale</span> et <span>structurée</span>
          </motion.h2>
        </div>

        <div className="pillars-grid">
          <PillarCard
            number="01"
            title="Cohésion"
            description="Nous unissons stratégie, design et technologie pour des résultats durables."
            delay={0.1}
          />
          <PillarCard
            number="02"
            title="Communication"
            description="Nous créons des expériences claires qui transmettent votre message avec impact."
            delay={0.2}
          />
          <PillarCard
            number="03"
            title="Concept"
            description="Nous imaginons des idées fortes et des concepts qui vous démarquent."
            delay={0.3}
          />
          <PillarCard
            number="04"
            title="Création"
            description="Nous concevons des designs modernes, élégants et pensés pour convertir."
            delay={0.4}
          />
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services" id="services">
        <div className="section-header">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nos expertises
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Des solutions digitales <span>complètes</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Nous créons des expériences digitales sur mesure qui transforment vos idées
            en solutions performantes et durables.
          </motion.p>
        </div>

        <div className="services-grid">
          <ServiceCard
            icon="🌐"
            title="Création de sites web"
            description="Sites vitrines, e-commerce et plateformes sur mesure. Rapides, modernes et performants."
            delay={0.1}
          />
          <ServiceCard
            icon="✒️"
            title="Identité de marque"
            description="Logos, chartes graphiques et univers visuels forts pour marquer les esprits."
            delay={0.2}
          />
          <ServiceCard
            icon="🔍"
            title="Référencement (SEO)"
            description="Optimisation SEO pour améliorer votre visibilité et attirer plus de clients."
            delay={0.3}
          />
          <ServiceCard
            icon="📈"
            title="Marketing digital"
            description="Stratégies ciblées pour atteindre votre audience et générer des conversions."
            delay={0.4}
          />
          <ServiceCard
            icon="⚙️"
            title="Développement sur mesure"
            description="Solutions web robustes et évolutives adaptées à vos besoins métiers."
            delay={0.5}
          />
          <ServiceCard
            icon="🛡️"
            title="Maintenance & support"
            description="Sécurité, mises à jour et support réactif pour une tranquillité d'esprit."
            delay={0.6}
          />
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="process" id="process">
        <div className="section-header">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Notre méthode
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Une méthode <span>claire</span> et <span>éprouvée</span>
          </motion.h2>
        </div>

        <div className="process-grid">
          {[
            { number: '1', title: 'Découverte', desc: 'Analyse des besoins et objectifs.' },
            { number: '2', title: 'Stratégie', desc: 'Définition de la stratégie digitale.' },
            { number: '3', title: 'Création', desc: 'Design et développement sur mesure.' },
            { number: '4', title: 'Lancement', desc: 'Tests, optimisation et mise en ligne.' },
            { number: '5', title: 'Suivi', desc: 'Analyse et optimisation continue.' },
          ].map((step, index) => (
            <motion.div
              key={step.number}
              className="process-step"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="step-number">{step.number}</span>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials" id="testimonials">
        <div className="section-header">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Témoignages
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ils nous font <span>confiance</span>
          </motion.h2>
        </div>

        <div className="testimonials-grid">
          {[
            {
              text: 'Une équipe incroyablement créative et professionnelle. Leur accompagnement a été clé pour notre transformation digitale.',
              name: 'Julien D.',
              role: 'Directeur, Alpine Transport',
            },
            {
              text: '4C Studio a su capturer l\'essence de notre marque. Le site est élégant, rapide et nous a apporté de nouveaux clients.',
              name: 'Sophie M.',
              role: 'Fondatrice, Luxoria Hotels',
            },
            {
              text: 'Un partenariat exceptionnel. Leur expertise technique et leur sens du design ont dépassé nos attentes.',
              name: 'Marc R.',
              role: 'CEO, BVRG Imaginier',
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta" id="contact">
        <motion.div
          className="cta-content"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Prêt à passer<br />au niveau supérieur ?</h2>
          <p>Discutons de votre projet et créons ensemble une présence digitale qui vous distingue.</p>
          <div className="cta-buttons">
            <a href="#" className="btn-primary">Demander un devis</a>
            <a href="#" className="btn-secondary">Voir nos tarifs</a>
          </div>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo4C />
            <span className="footer-brand-name">4C Studio</span>
            <p>Agence digitale premium spécialisée dans la création de sites web, l'identité de marque et le référencement.</p>
          </div>

          <div className="footer-col">
            <h4>Agence</h4>
            <ul>
              <li><a href="#">À propos</a></li>
              <li><a href="#">Notre approche</a></li>
              <li><a href="#">L'équipe</a></li>
              <li><a href="#">Carrières</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Création de sites web</a></li>
              <li><a href="#">Identité de marque</a></li>
              <li><a href="#">Référencement (SEO)</a></li>
              <li><a href="#">Marketing digital</a></li>
              <li><a href="#">Maintenance</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+33685094430">+33 6 85 09 44 30</a></li>
              <li><a href="mailto:dulimbpro97@gmail.com">dulimbpro97@gmail.com</a></li>
              <li>Suisse / France</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 4C Studio - Tous droits réservés.</p>
          <div className="footer-links">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;