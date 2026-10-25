
import Link from "next/link";

const features = [
  {
    title: "Outils d'intelligence artificielle",
    description:
      "Découvrez des outils pour écrire, résumer et améliorer votre productivité."
  },
  {
    title: "Formations pratiques",
    description:
      "Apprenez à utiliser l'intelligence artificielle étape par étape."
  },
  {
    title: "Commande vocale",
    description:
      "Dictez votre demande grâce à la reconnaissance vocale de votre navigateur."
  }
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <nav className="container">
          <Link href="/" className="logo">
            SmartKit AI
          </Link>
          <div>
            <Link href="/outils/assistant">Outils</Link>
            {" · "}
            <Link href="/formations/intelligence-artificielle">
              Formations
            </Link>
            {" · "}
            <Link href="/connexion">Connexion</Link>
          </div>
        </nav>
      </header>

      <main className="container">
        <section style={{ padding: "64px 0 40px" }}>
          <p>Votre espace pour apprendre et travailler plus efficacement</p>
          <h1>Découvrez le potentiel de l'intelligence artificielle</h1>
          <p>
            Des outils IA et des formations pratiques pour vous accompagner
            au quotidien.
          </p>
          <p>
            <Link className="button" href="/outils/assistant">
              Découvrir les outils
            </Link>
            {" "}
            <Link className="button" href="/formations/intelligence-artificielle">
              Explorer les formations
            </Link>
          </p>
        </section>

        <section>
          <h2>Pourquoi SmartKit AI ?</h2>
          {features.map((feature) => (
            <article className="card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </section>

        <section className="card">
          <h2>Commencez gratuitement</h2>
          <p>
            Explorez nos outils et découvrez les formations disponibles.
          </p>
          <Link href="/outils/assistant">Essayer un outil IA →</Link>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} SmartKit AI</p>
          <Link href="/legal/mentions-legales">Mentions légales</Link>
        </div>
      </footer>
    </>
  );
}
