function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-10">

      <div className="grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-white text-xl font-bold">Pitchsap</h3>
          <p className="mt-2 text-gray-400">
            Helping founders validate and launch startup ideas.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Company</h4>
          <ul className="mt-2 space-y-2">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Legal</h4>
          <ul className="mt-2 space-y-2">
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-10">
        © 2026 Pitchsap. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;