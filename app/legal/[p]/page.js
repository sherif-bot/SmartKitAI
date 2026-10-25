const pages = {
  "mentions-legales": {
    title: "Mentions légales",
    body: "Les informations concernant l’éditeur du site et son hébergement doivent être complétées avant la publication."
  },
  confidentialite: {
    title: "Politique de confidentialité",
    body: "Cette page doit expliquer quelles données sont collectées, pourquoi elles sont utilisées et comment les utilisateurs peuvent exercer leurs droits."
  },
  cgu: {
    title: "Conditions générales d’utilisation",
    body: "Les règles d’utilisation du service doivent être rédigées et vérifiées avant l’ouverture au public."
  }
};

export function generateStaticParams() {
  return Object.keys(pages).map((p) => ({ p }));
}

export default async function LegalPage({ params }) {
  const { p } = await params;
  const page = pages[p];

  if (!page) {
    return <main className="container"><h1>Page introuvable</h1></main>;
  }

  return (
    <main className="container">
      <a href="/">← الرئيسية</a>
      <h1>{page.title}</h1>
      <p>{page.body}</p>
    </main>
  );
}
