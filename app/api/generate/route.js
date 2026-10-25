
export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return Response.json(
        { error: "Veuillez saisir un texte." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json(
        {
          error:
            "La clé API Gemini n'est pas configurée dans les paramètres du site."
        },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        {
          error:
            data.error?.message ||
            "Échec de la connexion au service Gemini."
        },
        { status: response.status }
      );
    }

    const result =
      data.candidates?.[0]?.content?.parts
        ?.map((part) => part.text || "")
        .join("") || "";

    if (!result) {
      return Response.json(
        {
          error:
            "Aucune réponse n'a été générée. Veuillez réessayer."
        },
        { status: 502 }
      );
    }

    return Response.json({ result });
  } catch {
    return Response.json(
      {
        error:
          "Une erreur est survenue lors du traitement de votre demande."
      },
      { status: 500 }
    );
  }
}
