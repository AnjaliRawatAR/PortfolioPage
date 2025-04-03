import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let valid = true;
    let errors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      valid = false;
    } else if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      // Simulate API call (replace with actual API request)
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      }, 2000);
    }
  };

  return (
    <section className="contact-section py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mt-1 focus:ring-2 focus:ring-indigo-400 outline-none transition"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mt-1 focus:ring-2 focus:ring-indigo-400 outline-none transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mt-1 focus:ring-2 focus:ring-indigo-400 outline-none transition"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-indigo-500 text-white rounded font-semibold hover:bg-indigo-600 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {submitted && (
            <p className="mt-4 text-center text-green-500 font-semibold">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
