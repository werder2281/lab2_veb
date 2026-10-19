function Contacts() {
  return (
    <section id="contacts" className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-900 pb-2 mb-4">Контакти</h2>
      <ul className="space-y-2">
        <li>
          Email: <a href="mailto:sergii.dybliuk@gmail.com" className="text-red-600 font-medium hover:underline">sergii.dybliuk@gmail.com</a>
        </li>
        <li>
          GitHub: <a href="https://github.com/werder2281" className="text-indigo-600 font-medium hover:underline">github.com/werder2281</a>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;