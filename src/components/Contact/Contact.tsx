/* import { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import DOMPurify from "dompurify"; */

export default function Contact() {
/*   const { t } = useTranslation();
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = DOMPurify.sanitize(formData.get("name") as string);
    const email = DOMPurify.sanitize(formData.get("email") as string);
    const body = DOMPurify.sanitize(formData.get("message") as string);

    const message = `Name: ${name}\nEmail: ${email}\nMessage: ${body}`;

    fetch(`https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: import.meta.env.VITE_CHAT_ID,
        text: message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setIsSent(true);
        } else {
          alert("Failed to send message. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Failed to send message: ", error);
        alert("Failed to send message. Please try again later.");
      });

    form.reset();
  }; */

  return (
    <section id="contact" className="p-8">
      {/* <div
        className={`relative w-full h-96 transition-transform duration-700`}
        style={{
          transformStyle: "preserve-3d",
          transform: isSent ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="absolute w-full h-full bg-white dark:bg-secondary rounded-lg p-8"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <h2 className="text-3xl font-bold mb-4 dark:text-white">{t("contact.title")}</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-2 border rounded resize-none"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-accent-gold text-white rounded hover:bg-yellow-600"
            >
              <div className="flex items-center">
                <p>{t("contact.description")}</p>
                <svg
                  className="ml-3 w-3 h-3 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </div>
            </button>
          </form>
        </div>

        <div
          className="absolute w-full h-full bg-accent-gold flex items-center justify-center text-white text-2xl font-bold rounded-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p>{t("contact.successMessage") || "Message sent successfully!"}</p>
        </div>
      </div> */}
      <h2 className="text-3xl font-bold mb-4 dark:text-white">Phone</h2>
      <p className="text-lg dark:text-gray-500">+54 351 650 2117</p>
      <h2 className="text-3xl font-bold mb-4 dark:text-white">email</h2>
      <p className="text-lg dark:text-gray-500">leonardo.sawka@gmail.com</p>
      <h2 className="text-3xl font-bold mb-4 dark:text-white">Location</h2>
      <p className="text-lg dark:text-gray-500">Córdoba City, Córdoba, Argentina</p>
    </section>
  );
}
