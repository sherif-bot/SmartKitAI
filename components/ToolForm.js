٨
"use client";

import { useState } from "react";

export default function ToolForm({ toolId = "assistant" }) {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ toolId, prompt })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setResult(data.result || data.text || "Aucun résultat généré.");
    } catch (error) {
      setResult(error.message || "Impossible de générer le contenu.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="tool-prompt">Que souhaitez-vous faire ?</label>
      <textarea
        id="tool-prompt"
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
        placeholder="Écrivez votre demande ici..."
        required
        rows={5}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Génération..." : "Générer"}
      </button>
      {result && <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>}
    </form>
  );
}
