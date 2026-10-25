export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return Response.json(
        { error: "يرجى إدخال نص" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "مفتاح Gemini غير مضبوط في إعدادات الموقع" },
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
            "فشل الاتصال بخدمة Gemini"
        },
        { status: response.status }
      );
    }

    const result =
      data.candidates?.[0]?.content?.parts
        ?.map((part) => part.text || "")
        .join("") || "";

    return Response.json({ result });
  } catch {
    return Response.json(
      { error: "حدث خطأ أثناء معالجة الطلب" },
      { status: 500 }
    );
  }
}
