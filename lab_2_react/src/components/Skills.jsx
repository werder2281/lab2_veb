function Skills({ items }) {
  return (
    <section id="skills" className="bg-white rounded-xl shadow-lg border border-slate-200 border-l-4 border-l-indigo-900 p-6 transition hover:-translate-y-1 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-900 pb-2 mb-4">Навички</h2>
      <ul className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <li key={skill} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;