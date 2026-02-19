import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import setupfxLogo from '../assets/setupfx24.png'
import setupfxVideo from '../assets/setupfxvideo.mp4'
import terminalImg from '../assets/terminal.png'
import chartImg from '../assets/chart.png'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, ChevronDown, Code2, Globe, Smartphone, Database, Palette,
  Target, Search, Megaphone, Share2, FileText, Layers, Users, TrendingUp,
  Copy, ArrowLeftRight, Droplets, Plug, Shield, Workflow, Tag, BookOpen,
  FolderKanban, HelpCircle, Zap, ShieldCheck, Settings, Cpu, LayoutDashboard,
  Building2, Rocket, Building, Crown, Eye, HeadphonesIcon, MessageSquare,
  Paintbrush, TestTube, ArrowUpRight, Check, Star, Quote, Mail, MessageCircle, MapPin
} from 'lucide-react'

// ============ NAVBAR COMPONENT ============
const servicesItems = [
  { icon: Code2, label: "Software Development", href: "/services/software-development", desc: "Custom software tailored to your business needs" },
  { icon: Globe, label: "Web Application Development", href: "/services/web-application-development", desc: "Scalable, responsive web apps with modern stacks" },
  { icon: Smartphone, label: "Mobile App Development", href: "/services/mobile-app-development", desc: "Native & cross-platform mobile solutions" },
  { icon: Database, label: "CRM & Business Systems", href: "/services/crm-business-systems", desc: "Custom CRM, ERP & admin panel development" },
  { icon: Palette, label: "UI / UX Design", href: "/services/ui-ux-design", desc: "User-centered design that converts & delights" },
]

const marketingItems = [
  { icon: Target, label: "Marketing Strategy", href: "/marketing/strategy", desc: "Data-driven strategies for measurable growth" },
  { icon: Search, label: "Search Engine Optimization", href: "/marketing/seo", desc: "Rank higher and drive organic traffic" },
  { icon: Megaphone, label: "Paid Advertising", href: "/marketing/paid-advertising", desc: "Google Ads & social media campaigns" },
  { icon: Share2, label: "Social Media Marketing", href: "/marketing/social-media", desc: "Build brand presence across platforms" },
  { icon: FileText, label: "Content Marketing", href: "/marketing/content-marketing", desc: "Engaging content that drives engagement" },
]

const solutionsItems = [
  { icon: Layers, label: "White Label Solution", href: "/solutions/white-label", desc: "Launch your own branded trading platform" },
  { icon: Users, label: "IB Management", href: "/solutions/ib-management", desc: "Introducing broker management system" },
  { icon: TrendingUp, label: "Prop Trading", href: "/solutions/prop-trading", desc: "Proprietary trading platform & tools" },
  { icon: Copy, label: "Copy Trading", href: "/solutions/copy-trading", desc: "Social & copy trading infrastructure" },
  { icon: ArrowLeftRight, label: "Advanced Order Exchange", href: "/solutions/advance-order-exchange", desc: "High-performance order matching engine" },
  { icon: Tag, label: "Grey Label Platform", href: "/solutions/grey-label", desc: "Cost-effective semi-branded trading platform" },
]

const liquidityItems = [
  { icon: Plug, label: "Client Liquidity Integration", href: "/liquidity", desc: "Connect your existing liquidity provider" },
  { icon: Droplets, label: "SetupFX Liquidity Provider", href: "/liquidity", desc: "Multi-asset deep liquidity from SetupFX" },
  { icon: Shield, label: "A-Book & B-Book Support", href: "/liquidity", desc: "Smart order routing & risk management" },
  { icon: Workflow, label: "Platform Compatibility", href: "/liquidity", desc: "Works with all trading platforms" },
]

const resourcesItems = [
  { icon: BookOpen, label: "Blog", href: "/resources/blog", desc: "Insights, tips & industry trends" },
  { icon: FolderKanban, label: "Case Studies", href: "/resources/case-studies", desc: "Real results from real clients" },
  { icon: HelpCircle, label: "FAQs", href: "/resources/faqs", desc: "Answers to common questions" },
]

