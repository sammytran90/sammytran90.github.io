// TODO: Add form handling
export default function GetInTouchPage() {
  // const [form, setForm] = useState({ name: '', email: '', message: '' });
  // const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Simulate API call
  //   setStatus('idle');
  //   try {
  //     await new Promise(res => setTimeout(res, 1000));
  //     setStatus('success');
  //     setForm({ name: '', email: '', message: '' });
  //   } catch {
  //     setStatus('error');
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <form
        // onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg space-y-6"
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Get in touch</h1>
        {/* {status === 'success' && (
          <div className="p-3 bg-green-100 text-green-800 rounded">Thank you! We'll be in touch soon.</div>
        )}
        {status === 'error' && (
          <div className="p-3 bg-red-100 text-red-800 rounded">Something went wrong. Please try again.</div>
        )} */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-bisque-500"
            id="name"
            name="name"
            type="text"
            required
            // value={form.name}
            // onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-bisque-500"
            id="email"
            name="email"
            type="email"
            required
            // value={form.email}
            // onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-bisque-500"
            id="message"
            name="message"
            required
            rows={5}
            // value={form.message}
            // onChange={handleChange}
            placeholder="How can we help you?"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-bisque-600 hover:bg-bisque-700 text-white font-semibold py-2 px-4 rounded transition-colors"
          // disabled={status === 'success'}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}