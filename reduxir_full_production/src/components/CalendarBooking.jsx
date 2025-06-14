export default function CalendarBooking() {
  return (
    <section className="py-16 px-8 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Book a Consultation</h2>
      <form className="max-w-xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
        <input type="text" placeholder="Your Name" className="p-3 rounded border border-gray-300" />
        <input type="email" placeholder="Email" className="p-3 rounded border border-gray-300" />
        <input type="datetime-local" className="p-3 rounded border border-gray-300 md:col-span-2" />
        <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 md:col-span-2">
          Book Now
        </button>
      </form>
    </section>
  );
}
