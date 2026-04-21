import { useState, useEffect, useRef, FormEvent } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  Lightbulb,
  GraduationCap,
  Code2,
  Network,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Database,
  Smartphone,
  Cloud,
  Globe,
  Settings,
  Plus,
  Trash2,
  LogOut,
  FolderOpen
} from 'lucide-react';
import { translations, Language } from './translations';
import { auth, db, signInWithGoogle, signOut, handleFirestoreError } from './firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp, query, orderBy, where } from 'firebase/firestore';

export default function App() {
  const [language, setLanguage] = useState<Language>('ko');
  const t = translations[language];

  return (
    <Routes>
      <Route path="/" element={<Home language={language} setLanguage={setLanguage} t={t} />} />
    </Routes>
  );
}

// ============== Logo Component ==============
function Logo({ size, className = "" }: { size: number, className?: string }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div style={{ width: size, height: size }} className={`rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center text-white flex-shrink-0 ${className}`}>
        <Building2 size={size * 0.6} strokeWidth={2.5} />
      </div>
    );
  }
  
  return (
    <img 
      src="/brand-logo.png?v=21"
      alt="Association Logo" 
      style={{ 
        width: size, 
        height: size, 
        filter: 'brightness(0) invert(1)',
        display: 'block'
      }}
      className={`object-contain flex-shrink-0 ${className}`}
      referrerPolicy="no-referrer"
      onError={() => {
        console.error("Logo failed to load");
        setHasError(true);
      }}
    />
  );
}

