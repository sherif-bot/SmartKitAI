
import Link from "next/link";

const categories = [
  { icon: "✍️", title: "Écriture IA", description: "Rédigez, corrigez et résumez vos textes.", color: "blue" },
  { icon: "🎨", title: "Création d’images", description: "Donnez vie à vos idées visuelles.", color: "green" },
  { icon: "🎬", title: "Vidéos IA", description: "Découvrez les outils de création vidéo.", color: "pink" },
  { icon: "🎙️", title: "Audio et voix", description: "Explorez la transcription et la voix IA.", color: "purple" },
  { icon: "🎓", title: "Formations", description: "Apprenez à votre rythme, étape par étape.", color: "orange" },
  { icon: "⚡", title: "Productivité", description: "Travaillez plus efficacement au quotidien.", color: "blue" }
];

const tools = [
  { icon: "✦", name: "Assistant IA", type: "Texte", description: "Rédigez, résumez et trouvez des idées.", href: "/outils/assistant" },
  { icon: "🖼️", name: "Création d’images", type: "Image", description: "Préparez vos idées pour la création visuelle.", href: "/outils/assistant" },
  { icon: "🎥", name: "Création vidéo", type: "Vidéo", description: "Découvrez les possibilités de la vidéo IA.", href: "/outils/assistant" },
  { icon: "🎙️", name: "Assistant vocal", type: "Audio", description: "Dictez vos demandes à voix haute.", href: "/outils/assistant" }
];

const courses = [
  { icon: "🤖", title: "Maîtriser l’intelligence artificielle", level: "Débutant", duration: "Parcours pratique" },
  { icon: "✍️", title: "Mieux écrire avec l’IA", level: "Tous niveaux", duration: "Exercices guidés" },
  { icon: "🚀", title: "Booster sa productivité", level: "Intermédiaire", duration: "Méthodes pratiques" }
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <nav className="container nav-inner">
          <Link href="/" className="logo">✳ SmartKit AI</Link>
          <div className="nav-links">
            <Link href="/">Accueil</Link>
            <Link href="/outils/assistant">Outils</Link>
            <Link href="/formations/intelligence-artificielle">Formations</Link>
            <a href="#videos">Vidéos</a>
            <Link href="/connexion">Connexion</Link>
          </div>
          <Link className="button nav-cta" href="/outils/assistant">Commencer gratuitement</Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">✦ Votre espace IA au quotidien</span>
              <h1>Découvrez le potentiel de <span>l’intelligence artificielle</span></h1>
              <p className="hero-description">
                Des outils IA, des formations pratiques et des ressources multimédias
                pour apprendre, créer et travailler plus efficacement.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/outils/assistant">Explorer les outils →</Link>
                <Link className="button button-secondary" href="/formations/intelligence-artificielle">Découvrir les formations</Link>
              </div>
              <div className="trust-row">
                <span>⚡ Outils pratiques</span>
                <span>▣ Formations guidées</span>
                <span>◉ Accessible sur mobile</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-orb orb-one" />
              <div className="visual-orb orb-two" />
              <div className="visual-window">
                <div className="window-top"><span>● ● ●</span><span>SmartKit Studio</span></div>
                <div className="visual-content">
                  <div className="visual-icon">✳</div>
                  <p className="visual-label">VOTRE ESPACE CRÉATIF</p>
                  <h2>Une idée. De nouvelles possibilités.</h2>
                  <div className="visual-chips"><span>Écrire</span><span>Créer</span><span>Apprendre</span></div>
                  <div className="visual-bars"><i /><i /><i /></div>
                </div>
              </div>
              <div className="floating-card floating-top">✦ Intelligence artificielle</div>
              <div className="floating-card floating-bottom">✓ Simple et pratique</div>
            </div>
          </div>
        </section>

        <section className="container section-block">
          <div className="section-heading">
            <div><p className="eyebrow">EXPLOREZ SMARTKIT</p><h2>Tout commence ici</h2></div>
            <Link href="/outils/assistant">Voir les outils →</Link>
          </div>
          <div className="category-grid">
            {categories.map((item) => (
              <Link className={`category-card ${item.color}`} href={item.title === "Formations" ? "/formations/intelligence-artificielle" : "/outils/assistant"} key={item.title}>
                <span className="category-icon">{item.icon}</span>
                <span className="category-text"><strong>{item.title}</strong><small>{item.description}</small></span>
                <span className="category-arrow">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="container section-block">
          <div className="section-heading">
            <div><p className="eyebrow">POUR GAGNER DU TEMPS</p><h2>Les outils à découvrir</h2><p className="section-description">Un point de départ simple pour vos projets.</p></div>
            <Link href="/outils/assistant">Tous les outils →</Link>
          </div>
          <div className="tool-grid">
            {tools.map((tool) => (
              <article className="tool-card" key={tool.name}>
                <div className="tool-icon">{tool.icon}</div>
                <span className="tool-type">{tool.type}</span>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <Link className="text-link" href={tool.href}>Découvrir <span>→</span></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="video-section" id="videos">
          <div className="container video-grid">
            <div className="video-placeholder">
              <div className="video-art"><span>✦</span><span>▶</span><span>AI</span></div>
              <p>SMARTKIT AI · GUIDE DE DÉCOUVERTE</p>
            </div>
            <div className="video-copy">
              <p className="eyebrow">APPRENEZ EN VIDÉO</p>
              <h2>L’IA devient plus simple quand on apprend ensemble.</h2>
              <p>Découvrez nos parcours pratiques et progressez étape par étape. Cette zone peut accueillir vos vidéos de présentation et vos tutoriels.</p>
              <Link className="button" href="/formations/intelligence-artificielle">Voir les formations →</Link>
            </div>
          </div>
        </section>

        <section className="container section-block">
          <div className="section-heading">
            <div><p className="eyebrow">APPRENDRE À SON RYTHME</p><h2>Formations recommandées</h2><p className="section-description">Des parcours pour passer de la découverte à la pratique.</p></div>
            <Link href="/formations/intelligence-artificielle">Toutes les formations →</Link>
          </div>
          <div className="course-grid">
            {courses.map((course) => (
              <Link className="course-card" href="/formations/intelligence-artificielle" key={course.title}>
                <div className="course-cover"><span>{course.icon}</span><small>SMARTKIT ACADEMY</small></div>
                <div className="course-body"><span className="course-level">{course.level}</span><h3>{course.title}</h3><p>{course.duration}</p><strong>Explorer le parcours →</strong></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="container section-block">
          <div className="final-cta">
            <div><p className="eyebrow">PRÊT À COMMENCER ?</p><h2>Faites de l’IA votre alliée au quotidien.</h2><p>Explorez les outils et trouvez le parcours qui vous correspond.</p></div>
            <Link className="button button-light" href="/outils/assistant">Commencer maintenant →</Link>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Link href="/" className="logo">✳ SmartKit AI</Link>
          <p>Apprendre, créer et avancer avec l’intelligence artificielle.</p>
          <div><Link href="/legal/mentions-legales">Mentions légales</Link><Link href="/connexion">Connexion</Link></div>
          <small>© {new Date().getFullYear()} SmartKit AI. Tous droits réservés.</small>
        </div>
      </footer>
    </>
  );
}
