function Skills({ items }) {
  return (
    <section id="skills">
      <h2>Навички</h2>
      <ul>
        {items.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;