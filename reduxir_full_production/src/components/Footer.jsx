export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 text-center mt-12">
      <p className="text-sm">&copy; {new Date().getFullYear()} Reduxir Health and Wellness. All rights reserved.</p>
      <p className="text-xs mt-1">Made with <span className="text-green-400">💚</span> for your well-being</p>
    </footer>
  );
}

