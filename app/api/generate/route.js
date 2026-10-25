export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return Response.json({ error: "يرجى إدخال نص" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return Response.json({ error: "مفتاح الذكاء الاصطناعي غير مضبوط" }, { status: 500 });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-3-5-haiku-20241022",
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json({ error: data.error?.message || "فشل طلب الذكاء الاصطناعي" }, { status: response.status });
    }

    return Response.json({ result: data.content?.map(item => item.text || "").join("") || "" });
  } catch {
    return Response.json({ error: "حدث خطأ في معالجة الطلب" }, { status: 500 });
  }
}
