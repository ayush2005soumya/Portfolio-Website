import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export const ContactSection = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    // validation
    if (!name || !email || !message) {
      toast.error("⚠️ Please fill out all fields");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("📧 Please enter a valid email");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_ttfe03o", // replace with EmailJS service id
        "template_i8u261l", // replace with EmailJS template id
        formRef.current,
        "sn_XnqdUYDJWinMAZ" // replace with EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className=" container py-24 px-4 relative bg-secondary/30">
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:sumichatt.35@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sumichatt.35@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+917439645740"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7439645740
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 text-center">
              <h4 className="font-bold text-2xl mb-6 text-primary">
                Connect With Me
              </h4>
              <div className="flex space-x-6 justify-center">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="https://www.linkedin.com/in/ayush-chatterjee-9a4045299/"
                  target="_blank"
                >
                  <FaLinkedin className="text-3xl text-foreground hover:text-primary transition-colors" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  href="https://wa.me/917439645740"
                  target="_blank"
                >
                  <FaWhatsapp className="text-3xl text-foreground hover:text-primary transition-colors" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://t.me/nemoAyush"
                  target="_blank"
                >
                  <FaTelegram className="text-3xl text-foreground hover:text-primary transition-colors" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-lg shadow-xs"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              {["user_name", "user_email", "message"].map((field, i) => (
                <motion.div
                  key={i}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {field === "message" ? (
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
                    />
                  ) : (
                    <input
                      type={field === "user_email" ? "email" : "text"}
                      name={field}
                      placeholder={
                        field === "user_name"
                          ? "Your Name"
                          : "Your Email"
                      }
                      required
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
                    />
                  )}
                </motion.div>
              ))}

              <button
                type="submit"
                disabled={loading}
                className="cosmic-button px-6 py-2 w-full flex items-center justify-center"
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

