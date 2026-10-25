import { notFound } from "next/navigation";
import { tools } from "../../../lib/tools";
import ToolForm from "../../../components/ToolForm";

export function generateStaticParams() {
  return tools.map((tool) => ({ id: tool.id }));
}

export default function ToolPage({ params }) {
  const tool = tools.find((item) => item.id === params.id);

  if (!tool) notFound();

  return (
    <main className="container">
      <a href="/">← الرئيسية</a>
      <h1>{tool.name}</h1>
      <p>{tool.description}</p>
      <ToolForm tool={tool} />
    </main>
  );
}
