export default function Services() {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg">
          <h3 className="font-semibold text-xl text-green-800 mb-2">Online Consultations</h3>
          <p className="text-gray-700">Talk to professionals without leaving your home.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg">
          <h3 className="font-semibold text-xl text-green-800 mb-2">Personalized Diets</h3>
          <p className="text-gray-700">Plans tailored to your goals and lifestyle.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg">
          <h3 className="font-semibold text-xl text-green-800 mb-2">Reduxir Burn Fitness</h3>
          <p className="text-gray-700">High-intensity training for efficient fat burn.</p>
        </div>
      </div>
    </section>
  );
}