// ============== Home Component ==============
function Home({ language, setLanguage, t }: { language: Language; setLanguage: any; t: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobLangOpen, setIsMobLangOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const mobLangDropdownRef = useRef<HTMLDivElement>(null);

  // Use localized projects from translations
  const projects = t.projects.items || [];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
      if (mobLangDropdownRef.current && !mobLangDropdownRef.current.contains(event.target as Node)) {
        setIsMobLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.vision, href: '#vision' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.organization, href: '#organization' },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden font-sans">
      {/* Mesh Gradient Background Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="fixed top-[20%] right-[10%] w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Header */}
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/5 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Logo size={40} />
              <span className={`font-bold tracking-tight uppercase text-white hidden sm:inline-block ${
                (language === 'en' || language === 'vi') ? 'text-sm lg:text-base' : 'text-lg lg:text-xl'
              }`}>
                {t.footer.title}
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <a href="#contact" className="px-5 py-2 bg-indigo-500 hover:bg-indigo-400 rounded-full text-white text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20 whitespace-nowrap">
                {t.nav.contact}
              </a>

              <div className="relative" ref={langDropdownRef}>
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors px-2 py-1 cursor-pointer"
                >
                  <Globe size={16} />
                  <span className="uppercase">{language}</span>
                </button>
                <div className={`absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-[#0F172A]/90 backdrop-blur-md shadow-lg ring-1 ring-white/10 focus:outline-none transition-all duration-200 ${isLangOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  <div className="py-1">
                    <button onClick={() => { setLanguage('ko'); setIsLangOpen(false); }} className={`block w-full text-left px-4 py-2 text-sm ${language === 'ko' ? 'text-indigo-400 bg-white/5' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}>한국어</button>
                    <button onClick={() => { setLanguage('en'); setIsLangOpen(false); }} className={`block w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'text-indigo-400 bg-white/5' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}>English</button>
                    <button onClick={() => { setLanguage('ja'); setIsLangOpen(false); }} className={`block w-full text-left px-4 py-2 text-sm ${language === 'ja' ? 'text-indigo-400 bg-white/5' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}>日本語</button>
                    <button onClick={() => { setLanguage('vi'); setIsLangOpen(false); }} className={`block w-full text-left px-4 py-2 text-sm ${language === 'vi' ? 'text-indigo-400 bg-white/5' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}>Tiếng Việt</button>
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button & Lang */}
            <div className="flex md:hidden items-center gap-2">
               <div className="relative" ref={mobLangDropdownRef}>
                <button 
                  onClick={() => setIsMobLangOpen(!isMobLangOpen)}
                  className="flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors px-2 py-1 cursor-pointer"
                >
                  <Globe size={20} />
                </button>
                <div className={`absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-[#0F172A] shadow-lg ring-1 ring-white/10 transition-all duration-200 z-[60] ${isMobLangOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  <div className="py-1">
                    <button onClick={() => { setLanguage('ko'); setIsMobLangOpen(false); }} className={`block w-full text-left px-4 py-2 text-sm ${language === 'ko' ? 'text-indigo-400 bg-white/5' : 'text-white/70'}`}>한국어</button>
                    <button onClick={() => { setLanguage('en'); setIsMobLangOpen(false); }} className={`block w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'text-indigo-400 bg-white/5' : 'text-white/70'}`}>English</button>
                    <button onClick={() => { setLanguage('ja'); setIsMobLangOpen(false); }} className={`block w-full text-left px-4 py-2 text-sm ${language === 'ja' ? 'text-indigo-400 bg-white/5' : 'text-white/70'}`}>日本語</button>
                    <button onClick={() => { setLanguage('vi'); setIsMobLangOpen(false); }} className={`block w-full text-left px-4 py-2 text-sm ${language === 'vi' ? 'text-indigo-400 bg-white/5' : 'text-white/70'}`}>Tiếng Việt</button>
                  </div>
                </div>
              </div>

              <button 
                className="p-2 text-white/70 hover:text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#0F172A] h-screen w-full flex flex-col overflow-y-auto pb-8"
          >
            <div className="flex justify-between items-center p-4 border-b border-white/10 flex-shrink-0">
              <span className="text-xl font-bold text-white">{t.nav.mobileMenu}</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white/70 bg-white/5 hover:bg-white/10 rounded-full">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-white/90 hover:text-white flex items-center justify-between"
                >
                  {link.name}
                  <ChevronRight size={20} className="text-white/40" />
                </a>
              ))}
            </nav>
            <div className="mt-auto p-6 flex-shrink-0">
               <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full flex justify-center py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-400 text-white text-lg font-medium shadow-lg shadow-indigo-500/20">
                {t.nav.contactUs}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden items-center flex min-h-[90vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-4xl">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="inline-flex px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium mb-8 backdrop-blur-sm text-emerald-400"
              >
                {t.hero.badge}
              </motion.div>
              
              <motion.h1 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.1 }}
                className={`font-extrabold tracking-tight leading-[1.1] mb-8 ${
                  (language === 'en' || language === 'vi') 
                  ? 'text-3xl sm:text-4xl md:text-6xl' 
                  : 'text-4xl sm:text-5xl md:text-7xl'
                }`}
              >
                {t.hero.title1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">{t.hero.title2}</span>
              </motion.h1>
              
              <motion.p 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl text-white/60 font-medium leading-relaxed mb-10 max-w-2xl"
              >
                {t.hero.desc}
              </motion.p>
              
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="#services" className="px-8 py-4 rounded-full bg-indigo-500 text-white font-semibold text-lg hover:bg-indigo-400 transition-colors shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 whitespace-nowrap">
                  {t.hero.btnPrimary} <ArrowRight size={20} />
                </a>
                <a href="#about" className="px-8 py-4 rounded-full bg-white/10 text-white border border-white/20 font-semibold text-lg hover:bg-white/20 transition-colors backdrop-blur-sm flex items-center justify-center whitespace-nowrap">
                  {t.hero.btnSecondary}
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About & Necessity Section */}
        <section id="about" className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="mb-16 md:mb-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t.about.title}</h2>
              <div className="w-20 h-1.5 bg-emerald-400 rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl"
              >
                <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 mb-6">
                  <Database size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{t.about.card1Title}</h3>
                <p className="text-lg text-white/60 leading-relaxed">
                  {t.about.card1Desc}
                </p>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl"
              >
                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6">
                  <Lightbulb size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{t.about.card2Title}</h3>
                <p className="text-lg text-white/60 leading-relaxed">
                  {t.about.card2Desc}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision" className="py-24 relative z-10 overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] [background-size:24px_24px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-4 block">{t.vision.tag}</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">{t.vision.title1} <br className="hidden md:block"/>{t.vision.title2}</h2>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { title: t.vision.items[0].title, desc: t.vision.items[0].desc, icon: Network },
                { title: t.vision.items[1].title, desc: t.vision.items[1].desc, icon: Lightbulb },
                { title: t.vision.items[2].title, desc: t.vision.items[2].desc, icon: GraduationCap },
                { title: t.vision.items[3].title, desc: t.vision.items[3].desc, icon: Cloud },
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeIn} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services - Bento Grid */}
        <section id="services" className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.services.title}</h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                {t.services.desc}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
              {/* Card 1 - Large */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="md:col-span-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-indigo-400">
                  <Network size={160} />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-semibold mb-4 border border-indigo-500/30">{t.services.card1Tag}</span>
                    <h3 className="text-3xl font-bold mb-4 max-w-md leading-tight text-white">
                      {t.services.card1Title}
                    </h3>
                    <p className="text-white/60 text-lg max-w-md">
                      {t.services.card1Desc}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                    <Cloud size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{t.services.card2Title}</h3>
                  <p className="text-white/60">
                    {t.services.card2Desc}
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{t.services.card3Title}</h3>
                  <p className="text-white/60">
                    {t.services.card3Desc}
                  </p>
                </div>
              </motion.div>

              {/* Card 4 - Wide bottom */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-indigo-900/40 to-emerald-900/20 rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl flex items-center backdrop-blur-lg"
              >
                <div className="flex-1">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 border border-white/20">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{t.services.card4Title}</h3>
                  <p className="text-white/70 text-lg max-w-xl">
                    {t.services.card4Desc}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Preview List */}
        <section id="projects" className="py-24 relative z-10">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
            >
              <div>
                 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center gap-3">
                    <FolderOpen className="text-emerald-400"/> {t.projects.title}
                 </h2>
                 <p className="text-white/60 text-lg">{t.projects.desc}</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.length === 0 ? (
                <div className="col-span-full py-16 text-center border border-white/10 bg-white/5 rounded-3xl">
                  <FolderOpen className="mx-auto text-white/20 mb-4" size={48} />
                  <p className="text-white/60 text-lg">{t.projects.empty}</p>
                </div>
              ) : (
                projects.map((p, i) => (
                   <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={p.id}
                    className="group bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md transition-all shadow-lg flex flex-col h-full"
                  >
                    <div className="flex justify-between items-start mb-4 gap-4">
                      <span className="inline-block bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-xs font-bold border border-indigo-500/30 whitespace-nowrap">{p.year}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">{p.title}</h3>
                    <p className="text-emerald-400 font-medium mb-4">{p.client}</p>
                    <p className="text-white/60 leading-relaxed text-sm mt-auto max-h-32 overflow-y-auto pr-2 custom-scrollbar">{p.description}</p>
                  </motion.div>
                ))
              )}
            </div>
           </div>
        </section>

        {/* Organization */}
        <section id="organization" className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t.organization.title}</h2>
              <p className="text-white/60">{t.organization.desc}</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {t.organization.depts.map((dept: any, i: number) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={dept.name}
                  className="group flex flex-col md:flex-row gap-4 md:items-center p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 backdrop-blur-md transition-all shadow-lg"
                >
                  <div className="md:w-1/3 flex-shrink-0">
                    <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors text-white">{dept.name}</h3>
                  </div>
                  <div className="w-full h-[1px] md:w-[1px] md:h-12 bg-white/10"></div>
                  <div className="md:w-2/3">
                    <p className="text-white/70 leading-relaxed">{dept.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="grid lg:grid-cols-5 gap-12 relative z-10 items-center">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.contact.title}</h2>
                  <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-sm" dangerouslySetInnerHTML={{ __html: `${t.contact.desc1} <br /><br />${t.contact.desc2}`}} />
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-white/70 p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                        <Building2 size={20} className="text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{t.contact.officeTitle}</p>
                        <p className="text-sm mt-1">{t.contact.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3 bg-[#0F172A]/50 p-6 md:p-8 rounded-2xl border border-white/10 shadow-inner">
                   {formStatus === 'success' ? (
                     <motion.div 
                       initial={{ opacity: 0, scale: 0.95 }} 
                       animate={{ opacity: 1, scale: 1 }} 
                       className="flex flex-col items-center justify-center h-full min-h-[360px] space-y-4 text-center"
                     >
                       <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 border border-emerald-500/30 mb-4">
                         <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                       </div>
                       <h3 className="text-2xl font-bold text-white">{t.contact.successTitle}</h3>
                       <p className="text-white/60">{t.contact.successDesc}</p>
                       <button onClick={() => setFormStatus('idle')} className="mt-6 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white transition-colors font-medium">{t.contact.btnNew}</button>
                     </motion.div>
                   ) : (
                     <form onSubmit={handleContactSubmit} className="space-y-5">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                         <div className="space-y-2">
                           <label className="block text-sm font-medium text-white/70">{t.contact.labelName}</label>
                           <input required type="text" className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm" placeholder={t.contact.plName} />
                         </div>
                         <div className="space-y-2">
                           <label className="block text-sm font-medium text-white/70">{t.contact.labelCompany}</label>
                           <input required type="text" className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm" placeholder={t.contact.plCompany} />
                         </div>
                       </div>
                       <div className="space-y-2">
                         <label className="block text-sm font-medium text-white/70">{t.contact.labelEmail}</label>
                         <input required type="email" className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm" placeholder={t.contact.plEmail} />
                       </div>
                       <div className="space-y-2">
                         <label className="block text-sm font-medium text-white/70">{t.contact.labelMessage}</label>
                         <textarea required rows={4} className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm resize-none" placeholder={t.contact.plMessage}></textarea>
                       </div>
                       <button disabled={formStatus === 'submitting'} type="submit" className="w-full py-4 mt-2 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 disabled:from-indigo-500/50 disabled:to-indigo-500/50 text-white rounded-xl font-bold text-base shadow-lg shadow-indigo-500/20 transition-all flex justify-center items-center gap-2">
                         {formStatus === 'submitting' ? (
                           <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            {t.contact.btnSubmitting}
                           </>
                         ) : (
                           t.contact.btnSubmit
                         )}
                       </button>
                     </form>
                   )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-12 py-16 bg-white/5 backdrop-blur-2xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Logo size={32} />
                <span className={`font-bold text-white tracking-tight ${
                  (language === 'en' || language === 'vi') ? 'text-sm' : 'text-base lg:text-lg'
                }`}>
                  {t.footer.title}
                </span>
              </div>
              <p className="max-w-sm text-sm text-white/60 leading-relaxed mb-8">
                {t.footer.desc}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
                <address className="not-italic text-sm text-white/60 space-y-2">
                  <p>{t.contact.address}</p>
                  <p>kddio@dii.or.kr</p>
                </address>
              </div>
              <div>
                 <h4 className="text-white font-semibold mb-4">{t.footer.links}</h4>
                 <ul className="text-sm text-white/60 space-y-2">
                   <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
                   <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
                 </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">{t.footer.copyright}</p>
            <div className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {t.footer.badge}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
