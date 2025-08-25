import { Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export const ContactSection = () => {
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
          </motion.div>

          {/* Connect With Me (moved to the right side) */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-lg shadow-xs flex flex-col justify-center"
          >
            <h4 className="font-bold text-2xl mb-6 text-primary text-center">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};