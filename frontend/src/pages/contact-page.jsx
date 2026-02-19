import { useState } from "react";
import PageLayout from "../components/PageLayout";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:setupfx24@gmail.com?subject=Inquiry from ${formData.name}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <PageLayout title="Contact Us" subtitle="Get in touch with our team. We would love to hear about your project and discuss how we can help.">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">Full Name</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">Email Address</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">Phone Number</label>
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">Message</label>
              <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell us about your project..." />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 text-sm">Send Message</button>
          </form>
        </div>
        <div className="space-y-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-white font-semibold text-lg mb-4">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:setupfx24@gmail.com" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-sm">setupfx24@gmail.com</span>
              </a>
              <a href="https://wa.me/19082280305" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">WhatsApp: +1 (908) 228-0305</span>
              </a>
            </div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-white font-semibold text-lg mb-4">Office Location</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-zinc-300 text-sm font-medium">United Kingdom</p>
                  <p className="text-zinc-400 text-xs mt-1">Office 9364hn 3 Fitzroy Place, Area 1/1, Sauchiehall Street, Glasgow City Centre, G3 7RH</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-white font-semibold text-lg mb-2">SetupFX Softtech (OPC) Private Limited</h3>
            <p className="text-zinc-400 text-sm">Global software development and digital marketing company.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
