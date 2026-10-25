import { notFound } from "next/navigation";
import { courses } from "../../../lib/courses";
import Course from "../../../components/Course";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default function CoursePage({ params }) {
  const course = courses.find((item) => item.slug === params.slug);

  if (!course) notFound();

  return (
    <main className="container">
      <a href="/">← الرئيسية</a>
      <h1>{course.title}</h1>
      <Course course={course} />
    </main>
  );
}
