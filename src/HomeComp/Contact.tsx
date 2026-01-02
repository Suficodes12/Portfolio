import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
//   Linkedin, 
//   Instagram, 
//   Github, 
  MessageSquare,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

import type { ContactInfo } from '../types';

// --- Sub-components ---
// const SocialIcon: React.FC<{ link: SocialLink }> = ({ link }) => (
//   <a 
//     href={link.url} 
//     target="_blank" 
//     rel="noopener noreferrer"
//     className="w-10 h-10 flex items-center justify-center border-2 border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300 group"
//   >
//     <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
//   </a>
// );

const InfoCard: React.FC<{ info: ContactInfo }> = ({ info }) => (
  <a 
    href={info.href}
    className="flex items-center gap-4 group p-3 rounded-lg hover:bg-white/5 transition-colors"
  >
    <div className="text-orange-500 group-hover:scale-110 transition-transform">
      {info.icon}
    </div>
    <div>
      <p className="text-sm font-semibold text-gray-400">{info.type}</p>
      <p className="text-white group-hover:text-orange-400 transition-colors">{info.value}</p>
    </div>
  </a>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

//   const socialLinks: SocialLink[] = [
//     { name: 'LinkedIn', url: '#', icon: <Linkedin size={20} /> },
//     { name: 'Instagram', url: '#', icon: <Instagram size={20} /> },
//     { name: 'GitHub', url: '#', icon: <Github size={20} /> }
//   ];

  const contactInfos: ContactInfo[] = [
    { type: 'Email', value: 'muhammadsufyann898 @gmail.com ', href: 'mailto:muhammadsufyann898@gmail.com', icon: <Mail size={24} /> },
    { type: 'Whatsapp', value: '03142996621', href: 'https://wa.link/mp9q3u', icon: <MessageSquare size={24} /> },
    { type: 'Phone', value: '03142996621', href: 'https://wa.link/mp9q3u', icon: <Phone size={24} /> }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className=" flex flex-col items-center justify-center py-20 bg-black">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Form Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-orange-500/50 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative bg-black border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
              <div className="flex justify-between items-center mb-10">
                <h2 className="lg:text-3xl md:text-xl text-lg text-[#FFF] md:text-4xl font-bold">
                  Contact <span className="text-orange-500 underline decoration-2 underline-offset-8">Form</span>
                </h2>
                <div className="h-2 w-16 bg-orange-500 rounded-full"></div>
              </div>

              {submitted ? (
                <div className="py-20 flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-black">
                    <CheckCircle2 size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thank you for reaching out. We'll get back to you shortly.</p>
                  </div>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-orange-500 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">

                    {/* Name Input */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-1">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-gray-600"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-1">Your Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-gray-600"
                      />
                    </div>

                    {/* Message Input */}
                    <div className="space-y-2 relative">
                      <label className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-1">Your Message</label>
                      <textarea 
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Write your message here"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-gray-600 resize-none"
                      />
                    </div>

                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden bg-orange-500 text-black py-5 rounded-xl font-black text-lg uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Send Message 
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Side: Contact Info */}
          <div className="space-y-12">
            <header className="space-y-6">
              <h1 className="lg:text-6xl md:text-4xl text-2xl text-[#FFF] md:text-8xl font-black tracking-tighter">
                Contact <span className="text-orange-500">Us</span>
              </h1>
              <p className="md:text-xl text-base lg:text-2xl text-gray-300 font-light leading-relaxed max-w-lg italic border-l-4 border-orange-500 pl-6">
                "Have a project in mind or just want to say hello? We're always open to new opportunities, collaborations, or feedback."
              </p>
            </header>

            <div className="space-y-6 ">
              {contactInfos.map((info, idx) => (
                <div key={idx} className="animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                  <InfoCard info={info} />
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-orange-500 font-bold mb-6">2025 © Muhammad Sufyan</p>
              <div className="flex gap-4">
                {/* {socialLinks.map((link, idx) => (
                  <SocialIcon key={idx} link={link} />
                ))} */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