const dropdowns = [
  { key: "services", label: "Services", items: servicesItems, footerLink: { label: "View all services", href: "/services/software-development" } },
  { key: "marketing", label: "Digital Marketing", items: marketingItems, footerLink: { label: "View all marketing services", href: "/marketing/strategy" } },
  { key: "solutions", label: "Solutions", items: solutionsItems, footerLink: { label: "View all solutions", href: "/solutions/white-label" } },
  { key: "liquidity", label: "Liquidity", items: liquidityItems, footerLink: { label: "View liquidity solutions", href: "/liquidity" } },
  { key: "resources", label: "Resources", items: resourcesItems },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileAccordion, setMobileAccordion] = useState(null)
  const navRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleMouseEnter = (key) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(key)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const toggleMobileAccordion = (key) => {
    setMobileAccordion(mobileAccordion === key ? null : key)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/50 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={navRef}>
        <div className="flex items-center justify-between h-[72px]">
          <a href="/" className="flex items-center flex-shrink-0">
            <img src={setupfxLogo} alt="SetupFX24" className="h-8 w-auto" />
          </a>

          <div className="hidden xl:flex items-center gap-1">
            {dropdowns.map((dropdown) => (
              <div key={dropdown.key} className="relative">
                <button
                  onMouseEnter={() => handleMouseEnter(dropdown.key)}
                  onClick={() => setActiveDropdown(activeDropdown === dropdown.key ? null : dropdown.key)}
                  className={`flex items-center gap-1 text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                    activeDropdown === dropdown.key
                      ? "text-white bg-white/5"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {dropdown.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === dropdown.key ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === dropdown.key && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      onMouseEnter={() => handleMouseEnter(dropdown.key)}
                      onMouseLeave={handleMouseLeave}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[380px] rounded-xl border border-zinc-800 bg-zinc-900 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden"
                    >
                      <div className="p-2">
                        {dropdown.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3.5 px-3.5 py-3 rounded-lg hover:bg-white/5 transition-colors group"
                          >
                            <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors mt-0.5">
                              <item.icon className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                              <div className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors">
                                {item.label}
                              </div>
                              <div className="text-zinc-300 text-xs mt-0.5 leading-relaxed">
                                {item.desc}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      {dropdown.footerLink && (
                        <div className="border-t border-zinc-800 px-5 py-3 bg-zinc-950/50">
                          <a
                            href={dropdown.footerLink.href}
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
                          >
                            {dropdown.footerLink.label} →
                          </a>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <a
              href="/pricing"
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5"
            >
              Pricing
            </a>

            <a
              href="/contact"
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5"
            >
              Contact
            </a>
          </div>

          <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
            <a href="/user/login" className="border border-zinc-600 hover:border-zinc-400 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:bg-white/5">
              Login
            </a>
            <a href="/admin" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30">
              Sign Up
            </a>
          </div>

          <button
            className="xl:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-zinc-950/98 backdrop-blur-md border-t border-zinc-800 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1 max-h-[80vh] overflow-y-auto">
              {dropdowns.map((dropdown) => (
                <div key={dropdown.key} className="border-b border-zinc-800/50 last:border-0">
                  <button
                    onClick={() => toggleMobileAccordion(dropdown.key)}
                    className="flex items-center justify-between w-full text-zinc-300 hover:text-white text-sm font-medium transition-colors py-3"
                  >
                    {dropdown.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileAccordion === dropdown.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileAccordion === dropdown.key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-3 space-y-0.5 border-l-2 border-blue-500/30 ml-2">
                          {dropdown.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-3 text-zinc-400 hover:text-white text-sm py-2.5 transition-colors"
                              onClick={() => {
                                setIsOpen(false)
                                setMobileAccordion(null)
                              }}
                            >
                              <item.icon className="w-4 h-4 text-blue-400/70" />
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <a
                href="/pricing"
                className="block text-zinc-300 hover:text-white text-sm font-medium transition-colors py-3"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>

              <a
                href="/contact"
                className="block text-zinc-300 hover:text-white text-sm font-medium transition-colors py-3"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>

              <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2">
                <a href="/user/login" className="block border border-zinc-600 hover:border-zinc-400 text-white text-sm font-semibold px-6 py-3.5 rounded-lg w-full transition-all hover:bg-white/5 text-center">
                  Login
                </a>
                <a href="/admin" className="block bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 py-3.5 rounded-lg w-full transition-all shadow-lg shadow-blue-600/20 text-center">
                  Sign Up
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// ============ HERO COMPONENT ============
const stats = [
  { value: "250+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Countries Served" },
]

const Hero = () => {
  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 bg-zinc-950">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={setupfxVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-transparent to-zinc-950/90" />
      </div>

      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[200px]"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.9) 0%, rgba(37,99,235,0.5) 50%, transparent 75%)" }}
        animate={{
          top: ["-20%", "-20%", "40%", "40%", "-20%"],
          left: ["-15%", "55%", "55%", "-15%", "-15%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />

      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "100px 100px" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-6xl text-left">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-400 text-xs font-medium tracking-wide">Global Software & Digital Marketing Company</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
            >
              <span className="text-white">Build, Scale</span>
              <br />
              <span className="text-white">& Grow </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Digitally
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-zinc-400 text-lg max-w-3xl leading-relaxed"
            >
              Custom apps, CRM, and data-driven marketing to grow businesses digitally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a href="#services" className="border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 text-sm hover:bg-white/5 text-center">
                Explore Services
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative bg-zinc-950 border-t border-zinc-800/50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-zinc-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="relative bg-zinc-950 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          whileHover={{ rotateY: 10, scale: 1.02 }}
          className="cursor-pointer"
          style={{ perspective: 1200 }}
        >
          <img
            src={terminalImg}
            alt="Terminal"
            className="w-full h-auto rounded-2xl border border-zinc-800/50 shadow-2xl shadow-blue-500/5 transition-shadow duration-300 hover:shadow-blue-500/20"
          />
        </motion.div>
      </div>
    </section>
    </>
  )
}

// ============ TRUST STRIP COMPONENT ============
const trustPoints = [
  { icon: Code2, label: "Custom Development" },
  { icon: TrendingUp, label: "Growth Marketing" },
  { icon: ShieldCheck, label: "Secure & Reliable" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: Globe, label: "Global Reach" },
]

const TrustStrip = () => {
  return (
    <section className="relative py-12 border-y border-zinc-800/60 bg-zinc-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left flex-shrink-0">
            <p className="text-white font-semibold text-lg">Trusted by Businesses Worldwide</p>
            <p className="text-zinc-500 text-sm mt-1">From startups to global enterprises</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2.5"
              >
                <point.icon className="w-5 h-5 text-blue-400" />
                <span className="text-zinc-300 text-sm font-medium">{point.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============ SOLUTION OVERVIEW (SERVICES) COMPONENT ============
const services = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom software solutions built with modern technologies, tailored to solve your unique business challenges.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Scalable, responsive web applications using React, Next.js, and modern frameworks for optimal performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences.",
  },
  {
    icon: Database,
    title: "CRM & Business Systems",
    description: "Custom CRM, ERP, and admin panel development to streamline your operations and boost productivity.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "User-centered design that converts visitors into customers with intuitive interfaces and beautiful aesthetics.",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const SolutionOverview = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Software Development Services
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            From concept to deployment — we build custom applications that power your business forward.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-7 hover:border-blue-500/30 hover:bg-zinc-900 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
              <div className="mt-5 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                Learn more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ============ CORE PRODUCTS (DIGITAL MARKETING) COMPONENT ============
const tabs = [
  {
    id: "strategy",
    icon: Target,
    label: "Marketing Strategy",
    title: "Data-Driven Marketing Strategy",
    description: "We craft comprehensive marketing strategies backed by data and market research. From audience analysis to campaign planning, we build roadmaps that align with your business goals and deliver measurable ROI.",
    features: ["Market research & competitor analysis", "Target audience identification", "Multi-channel campaign planning", "KPI setting & performance tracking", "Quarterly strategy reviews & optimization"],
    metric: { label: "Avg. ROI Increase", value: "+340%", sub: "for our clients" },
  },
  {
    id: "seo",
    icon: Search,
    label: "SEO",
    title: "Search Engine Optimization (SEO)",
    description: "Dominate search results with our proven SEO strategies. We optimize your website for both search engines and users, driving organic traffic that converts into customers.",
    features: ["Technical SEO audit & optimization", "Keyword research & content strategy", "On-page & off-page SEO", "Local SEO & Google Business Profile", "Monthly reporting & rank tracking"],
    metric: { label: "Avg. Organic Growth", value: "+180%", sub: "within 6 months" },
  },
  {
    id: "ads",
    icon: Megaphone,
    label: "Paid Ads",
    title: "Paid Advertising (Google & Social)",
    description: "Maximize your ad spend with expertly managed campaigns across Google Ads, Facebook, Instagram, LinkedIn, and more. We focus on high-intent audiences to drive quality leads and conversions.",
    features: ["Google Ads (Search, Display, Shopping)", "Facebook & Instagram Ads", "LinkedIn Ads for B2B", "Retargeting & lookalike audiences", "A/B testing & conversion optimization"],
    metric: { label: "Avg. ROAS", value: "5.2x", sub: "return on ad spend" },
  },
  {
    id: "social",
    icon: Share2,
    label: "Social Media",
    title: "Social Media Marketing",
    description: "Build a powerful brand presence across all major social platforms. We create engaging content, manage communities, and run campaigns that grow your audience and drive engagement.",
    features: ["Content calendar & strategy", "Community management & engagement", "Influencer partnership management", "Social listening & brand monitoring", "Performance analytics & reporting"],
    metric: { label: "Avg. Engagement", value: "+250%", sub: "growth rate" },
  },
  {
    id: "content",
    icon: FileText,
    label: "Content Marketing",
    title: "Content Marketing",
    description: "Attract, engage, and convert your audience with high-quality content. From blog posts and whitepapers to video scripts and email campaigns, we create content that drives results.",
    features: ["Blog writing & thought leadership", "Email marketing & automation", "Video content strategy", "Whitepaper & case study creation", "Content distribution & promotion"],
    metric: { label: "Avg. Lead Growth", value: "+200%", sub: "through content" },
  },
]

const CoreProducts = () => {
  const [activeTab, setActiveTab] = useState("strategy")
  const active = tabs.find((t) => t.id === activeTab)

  return (
    <section id="marketing" className="relative py-24 overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">Digital Marketing</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Grow Your Business Online
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Data-driven marketing strategies that attract, engage, and convert your ideal customers.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">{active.title}</h3>
              <p className="mt-4 text-zinc-400 leading-relaxed">{active.description}</p>
              <ul className="mt-6 space-y-3">
                {active.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/20 text-sm">
                Get Free Consultation
              </a>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/80 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-zinc-800 rounded px-3 py-1 text-[10px] text-zinc-500 text-center">
                    {active.label} — Analytics Dashboard
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-5">
                <div className="text-center py-6 bg-zinc-800/30 rounded-xl border border-zinc-700/30">
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">{active.metric.label}</div>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
                    {active.metric.value}
                  </div>
                  <div className="text-xs text-zinc-400 mt-2">{active.metric.sub}</div>
                </div>
                <div className="h-28 bg-zinc-800/50 rounded-lg relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 400 110" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`mktGrad-${activeTab}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(59,130,246,0.25)" />
                        <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                      </linearGradient>
                    </defs>
                    <path d="M0,90 Q50,85 100,70 T200,50 T300,25 T400,15" fill="none" stroke="#3b82f6" strokeWidth="2" />
                    <path d="M0,90 Q50,85 100,70 T200,50 T300,25 T400,15 L400,110 L0,110 Z" fill={`url(#mktGrad-${activeTab})`} />
                  </svg>
                  <div className="absolute top-3 left-3 text-[10px] text-zinc-500">Performance Over Time</div>
                  <div className="absolute top-3 right-3 text-[10px] text-green-400 font-mono">Trending Up</div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {["Impressions", "Clicks", "Conversions"].map((label, i) => (
                    <div key={label} className="bg-zinc-800/50 rounded-lg px-3 py-2.5 text-center">
                      <div className="text-[9px] text-zinc-500">{label}</div>
                      <div className="text-sm text-white font-semibold mt-1">
                        {i === 0 ? "1.2M" : i === 1 ? "84K" : "12.4K"}
                      </div>
                      <div className="text-[9px] text-green-400 mt-0.5">
                        +{20 + i * 15}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

// ============ BACK OFFICE (SOLUTIONS) COMPONENT ============
const solutions = [
  { icon: Settings, title: "Custom Software Solutions", desc: "Bespoke software designed to solve your unique business challenges with scalable, maintainable architecture." },
  { icon: Cpu, title: "Business Automation", desc: "Automate repetitive workflows, reduce manual errors, and boost team productivity with smart automation." },
  { icon: LayoutDashboard, title: "CRM & Admin Panels", desc: "Centralized dashboards for managing clients, data, operations, and team collaboration in one place." },
  { icon: Building2, title: "Enterprise Applications", desc: "Large-scale, mission-critical systems built for performance, security, and enterprise-grade reliability." },
]

const BackOffice = () => {
  return (
    <section id="solutions" className="relative py-24 overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight text-white leading-tight">
              Tailored Solutions for Every Business Need
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              We don't believe in one-size-fits-all. Our solutions are custom-built to address your specific
              challenges, whether you need a complete digital overhaul or targeted improvements.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solutions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/20 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                    <p className="text-zinc-400 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={chartImg}
              alt="Solutions Dashboard"
              className="w-full h-auto rounded-xl border border-zinc-800 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============ IB PARTNER (INDUSTRIES) COMPONENT ============
const industries = [
  {
    icon: Rocket,
    title: "Startups",
    description: "MVP development, rapid prototyping, and scalable architecture to help you validate ideas fast and grow with confidence.",
    features: ["MVP in 4-6 weeks", "Scalable tech stack", "Growth marketing"],
  },
  {
    icon: Building,
    title: "Small & Medium Businesses",
    description: "Custom web apps, CRM systems, and digital marketing strategies designed to streamline operations and accelerate growth.",
    features: ["Custom business apps", "CRM & automation", "SEO & paid ads"],
  },
  {
    icon: Building2,
    title: "Enterprises",
    description: "Complex enterprise systems, integrations, and large-scale applications built for performance, security, and compliance.",
    features: ["Enterprise-grade systems", "API integrations", "24/7 support"],
  },
  {
    icon: Crown,
    title: "Global Brands",
    description: "World-class digital experiences, multi-market campaigns, and technology solutions that match the scale of your ambition.",
    features: ["Multi-market strategy", "Brand-level UX", "Global campaigns"],
  },
]

const IBPartner = () => {
  return (
    <section id="industries" className="relative py-24 overflow-hidden bg-zinc-950/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">Industries We Serve</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Solutions for Every Stage of Growth
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Whether you're a startup with a big idea or a global brand scaling operations, we have the expertise to deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/60 p-7 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
                <card.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{card.description}</p>
              <ul className="space-y-1.5">
                {card.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-zinc-500">
                    <div className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ ABOUT SECTION COMPONENT ============
const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">Why SetupFX24</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight text-white leading-tight">
              Your Partner for Software Development & Digital Growth
            </h2>
            <p className="mt-6 text-zinc-400 text-base leading-relaxed">
              SetupFX24 is a global software development and digital marketing company helping businesses
              build, scale, and grow in the digital world. We combine cutting-edge technology with
              data-driven marketing strategies to deliver measurable results.
            </p>
            <p className="mt-4 text-zinc-400 text-base leading-relaxed">
              From custom web and mobile applications to CRM systems and full-funnel digital marketing,
              we provide end-to-end solutions that transform how businesses operate and connect with
              their customers.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Our Mission</h4>
                  <p className="text-zinc-400 text-sm mt-1">
                    To empower businesses of all sizes with world-class software and marketing solutions that drive real growth.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Our Vision</h4>
                  <p className="text-zinc-400 text-sm mt-1">
                    To become the go-to global partner for businesses seeking digital transformation and sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:p-12">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <circle cx="100" cy="100" r="3" fill="#3b82f6" />
                  <circle cx="200" cy="80" r="3" fill="#3b82f6" />
                  <circle cx="300" cy="120" r="3" fill="#3b82f6" />
                  <circle cx="150" cy="200" r="3" fill="#3b82f6" />
                  <circle cx="250" cy="180" r="3" fill="#3b82f6" />
                  <circle cx="350" cy="250" r="3" fill="#3b82f6" />
                  <circle cx="80" cy="300" r="3" fill="#3b82f6" />
                  <circle cx="200" cy="320" r="3" fill="#3b82f6" />
                  <circle cx="320" cy="350" r="3" fill="#3b82f6" />
                  <line x1="100" y1="100" x2="200" y2="80" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="200" y1="80" x2="300" y2="120" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="100" y1="100" x2="150" y2="200" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="200" y1="80" x2="250" y2="180" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="300" y1="120" x2="350" y2="250" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="150" y1="200" x2="250" y2="180" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="150" y1="200" x2="80" y2="300" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="250" y1="180" x2="200" y2="320" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="350" y1="250" x2="320" y2="350" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="80" y1="300" x2="200" y2="320" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="200" y1="320" x2="320" y2="350" stroke="#3b82f6" strokeWidth="0.5" />
                </svg>
              </div>

              <div className="relative z-10 text-center space-y-8">
                <Globe className="w-16 h-16 text-blue-400/60 mx-auto" />
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-zinc-800/50 rounded-xl p-5 border border-zinc-700/50">
                    <div className="text-3xl font-bold text-white">250+</div>
                    <div className="text-xs text-zinc-400 mt-1">Projects Delivered</div>
                  </div>
                  <div className="bg-zinc-800/50 rounded-xl p-5 border border-zinc-700/50">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-xs text-zinc-400 mt-1">Global Clients</div>
                  </div>
                  <div className="bg-zinc-800/50 rounded-xl p-5 border border-zinc-700/50">
                    <div className="text-3xl font-bold text-white">98%</div>
                    <div className="text-xs text-zinc-400 mt-1">Client Satisfaction</div>
                  </div>
                  <div className="bg-zinc-800/50 rounded-xl p-5 border border-zinc-700/50">
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-xs text-zinc-400 mt-1">Dedicated Support</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============ WHY SETUPFX COMPONENT ============
const differentiators = [
  { icon: Code2, title: "Expert Development Team", benefit: "Senior engineers with deep expertise in React, Next.js, Flutter, Node.js, and cloud infrastructure." },
  { icon: Zap, title: "Fast Delivery", benefit: "Agile methodology and proven processes mean your project goes live in weeks, not months." },
  { icon: Users, title: "Dedicated Team", benefit: "A named project manager, designer, and development team assigned exclusively to your project." },
  { icon: Globe, title: "Global Experience", benefit: "We've delivered projects across 15+ countries for startups, SMBs, and enterprise clients." },
  { icon: HeadphonesIcon, title: "Ongoing Support", benefit: "Post-launch support, maintenance, and optimization to keep your product running at peak performance." },
  { icon: ShieldCheck, title: "Quality Guaranteed", benefit: "Rigorous QA testing, code reviews, and security audits ensure enterprise-grade quality on every project." },
]

const WhySetupFX = () => {
  return (
    <section id="why" className="relative py-24 overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Why Businesses Trust SetupFX24
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            We combine technical excellence with strategic thinking to deliver solutions that truly make a difference.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group flex items-start gap-4 p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-blue-500/30 hover:bg-zinc-900/70 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <item.icon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                <p className="text-zinc-400 text-sm mt-1.5 leading-relaxed">{item.benefit}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ============ HOW IT WORKS COMPONENT ============
const steps = [
  { icon: MessageSquare, step: "01", title: "Discovery & Strategy", desc: "We dive deep into your business goals, audience, and requirements to craft the perfect plan." },
  { icon: Paintbrush, step: "02", title: "Design & Prototype", desc: "Our designers create stunning UI/UX mockups and interactive prototypes for your approval." },
  { icon: Code2, step: "03", title: "Development", desc: "Our engineers build your solution using modern tech stacks with agile sprints and regular updates." },
  { icon: TestTube, step: "04", title: "Testing & QA", desc: "Rigorous testing across devices, browsers, and scenarios to ensure flawless performance." },
  { icon: Rocket, step: "05", title: "Launch & Growth", desc: "We deploy your project and provide ongoing support, optimization, and marketing to drive growth." },
]

const HowItWorks = () => {
  return (
    <section id="resources" className="relative py-24 overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            From Idea to Launch in 5 Steps
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Our proven process ensures your project is delivered on time, on budget, and beyond expectations.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute top-12 left-[calc(10%)] right-[calc(10%)] h-px bg-gradient-to-r from-blue-500/30 via-blue-500/50 to-blue-500/30" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="relative mx-auto w-24 h-24 mb-5">
                  <div className="absolute inset-0 rounded-full bg-blue-500/5 border border-blue-500/20" />
                  <div className="absolute inset-3 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-blue-600/30">
                    {item.step}
                  </div>
                </div>

                <h4 className="text-white font-semibold text-sm mb-1.5">{item.title}</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============ COMPETITION (CASE STUDIES) COMPONENT ============
const caseStudies = [
  {
    icon: Globe,
    category: "Web Application",
    title: "E-Commerce Platform for Fashion Brand",
    description: "Built a custom e-commerce platform with inventory management, payment processing, and analytics dashboard.",
    results: [
      { label: "Revenue Increase", value: "+240%" },
      { label: "Page Load Time", value: "0.8s" },
      { label: "Conversion Rate", value: "+85%" },
    ],
  },
  {
    icon: Smartphone,
    category: "Mobile App",
    title: "Fitness Tracking App with Social Features",
    description: "Developed a cross-platform mobile app with workout tracking, social challenges, and real-time leaderboards.",
    results: [
      { label: "Downloads", value: "50K+" },
      { label: "User Retention", value: "78%" },
      { label: "App Rating", value: "4.8/5" },
    ],
  },
  {
    icon: TrendingUp,
    category: "Digital Marketing",
    title: "SaaS Lead Generation Campaign",
    description: "Executed a full-funnel marketing strategy including SEO, paid ads, and content marketing for a B2B SaaS company.",
    results: [
      { label: "Organic Traffic", value: "+320%" },
      { label: "Qualified Leads", value: "+180%" },
      { label: "Cost Per Lead", value: "-45%" },
    ],
  },
]

const Competition = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">Case Studies</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Real Results, Real Impact
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            See how we've helped businesses across industries achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="p-7 pb-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <study.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-blue-400 font-medium">{study.category}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">{study.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{study.description}</p>
              </div>

              <div className="border-t border-zinc-800 bg-zinc-950/50 p-5">
                <div className="grid grid-cols-3 gap-3">
                  {study.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <div className="text-lg font-bold text-white">{result.value}</div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ PROP TRADING (PRICING) COMPONENT ============
const plans = [
  {
    name: "Starter",
    price: "$1,499",
    period: "per project",
    description: "Perfect for startups and small businesses getting started with their digital presence.",
    icon: Zap,
    features: [
      "Responsive website (up to 5 pages)",
      "Basic SEO setup",
      "Mobile-friendly design",
      "Contact form integration",
      "1 month post-launch support",
      "Social media profile setup",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$4,999",
    period: "per project",
    description: "Ideal for growing businesses that need custom applications and marketing strategies.",
    icon: TrendingUp,
    features: [
      "Custom web application",
      "Mobile app (iOS or Android)",
      "Advanced SEO & content strategy",
      "Google Ads & social media campaigns",
      "CRM integration",
      "3 months post-launch support",
      "Monthly analytics reporting",
      "Dedicated project manager",
    ],
    cta: "Choose Growth",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored pricing",
    description: "For enterprises and global brands requiring complex systems and full-scale digital transformation.",
    icon: Crown,
    features: [
      "Enterprise-grade applications",
      "Multi-platform development",
      "Full-funnel marketing strategy",
      "Business automation & workflows",
      "Custom CRM & admin panels",
      "24/7 dedicated support",
      "SLA-backed uptime guarantee",
      "Quarterly strategy reviews",
      "Priority feature development",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

const PropTrading = () => {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Transparent Pricing, Real Value
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Choose a package that fits your business needs. All plans include dedicated support and quality assurance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-blue-500/50 bg-zinc-900/80 shadow-2xl shadow-blue-500/10 scale-[1.02]"
                  : "border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg shadow-blue-600/30">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  plan.popular ? "bg-blue-500/20 border border-blue-500/30" : "bg-zinc-800 border border-zinc-700"
                }`}>
                  <plan.icon className={`w-5 h-5 ${plan.popular ? "text-blue-400" : "text-zinc-400"}`} />
                </div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-zinc-500 text-sm ml-2">/ {plan.period}</span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{plan.description}</p>

              <a
                href="#contact"
                className={`block text-center font-semibold py-3 rounded-lg transition-all duration-200 text-sm mb-8 ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20"
                    : "border border-zinc-700 hover:border-zinc-500 text-white hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? "text-blue-400" : "text-zinc-500"}`} />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-zinc-500 text-sm mt-12"
        >
          Need a custom solution? <a href="#contact" className="text-blue-400 hover:text-blue-300 font-medium">Contact us</a> for a tailored proposal.
        </motion.p>
      </div>
    </section>
  )
}

// ============ TESTIMONIAL COMPONENT ============
const testimonials = [
  {
    quote: "SetupFX24 built our entire e-commerce platform from scratch. The team delivered ahead of schedule, and our online revenue has grown 3x since launch. Their technical expertise and communication are outstanding.",
    name: "Sarah Mitchell",
    role: "CEO, Fashion Forward",
    industry: "E-Commerce — United States",
  },
  {
    quote: "We hired SetupFX24 for SEO and paid advertising. Within 6 months, our organic traffic increased by 280% and our cost per acquisition dropped by 40%. They truly understand digital growth.",
    name: "James Chen",
    role: "Marketing Director",
    industry: "SaaS Company — Singapore",
  },
  {
    quote: "The mobile app they developed for us has a 4.9-star rating with over 50K downloads. SetupFX24 didn't just build an app — they built a product that our users love. Highly recommended.",
    name: "Priya Sharma",
    role: "Founder & CTO",
    industry: "Health & Fitness — India",
  },
]

const Testimonial = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8"
            >
              <Quote className="w-8 h-8 text-blue-500/20 mb-4" />

              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <blockquote className="text-zinc-300 text-sm leading-relaxed mb-6">
                "{item.quote}"
              </blockquote>

              <div className="pt-5 border-t border-zinc-800">
                <div className="text-white font-semibold text-sm">{item.name}</div>
                <div className="text-zinc-500 text-xs mt-0.5">{item.role}</div>
                <div className="text-zinc-600 text-xs mt-0.5">{item.industry}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ FINAL CTA COMPONENT ============
const FinalCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-900/20 to-zinc-900" />
          <div className="absolute inset-0 border border-blue-500/20 rounded-2xl" />
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to Build, Scale &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Grow Your Business?
              </span>
            </h2>
            <p className="mt-5 text-zinc-400 text-lg max-w-xl mx-auto">
              Get a free consultation and custom proposal tailored to your business needs.
              Our team will walk you through every solution and answer all your questions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 text-sm">
                Get Free Consultation
              </a>
              <a href="#pricing" className="border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 text-sm hover:bg-white/5">
                View Pricing
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============ FOOTER COMPONENT ============
const Footer = () => {
  return (
    <footer id="contact" className="relative pt-20 pb-8 overflow-hidden border-t border-zinc-800/50 bg-zinc-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-14 mb-16">
          <div className="max-w-sm">
            <div className="mb-5">
              <img src={setupfxLogo} alt="SetupFX24" className="h-9 w-auto" />
            </div>
            <p className="text-white font-semibold text-sm mb-2">SetupFX Softtech (OPC) Private Limited</p>
            <div className="flex items-start gap-2.5 mb-5">
              <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <p className="text-zinc-400 text-xs leading-relaxed">
                Office 9364hn 3 Fitzroy Place, Area 1/1, Sauchiehall Street, Glasgow City Centre, United Kingdom, G3 7RH
              </p>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Global software development and digital marketing company powering brokerages and businesses worldwide.
            </p>
          </div>

          <div className="flex-shrink-0">
            <h4 className="text-white font-semibold text-sm mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:setupfx24@gmail.com" className="flex items-center gap-3 text-zinc-400 text-sm hover:text-white transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  setupfx24@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/19082280305" className="flex items-center gap-3 text-zinc-400 text-sm hover:text-white transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                  </div>
                  WhatsApp: +1 (908) 228-0305
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800/50 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { label: "Solutions", href: "/solutions/white-label" },
              { label: "Liquidity", href: "/liquidity" },
              { label: "Pricing", href: "/pricing" },
              { label: "Case Studies", href: "/resources/case-studies" },
              { label: "Blog", href: "/resources/blog" },
              { label: "FAQs", href: "/resources/faqs" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="text-zinc-500 hover:text-white text-sm transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-800/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} SetupFX24. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">Privacy</a>
            <a href="/terms-of-service" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">Terms</a>
            <a href="/" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============ MAIN LANDING PAGE COMPONENT ============
const LandingPage = () => {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <TrustStrip />
      <SolutionOverview />
      <CoreProducts />
      <BackOffice />
      <IBPartner />
      <AboutSection />
      <WhySetupFX />
      <HowItWorks />
      <Competition />
      <PropTrading />
      <Testimonial />
      <FinalCTA />
      <Footer />
    </main>
  )
}

export default LandingPage
