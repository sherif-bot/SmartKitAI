
export default function Course({ course }) {
  if (!course) return null;

  return (
    <article className="course-card">
      <p>{course.category || "Formation"}</p>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p>Niveau : {course.level || "Débutant"}</p>

      {Array.isArray(course.lessons) && (
        <div>
          <h3>Programme</h3>
          <ul>
            {course.lessons.map((lesson, index) => (
              <li key={index}>
                {lesson.title}
                {lesson.duration ? ` — ${lesson.duration}` : ""}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
