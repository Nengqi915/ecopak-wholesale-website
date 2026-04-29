import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  Package, 
  CheckCircle, 
  Menu, 
  X, 
  ChevronRight, 
  ShoppingBag, 
  Award,
  Globe,
  Droplets,
  Layers,
  Leaf
} from 'lucide-react';
import { CoffeeBeansBags, CoffeeBeansBagsDetail } from './CoffeeBeansBags';
import { CoffeeMugs, CoffeeMugsDetail } from './CoffeeMugs';
import { YourOwnDesign, YourOwnDesignDetail } from './YourOwnDesign';
import { OneStop, OneStopDetail } from './OneStop';
import { Blog, BlogDetail } from './Blog';

const products = [
  { 
    name: 'Cold Coffee Drink Cups', 
    image: 'https://shopcdnpro.grainajz.com/category/83624/2839/2b757078616d0f4ab4c9d1fce97d78e8/Custom%20Your%20Brand%20Coffee%20Pack%205.png',
    description: 'Durable and clear plastic cups for cold brew and iced lattes.',
    page: 'cafe-cups/cold-coffee-drink-cups'
  },
  { 
    name: 'Double Walls Paper Cups', 
    image: 'https://shopcdnpro.grainajz.com/category/83624/2839/e884806783603261192a7d422e191d6d/Custom%20Your%20Brand%20Coffee%20Pack%206.png',
    description: 'Double-walled insulated cups to keep your coffee hot and hands safe.',
    page: 'cafe-cups/double-walls-paper-cups'
  },
  { 
    name: 'Drip Coffee Bags', 
    image: 'https://shopcdnpro.grainajz.com/category/83624/2839/1c0014e427888587264b828960536684/Coffee%20Beans%20Bags%206.png',
    description: 'Convenient, single-serve drip coffee bags for quick and easy brewing.',
    page: 'coffee-beans-bags/drip-coffee-bags'
  },
  { 
    name: 'Flat Bottom Coffee Bags', 
    image: 'https://shopcdnpro.grainajz.com/category/83624/2839/37932dac9402132b570b1c3d8a073ae3/Coffee%20Beans%20Bags%207.png',
    description: 'Large capacity bags for wholesale coffee bean distribution.',
    page: 'coffee-beans-bags/flat-bottom-coffee-bags'
  },
  { 
    name: 'Luxury Brand Coffee Bags', 
    image: 'https://shopcdnpro.grainajz.com/category/83624/2839/bbdbbf738c736f62847f2e7d916b11fd/Luxury%20Brand%20Coffee%20Bags.png',
    description: 'Premium luxury packaging with metallic gold accents.',
    page: 'coffee-beans-bags/luxury-brand-coffee-bags'
  },
  { 
    name: 'Stand Up Coffee Bags', 
    image: 'https://shopcdnpro.grainajz.com/category/83624/2839/d23bed1b75fda286285a867d88591cac/Coffee%20Beans%20Bags%204.png',
    description: 'Classic and versatile stand-up pouches with resealable zippers.',
    page: 'coffee-beans-bags/stand-up-coffee-bags170'
  },
  { 
    name: 'Eco-friendly PE Coffee Bags', 
    image: 'https://shopcdnpro.grainajz.com/category/83624/2839/5fa72936da9ce26b2a6c64b028777827/Coffee%20Beans%20Bags%208.png',
    description: '100% Recyclable PE-based coffee bags designed for the environmentally conscious brand.',
    page: 'coffee-beans-bags/eco-friendly-pe-coffee-bags'
  },
  { 
    name: 'Pizza Catering Restaurant', 
    image: 'https://shopcdnpro.grainajz.com/category/83624/2839/bc0c1bc5dd8c9afb572f14cbd053a07d/Cafe%20Cups%203.png',
    description: 'Durable yet biodegradable paper cups for serving various beverages.',
    page: 'cafe-cups/pizza-catering'
  }
];

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center overflow-hidden rounded-xl ${className}`}>
    <img 
      src="https://cdn.jsdelivr.net/gh/Nengqi915/For-Ecopak-Wholesale-Website@main/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250514172430.png" 
      alt="ecopak wholesale logo"
      className="w-full h-full object-cover"
      referrerPolicy="no-referrer"
    />
  </div>
);

interface NavSubItem {
  name: string;
  href?: string;
  page?: string;
}

interface NavItem {
  name: string;
  href?: string;
  page?: string;
  subItems?: NavSubItem[];
  isButton?: boolean;
}

const navItems: NavItem[] = [
  {
    name: 'Custom Coffee Pack',
    href: '#',
    subItems: [
      { name: 'Cafe Cups', page: 'cafe-cups' },
      { name: 'Coffee Beans Bags', page: 'coffee-beans-bags' },
      { name: 'Coffee Mugs', page: 'coffee-mugs' },
      { name: 'Your Own Design', page: 'your-own-design' },
    ]
  },
  {
    name: 'One-Stop Packaging',
    page: 'one-stop-packaging',
    href: '#'
  },
  {
    name: 'Blog',
    page: 'blog',
    href: '#'
  },
  { name: 'Contact Us', href: '#contact', page: 'home' },
  { name: 'Get A Quote', href: '#contact', isButton: true, page: 'home' },
];

const NavDropdown: React.FC<{ item: NavItem; setPage: (p: string) => void }> = ({ item, setPage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button 
        onClick={() => {
          if (item.href && item.href.startsWith('#')) {
            window.location.hash = item.href;
          }
          if (item.page) setPage(item.page);
        }}
        className={`text-sm font-bold text-gray-700 hover:text-[#82C864] transition-colors uppercase tracking-wider flex items-center gap-1 ${isHovered ? 'text-[#82C864]' : ''}`}
      >
        {item.name}
        {item.subItems && <ChevronRight className={`w-3 h-3 transition-transform ${isHovered ? 'rotate-90' : ''}`} />}
      </button>

      <AnimatePresence>
        {isHovered && item.subItems && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden p-2 z-[60]"
          >
            <div className="flex flex-col">
              {item.subItems.map((sub) => (
                <button
                  key={sub.name}
                  onClick={() => {
                    if (sub.href && sub.href.startsWith('#')) {
                      window.location.hash = sub.href;
                    }
                    if (sub.page) {
                      setPage(sub.page);
                    } else {
                      setPage('home');
                    }
                    setIsHovered(false);
                  }}
                  className="px-4 py-3 text-sm font-bold text-gray-600 hover:bg-[#82C864]/5 hover:text-[#82C864] rounded-xl transition-all flex items-center justify-between group/sub text-left"
                >
                  {sub.name}
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 -translate-x-2 group-hover/sub:translate-x-0 transition-all" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = ({ setPage, currentPage, openInquiry }: { setPage: (p: string) => void; currentPage: string; openInquiry: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button 
            onClick={() => {
              window.location.hash = '';
              setPage('home');
            }}
            className="flex items-center gap-3"
          >
            <Logo className="w-14 h-14" />
            <div className="flex flex-col leading-none text-left">
              <span className="brand-italic text-2xl tracking-tighter text-[#1A1A1A]">EcoPak Wholesale</span>
              <span className="text-[10px] font-bold text-[#82C864] tracking-[0.2em] uppercase mt-1">Packaging Expert</span>
            </div>
          </button>
          
          <div className="hidden md:flex items-center space-x-8 h-full">
            {navItems.map((item) => (
              item.isButton ? (
                <button 
                  key={item.name}
                  onClick={openInquiry}
                  className="px-7 py-3 bg-[#FF9F1C] text-white rounded-full text-sm font-extrabold hover:translate-y-[-2px] transition-all shadow-lg hover:shadow-xl active:translate-y-0"
                >
                  {item.name.toUpperCase()}
                </button>
              ) : (
                <NavDropdown key={item.name} item={item} setPage={setPage} />
              )
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[#1A1A1A] hover:bg-gray-100 rounded-lg transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  {item.isButton ? (
                    <button 
                      onClick={() => {
                        setIsOpen(false);
                        openInquiry();
                      }} 
                      className="w-full py-4 mt-4 bg-[#FF9F1C] text-white text-center rounded-2xl font-black shadow-lg"
                    >
                      {item.name.toUpperCase()}
                    </button>
                  ) : (
                    <>
                      <button 
                        onClick={() => {
                          if (item.subItems) {
                            setActiveMobileMenu(activeMobileMenu === item.name ? null : item.name);
                          } else {
                            if (item.href && item.href.startsWith('#')) {
                              window.location.hash = item.href;
                            }
                            setPage(item.page || 'home');
                            setIsOpen(false);
                          }
                        }}
                        className="flex items-center justify-between py-3 text-lg font-bold text-gray-800"
                      >
                        {item.name}
                        {item.subItems && (
                          <ChevronRight className={`w-4 h-4 transition-transform ${activeMobileMenu === item.name ? 'rotate-90' : ''}`} />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {activeMobileMenu === item.name && item.subItems && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col pl-4 border-l-2 border-gray-100 space-y-1 overflow-hidden"
                          >
                            {item.subItems.map(sub => (
                              <button 
                                key={sub.name}
                                onClick={() => {
                                  if (sub.href && sub.href.startsWith('#')) {
                                    window.location.hash = sub.href;
                                  }
                                  if (sub.page) {
                                    setPage(sub.page);
                                  } else {
                                    setPage('home');
                                  }
                                  setIsOpen(false);
                                }}
                                className="py-2 text-sm font-bold text-gray-500 hover:text-[#82C864] text-left"
                              >
                                {sub.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const heroSlides = [
  {
    type: 'content',
    image: "https://images.unsplash.com/photo-1559056191-75902422509d?auto=format&fit=crop&q=80&w=2000"
  },
  {
    type: 'imageOnly',
    image: "https://cdn.jsdelivr.net/gh/Nengqi915/For-Ecopak-Wholesale-Website@main/img/d3766408a50c0c217e1ace2f871aefa1.png"
  },
  {
    type: 'imageOnly',
    image: "https://cdn.jsdelivr.net/gh/Nengqi915/For-Ecopak-Wholesale-Website@main/img/6fcdd0543699db08fb9ef29cc7bd6f4f.png"
  }
];

const Hero = ({ openInquiry }: { openInquiry: () => void }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] min-h-[400px] flex items-center bg-[#1A1A1A] overflow-hidden mt-20 group">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 cursor-pointer"
          onClick={() => { 
            if (heroSlides[currentIdx].type === 'imageOnly') {
              window.location.hash = '#contact'; 
            }
          }}
        >
          <img 
            src={heroSlides[currentIdx].image} 
            alt={`Promotional Banner ${currentIdx + 1}`}
            className="w-full h-full object-cover" 
          />
          {heroSlides[currentIdx].type === 'content' && (
            <div className="absolute inset-0 bg-black/50" />
          )}
          {heroSlides[currentIdx].type === 'imageOnly' && (
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          )}
          
          {heroSlides[currentIdx].type === 'content' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center pointer-events-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-black tracking-widest text-[#1A1A1A] uppercase bg-white rounded-full shadow-lg">
                    <CheckCircle className="w-4 h-4 text-[#82C864]" /> Custom Coffee Packaging Solutions
                  </div>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-xl">
                    One-Stop Packaging <br />
                    <span className="text-[#82C864]">Solutions Provider</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-xl">
                    Helping coffee chains and partners boost sales through innovative, sustainable design packaging solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.hash = '#products';
                      }}
                      className="px-10 py-5 bg-[#82C864] text-white rounded-full font-black text-sm tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all shadow-xl hover:shadow-2xl"
                    >
                      DISCOVER MORE
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openInquiry();
                      }}
                      className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-black text-sm tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all"
                    >
                      GET A FREE QUOTE
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20 pointer-events-auto">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIdx(idx);
            }}
            className={`transition-all duration-300 rounded-full ${idx === currentIdx ? 'w-8 h-2 bg-[#82C864]' : 'w-2 h-2 bg-white/50 hover:bg-white'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

const Products = ({ setPage }: { setPage: (p: string) => void }) => (
  <section id="products" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#1A1A1A]">Our Products</h2>
        <div className="h-1 w-20 bg-[#82C864] rounded-full mx-auto mb-6" />
        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">From cold brew cups to premium 1kg bean bags, find the perfect packaging fit for your custom brand.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col cursor-pointer"
            onClick={() => setPage(product.page)}
          >
            <div className="relative aspect-square overflow-hidden mb-4 bg-gray-50 rounded-xl group-hover:shadow-lg transition-all duration-300">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#82C864] transition-colors">{product.name}</h3>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mt-1">{product.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Certifications = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowImage(prev => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1A1A] rounded-[2rem] p-10 lg:p-20 text-white relative">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-[2rem] pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-[#82C864]/20 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[#82C864] font-black text-sm tracking-[0.2em] uppercase mb-4 block">Dedicated Partner</span>
              <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                Empowering <br/>
                <span className="text-white/50">Local Coffee Shops</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 font-medium leading-relaxed">
                EcoPak Wholesale's solutions are tailored to help local cafes thrive. We offer safe, reliable, and beautifully crafted packaging that ensures your community brand stands out, without the hassle of global market complexities.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#82C864] border border-white/10">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <p className="font-bold">FDA Certified</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#82C864] border border-white/10">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <p className="font-bold">ISO 9001</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] sm:h-[500px] w-full lg:col-span-7">
              <AnimatePresence mode="wait">
                {!showImage ? (
                  <motion.div
                    key="cards"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full"
                  >
                    <div className="bg-white/5 p-10 rounded-3xl border border-white/10 flex flex-col justify-between h-[300px] sm:h-[400px] self-end">
                      <Leaf className="w-12 h-12 text-[#82C864] mb-12" />
                      <div>
                        <p className="text-4xl font-black">Eco</p>
                        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-3">Sustainable Materials</p>
                      </div>
                    </div>
                    <div className="bg-[#FF9F1C] p-10 rounded-3xl flex flex-col justify-between h-[300px] sm:h-[400px]">
                      <Package className="w-12 h-12 text-white mb-12" />
                      <div>
                        <p className="text-4xl font-black text-white">Safe</p>
                        <p className="text-sm text-white/60 font-bold uppercase tracking-widest mt-3">Food Grade Verified</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="image"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-[400px] sm:h-[500px]"
                  >
                    <img 
                      src="https://cdn.jsdelivr.net/gh/Nengqi915/For-Ecopak-Wholesale-Website@main/img/8e1ba12f3505fb0ec45e1c7409da0689.png" 
                      alt="Local coffee shop packaging"
                      className="w-full h-full object-contain rounded-3xl bg-white/5 p-4 border border-white/10"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/rex@ecopakwholesale.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message: details,
          _subject: "Website Inquiry from " + name
        })
      });

      if (response.ok) {
        alert('Your request has been sent successfully! We will get back to you soon.\n\n(Note: If this is the first time using this email, please check rex@ecopakwholesale.com for an activation email from FormSubmit)');
        setName('');
        setEmail('');
        setDetails('');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert('Failed to send request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-[#1A1A1A]">Contact Us</h2>
          <div className="h-1 w-20 bg-[#82C864] rounded-full mx-auto mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">We'd love to hear from you. Get in touch with our team for custom packaging solutions.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-12">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-black text-[#1A1A1A] mb-8">Get In Touch</h3>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#82C864]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="font-bold text-[#1A1A1A] text-lg mb-1">Tel</h6>
                    <p className="text-gray-500 font-medium">+86 188 9977 1415</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#82C864]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="font-bold text-[#1A1A1A] text-lg mb-1">Email</h6>
                    <p className="text-gray-500 font-medium">
                      <a href="mailto:rex@ecopakwholesale.com" className="hover:text-[#82C864] transition-colors block">rex@ecopakwholesale.com</a>
                      <a href="mailto:raymond@ecopakwholesale.com" className="hover:text-[#82C864] transition-colors block mt-1">raymond@ecopakwholesale.com</a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#82C864]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="font-bold text-[#1A1A1A] text-lg mb-1">Address</h6>
                    <p className="text-gray-500 font-medium leading-relaxed max-w-sm">
                      Room 3401C, Xiyue Building, Chuangye 2nd Road, Xin'an Street, Bao'an District, Shenzhen, Guangdong, China
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.5833446059286!2d113.88248181056586!3d22.594474779403816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403ec9bc04d0ef3%3A0xc3b832a2cd2f4e8b!2sXiyue%20Building%2C%20Xin&#39;an%20Subdistrict%2C%20Bao&#39;an%20District%2C%20Shenzhen%2C%20Guangdong%20Province%2C%20China!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
            <h3 className="text-2xl font-black text-[#1A1A1A] mb-8">Send an Inquiry</h3>
            <div className="space-y-6 text-[#1A1A1A]">
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-[#1A1A1A] focus:ring-2 focus:ring-[#82C864] transition-all outline-hidden" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm">Work Email</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-[#1A1A1A] focus:ring-2 focus:ring-[#82C864] transition-all outline-hidden" 
                  placeholder="john@company.com" 
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm">Project Details</label>
                <textarea 
                  required
                  value={details}
                  onChange={e => setDetails(e.target.value)}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-[#1A1A1A] focus:ring-2 focus:ring-[#82C864] transition-all h-40 resize-none outline-hidden" 
                  placeholder="Tell us about your packaging needs..."
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 mt-4 bg-[#82C864] text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-[#FF9F1C] transition-all disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider"
              >
                {isSubmitting ? 'SENDING...' : 'Send Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-[#1A1A1A]">
      <div className="flex items-center gap-2">
        <Logo className="w-10 h-10" />
        <span className="brand-italic text-lg tracking-tighter">EcoPak Wholesale</span>
      </div>
      <p className="text-gray-400 text-sm font-medium">© 2024 EcoPak Wholesale. All rights reserved. Your One-Stop Coffee Packaging Expert.</p>
      <div className="flex items-center gap-6">
        <a href="#" className="text-gray-400 hover:text-[#82C864] transition-colors text-sm font-medium">Privacy</a>
        <a href="#" className="text-gray-400 hover:text-[#82C864] transition-colors text-sm font-medium">Terms</a>
        <a href="#" className="text-gray-400 hover:text-[#82C864] transition-colors text-sm font-medium">LinkedIn</a>
      </div>
    </div>
  </footer>
);

const InquiryModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/rex@ecopakwholesale.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message: question,
          _subject: "Website Inquiry from " + name
        })
      });
      
      if (response.ok) {
        alert('Your inquiry has been sent successfully! We will get back to you soon.\n\n(Note: If this is the first time using this email, please check rex@ecopakwholesale.com for an activation email from FormSubmit)');
        onClose();
        setName('');
        setEmail('');
        setQuestion('');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert('Failed to send inquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#82C864]/10 blur-3xl opacity-50 translate-x-1/4 -translate-y-1/4 pointer-events-none" />
        
        <button 
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-500 transition-colors z-[60]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-10 relative z-10">
          <h2 className="text-3xl font-black text-[#1A1A1A] mb-2">Send Inquiry</h2>
          <p className="text-gray-500 font-medium mb-8">Please provide your details and we will get back to you shortly.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-sm">Full Name</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl text-[#1A1A1A] focus:ring-2 focus:ring-[#82C864] transition-all" 
                placeholder="John Doe" 
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-sm">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl text-[#1A1A1A] focus:ring-2 focus:ring-[#82C864] transition-all" 
                placeholder="john@company.com" 
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-sm">Your Question / Project Details</label>
              <textarea 
                required
                value={question}
                onChange={e => setQuestion(e.target.value)}
                className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl text-[#1A1A1A] focus:ring-2 focus:ring-[#82C864] transition-all h-32 resize-none" 
                placeholder="Tell us about your packaging needs..."
              />
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-[#FF9F1C] text-white rounded-2xl font-bold text-lg shadow-xl shadow-[#FF9F1C]/20 hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'SENDING...' : 'SEND DIRECTLY'}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo(0, 0);
    
    // If hash exists and we are on home, scroll to it
    if (currentPage === 'home' && window.location.hash) {
      const id = window.location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar setPage={setCurrentPage} currentPage={currentPage} openInquiry={() => setIsInquiryOpen(true)} />
      <AnimatePresence>
        {isInquiryOpen && (
          <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero openInquiry={() => setIsInquiryOpen(true)} />
            <Products setPage={setCurrentPage} />
            <Certifications />
            <Contact />
          </motion.div>
        ) : currentPage === 'coffee-chain-pack' ? (
          <motion.div
            key="coffee-chain-pack"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-32"
          >
            <CoffeeChainPack openInquiry={() => setIsInquiryOpen(true)} />
          </motion.div>
        ) : currentPage === 'cafe-cups' ? (
          <motion.div
            key="cafe-cups"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-32"
          >
            <CafeCups setPage={setCurrentPage} />
          </motion.div>
        ) : currentPage.startsWith('cafe-cups/') ? (
          <motion.div
            key="cafe-cups-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-32"
          >
            <CafeCupsDetail pageId={currentPage.replace('cafe-cups/', '')} setPage={setCurrentPage} openInquiry={() => setIsInquiryOpen(true)} />
          </motion.div>
        ) : currentPage === 'coffee-beans-bags' ? (
          <motion.div
            key="coffee-beans-bags"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-32"
          >
            <CoffeeBeansBags setPage={setCurrentPage} />
          </motion.div>
        ) : currentPage.startsWith('coffee-beans-bags/') ? (
          <motion.div
            key="coffee-beans-bags-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-32"
          >
            <CoffeeBeansBagsDetail pageId={currentPage.replace('coffee-beans-bags/', '')} setPage={setCurrentPage} openInquiry={() => setIsInquiryOpen(true)} />
          </motion.div>
        ) : currentPage === 'coffee-mugs' ? (
          <motion.div
            key="coffee-mugs"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-32"
          >
            <CoffeeMugs setPage={setCurrentPage} />
          </motion.div>
        ) : currentPage.startsWith('coffee-mugs/') ? (
          <motion.div
            key="coffee-mugs-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-32"
          >
            <CoffeeMugsDetail pageId={currentPage.replace('coffee-mugs/', '')} setPage={setCurrentPage} openInquiry={() => setIsInquiryOpen(true)} />
          </motion.div>
        ) : currentPage === 'your-own-design' ? (
          <motion.div
            key="your-own-design"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-32"
          >
            <YourOwnDesign setPage={setCurrentPage} />
          </motion.div>
        ) : currentPage.startsWith('your-own-design/') ? (
          <motion.div
            key="your-own-design-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-32"
          >
            <YourOwnDesignDetail pageId={currentPage.replace('your-own-design/', '')} setPage={setCurrentPage} openInquiry={() => setIsInquiryOpen(true)} />
          </motion.div>
        ) : currentPage === 'one-stop-packaging' ? (
          <motion.div
            key="one-stop-packaging"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-32"
          >
            <OneStop setPage={setCurrentPage} />
          </motion.div>
        ) : currentPage.startsWith('one-stop-packaging/') ? (
          <motion.div
            key="one-stop-packaging-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-32"
          >
            <OneStopDetail pageId={currentPage.replace('one-stop-packaging/', '')} setPage={setCurrentPage} openInquiry={() => setIsInquiryOpen(true)} />
          </motion.div>
        ) : currentPage === 'blog' ? (
          <motion.div
            key="blog"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-32"
          >
            <Blog setPage={setCurrentPage} />
          </motion.div>
        ) : currentPage.startsWith('blog/') ? (
          <motion.div
            key="blog-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-32"
          >
            <BlogDetail pageId={currentPage.replace('blog/', '')} setPage={setCurrentPage} openInquiry={() => setIsInquiryOpen(true)} />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <Footer />
    </div>
  );
}

const cafeCupProducts = [
  {
    id: "takeaway-coffee-pack",
    name: "Takeaway Coffee Pack For Cafe",
    image: "https://shopcdnpro.grainajz.com/category/83624/2839/1d9ffae5c7b498ae81f5cb84ac3a4e5c/Cafe%20Cups%201.png",
    description: "Introducing our Takeaway Coffee Pack specifically designed for cafes. This convenient packaging solution is perfect for serving your customers' favorite coffee drinks on the go. It features sturdy, eco-friendly materials that ensure both freshness and sustainability. The sleek design complements your cafe's branding, while the secure sealing ensures no spills or leaks.",
    longDescription: [
      "Our Takeaway Coffee Pack is highly customizable to fit your unique needs. Choose from a variety of sizes to accommodate different beverage volumes, from espresso shots to large lattes. These packs are microwave and freezer-safe, making them incredibly versatile for various consumer preferences. The ergonomic design and tight-sealing lids guarantee that your customers can enjoy their drinks anywhere, anytime without hassle.",
      "Furthermore, our commitment to sustainability is uncompromised. We strive to minimize environmental impact by offering fully recyclable and biodegradable options. By choosing our packaging, your business actively contributes to a greener planet, which is a major draw for today's eco-conscious consumers.",
      "Beyond practical benefits, our packaging brings a touch of modern elegance to every coffee experience. The durable construction withstands varying temperatures and keeps your drinks hot for longer. Upgrade your takeaway service and elevate your brand with our premium quality coffee packs."
    ],
    tableHeaders: ["Capacity", "Top Diameter", "Cup Size", "Lids", "Packaging"],
    tableData: [
      ["4oz", "60mm", "60W * 65H * 45B mm", "Plastic/Paper", "1000 PCS/Carton"],
      ["8oz", "80mm/90mm", "80W * 92H * 56B mm", "Plastic/Paper", "1000 PCS/Carton"],
      ["9oz", "75mm", "75W * 86H * 52B mm", "No Lids", "2000 PCS/Carton"],
      ["12oz", "90mm", "90W * 113H * 60B mm", "Plastic/Paper", "1000 PCS/Carton"],
      ["16oz", "90mm", "90W * 133H * 60B mm", "Plastic/Paper", "1000 PCS/Carton"],
      ["22oz", "90mm", "90W * 167H * 60B mm", "Plastic/Paper", "1000 PCS/Carton"],
      ["32oz", "90mm", "90W * 170H * 60B mm", "Plastic/Paper", "1000 PCS/Carton"]
    ]
  },
  {
    id: "various-coffee-drink",
    name: "Various Coffee Drink For Your Choices",
    image: "https://shopcdnpro.grainajz.com/category/83624/2839/0605b86851e8ec2fd3e1494b333007cc/Cafe%20Cups%202.png",
    description: "We offer a diverse selection of coffee paper cups to cater to every need. Whether you are looking for a classic design, a unique pattern, or a cup with special functional features, we have it all. Our cups come in a wide range of sizes (4oz, 8oz, 12oz, 16oz, 20oz) providing the perfect fit for any coffee type.",
    longDescription: [
      "Our paper cups are designed with both functionality and style in mind. Many feature excellent insulation properties to keep your coffee reliably hot for longer, while the smooth, premium finish adds an elegant touch. We also offer options that are microwave and dishwasher safe, suiting both commercial environments and home usage perfectly.",
      "Custom branding is crucial for establishing your identity. We offer extensive customization so you can proudly display your cafe's logo or a personalized message to create a memorable customer experience. Our in-house design team is always ready to assist in crafting visually striking prints that help your business stand out from the crowd.",
      "In addition to standard designs, we provide seasonal and appropriately themed cups for holidays and special occasions. From festive holiday themes to summer vibes, we have a solution for every event. Choose our sustainable options to pair your striking visual branding with an environmental ethos."
    ]
  },
  {
    id: "pizza-catering",
    name: "Pizza Catering Restaurant",
    image: "https://shopcdnpro.grainajz.com/category/83624/2839/bc0c1bc5dd8c9afb572f14cbd053a07d/Cafe%20Cups%203.png",
    description: "Our catering and restaurant paper cups provide an elevated dining experience. Designed with convenience and sustainability at the forefront, these cups are crafted from highly durable yet biodegradable materials. They are perfect for serving various beverages, from sodas to rich coffees.",
    longDescription: [
      "Each paper cup highlights an elegant, modern design that acts as an extension of your restaurant's ambiance. Providing high-quality customized cups adds a touch of professionalism and heightened brand recognition, making every customer interaction more memorable. Whether catering a small gathering or a mass event, these cups are perfectly suited for the task.",
      "Constructed under strict hygiene standards to guarantee safety, these cups feature a tightly rolled rim and a smooth interior finish that securely prevents leakage. We offer these in numerous sizes to accommodate all beverage needs. They stack neatly and are incredibly simple to store and dispose of.",
      "Beyond practical usage, taking advantage of our environmentally friendly, composable paper cups showcases your brand's commitment to reducing carbon footprints. Accompanied by our customization expertise, you can match your event's theme meticulously and efficiently."
    ]
  },
  {
    id: "cold-coffee-drink-cups",
    name: "Cold Coffee Drink Cups",
    image: "https://shopcdnpro.grainajz.com/category/83624/2839/2b757078616d0f4ab4c9d1fce97d78e8/Custom%20Your%20Brand%20Coffee%20Pack%205.png",
    description: "Cold iced coffee plastic cups are specifically optimized for serving refreshing cold or iced beverages. Made from durable and lightweight transparent plastics, they seamlessly show off your drinks' color and consistency, dramatically enhancing the visual presentation.",
    longDescription: [
      "Our cold cups feature a sturdy, cost-effective single-wall construction. They are highly adaptable and come with customizable options such as logos, distinctive patterns, and specialized finishes. To ensure convenience and prevent spills, we offer a range of securely fitting dome and flat lids.",
      "In response to growing environmental awareness, we also offer our cold cups in biodegradable and eco-friendly material alternatives. These decompose much faster in natural environments, helping your business remain visually appealing while significantly reducing ecological impact.",
      "While primarily utilized as cost-effective single-use servingware, our plastic cups boast impressive structural integrity. They resist shattering and tearing far better than many alternatives, making them ideal for the fast-paced environments of busy cafes and large-scale restaurants."
    ],
    tableHeaders: ["Capacity", "Top Diameter", "Cup Dimensions", "Unit Weight", "Lids", "Packaging"],
    tableData: [
      ["12oz", "98mm", "98T - 58H - 58B mm", "10.5g", "Dome/Flat", "1000 PCS/Carton"],
      ["16oz", "98mm", "98T - 121H - 61B mm", "16g", "Dome/Flat", "1000 PCS/Carton"],
      ["20oz", "98mm", "98T - 143H - 61B mm", "16.5g", "Dome/Flat", "1000 PCS/Carton"],
      ["24oz", "98mm", "98T - 153H - 61B mm", "16.5g", "Dome/Flat", "1000 PCS/Carton"],
      ["32oz", "107mm", "107T - 176H - 107B mm", "20g", "Dome/Flat", "600 PCS/Carton"]
    ]
  },
  {
    id: "double-walls-paper-cups",
    name: "Double Walls Paper Cups",
    image: "https://shopcdnpro.grainajz.com/category/83624/2839/e884806783603261192a7d422e191d6d/Custom%20Your%20Brand%20Coffee%20Pack%206.png",
    description: "Double Wall Hot Drinks Paper Cups are meticulously designed to keep your beverages hot for an extended period. The inventive double-wall construction provides exceptional insulation, avoiding rapid heat loss and minimizing uncomfortable exterior condensation.",
    longDescription: [
      "Manufactured from high-quality paper material, our double wall cups are structurally sturdy and wonderfully eco-friendly. They eliminate the need for an external sleeve while ensuring a safe, comfortable grip for your customers. They are indisputably the premium choice for serving gourmet coffees, teas, and rich hot chocolates.",
      "Available across a broad spectrum of sizes—ranging from espresso portions to large latte sizes—these cups consistently maintain a sleek, sophisticated aesthetic. To prevent frustrating spills during transit, tightly fitting splash-proof lids accompany these cups seamlessly.",
      "We encourage incorporating brand identity straight onto the walls of these premium cups. Furthermore, we increasingly utilize recycled paper inputs and offer biodegradable coatings, aligning your top-tier branding with highly responsible environmental stewardship."
    ],
    tableHeaders: ["Capacity", "Top Diameter", "Cup Size", "Lids", "Packaging"],
    tableData: [
      ["4oz", "60mm", "60W * 60H * 42B mm", "Plastic/Paper", "1000 PCS/Carton"],
      ["8oz", "80mm/90mm", "80W * 92H * 56B mm", "Plastic/Paper", "500 PCS/Carton"],
      ["10oz", "90mm", "90W * 94H * 60B mm", "Plastic/Paper", "500 PCS/Carton"],
      ["12oz", "90mm", "90W * 113H * 60B mm", "Plastic/Paper", "500 PCS/Carton"],
      ["16oz", "90mm", "90W * 133H * 60B mm", "Plastic/Paper", "500 PCS/Carton"],
      ["20oz", "90mm", "90W * 158H * 60B mm", "Plastic/Paper", "500 PCS/Carton"]
    ]
  }
];

const CafeCups = ({ setPage }: { setPage: (p: string) => void }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
    <div className="mb-20 text-center">
      <span className="text-[#82C864] font-black text-sm tracking-[0.3em] uppercase mb-4 block">Our Collection</span>
      <h1 className="text-5xl lg:text-7xl font-black mb-8 text-[#1A1A1A]">Cafe <span className="text-[#FF9F1C]">Cups</span></h1>
      <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
        Explore our premium range of disposable coffee cups and packaging for cafes, restaurants, and wholesale.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cafeCupProducts.map((item, index) => (
        <div 
          key={item.id}
          onClick={() => setPage(`cafe-cups/${item.id}`)}
          className={`group cursor-pointer rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl hover:shadow-[#FF9F1C]/20 transition-all duration-300 border border-gray-100 ${index === 3 || index === 4 ? 'lg:col-span-1' : ''}`}
        >
          <div className="aspect-[4/3] overflow-hidden bg-gray-50 p-6 flex justify-center items-center">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8 text-center bg-white">
            <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#FF9F1C] transition-colors">{item.name}</h3>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#82C864] uppercase tracking-wider group-hover:translate-x-2 transition-transform">
              View Details <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CafeCupsDetail = ({ pageId, setPage, openInquiry }: { pageId: string; setPage: (p: string) => void; openInquiry: () => void }) => {
  const item = cafeCupProducts.find(p => p.id === pageId);
  
  if (!item) return <div className="py-32 text-center text-2xl font-bold">Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <button 
        onClick={() => setPage('cafe-cups')}
        className="flex items-center gap-2 text-gray-500 hover:text-[#1A1A1A] font-bold mb-12 transition-colors uppercase tracking-wider text-sm"
      >
        <ChevronRight className="w-4 h-4 rotate-180" /> Back to Cafe Cups
      </button>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="bg-gray-50 rounded-[3rem] p-12 flex justify-center items-center shadow-xl border border-gray-100 sticky top-32">
          <img src={item.image} alt={item.name} className="w-full h-auto object-contain max-h-[600px]" />
        </div>
        
        <div className="space-y-10">
          <div>
            <span className="text-[#82C864] font-black text-sm tracking-[0.3em] uppercase mb-4 block">Product Detail</span>
            <h1 className="text-4xl lg:text-6xl font-black mb-8 text-[#1A1A1A] capitalize leading-snug">
              {item.name.toLowerCase()}
            </h1>
            <p className="text-xl text-gray-600 font-medium leading-relaxed mb-8">
              {item.description}
            </p>
            
            <div className="space-y-6 text-gray-500 font-medium leading-relaxed border-b border-gray-100 pb-10">
              {item.longDescription?.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {'tableHeaders' in item && 'tableData' in item && (
            <div>
              <h3 className="text-2xl font-black text-[#1A1A1A] mb-6">Specifications</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      {item.tableHeaders?.map((h: string) => (
                        <th key={h} className="p-4 font-bold text-sm text-gray-700 uppercase tracking-wider border-b border-gray-100">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {item.tableData?.map((row: string[], idx: number) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        {row.map((cell: string, cellIdx: number) => (
                          <td key={cellIdx} className="p-4 text-sm text-gray-600 border-b border-gray-50 last:border-0">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="space-y-6 mt-12 bg-gray-50 p-8 rounded-3xl">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#82C864]/10 flex justify-center items-center text-[#82C864]">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-700">Food Grade Certified</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FF9F1C]/10 flex justify-center items-center text-[#FF9F1C]">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-700">Fully Customizable Branding</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#82C864]/10 flex justify-center items-center text-[#82C864]">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-700">Bulk & Wholesale Pricing</span>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              onClick={openInquiry}
              className="px-10 py-5 bg-[#1A1A1A] text-white rounded-2xl font-black text-sm tracking-widest hover:bg-[#FF9F1C] transition-all shadow-xl hover:shadow-[#FF9F1C]/30 w-full md:w-auto text-center"
            >
              SEND INQUIRY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CoffeeChainPack = ({ openInquiry }: { openInquiry: () => void }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
    <div className="mb-20">
      <span className="text-[#82C864] font-black text-sm tracking-[0.3em] uppercase mb-4 block">Specialized Solutions</span>
      <h1 className="text-5xl lg:text-7xl font-black mb-8 text-[#1A1A1A]">Coffee Chain <br/><span className="text-[#FF9F1C]">Packaging</span></h1>
      <p className="text-xl text-gray-500 max-w-2xl font-medium leading-relaxed">
        Comprehensive branded solutions specifically designed for coffee franchises. From takeaway carriers to premium tubes, we ensure your brand consistency across every touchpoint.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      <div className="group relative overflow-hidden rounded-[3rem] bg-gray-50 aspect-square flex items-center justify-center border-4 border-white shadow-xl">
        <Package className="w-32 h-32 text-[#82C864]/20 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 p-12 flex flex-col justify-end text-[#1A1A1A]">
          <h3 className="text-3xl font-black mb-4">Cup Carrier Takeaway</h3>
          <p className="text-gray-500 font-bold mb-6">Innovative, stable, and sustainable cup carriers for high-volume coffee service.</p>
          <button onClick={openInquiry} className="w-fit px-6 py-3 bg-[#1A1A1A] text-white rounded-xl font-black text-sm hover:bg-[#82C864] transition-all">LEARN MORE</button>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-[3rem] bg-gray-50 aspect-square flex items-center justify-center border-4 border-white shadow-xl">
        <Coffee className="w-32 h-32 text-[#FF9F1C]/20 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 p-12 flex flex-col justify-end text-[#1A1A1A]">
          <h3 className="text-3xl font-black mb-4">Paper Tube For Coffee</h3>
          <p className="text-gray-500 font-bold mb-6">Premium cylinder packaging for ground coffee and specialty beans. Elevate your shelf presence.</p>
          <button onClick={openInquiry} className="w-fit px-6 py-3 bg-[#FF9F1C] text-white rounded-xl font-black text-sm hover:bg-[#1A1A1A] transition-all">LEARN MORE</button>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-[3rem] bg-gray-50 aspect-square flex items-center justify-center border-4 border-white shadow-xl">
        <ShoppingBag className="w-32 h-32 text-[#82C864]/20 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 p-12 flex flex-col justify-end text-[#1A1A1A]">
          <h3 className="text-3xl font-black mb-4">Drip Coffee Box</h3>
          <p className="text-gray-500 font-bold mb-6">Elegant presentation boxes for retail-ready drip coffee bags. Standardized for chain operations.</p>
          <button onClick={openInquiry} className="w-fit px-6 py-3 bg-[#1A1A1A] text-white rounded-xl font-black text-sm hover:bg-[#82C864] transition-all">LEARN MORE</button>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-[3rem] bg-[#82C864] aspect-square flex items-center justify-center border-4 border-white shadow-xl hover:bg-[#1A1A1A] transition-colors cursor-pointer" onClick={openInquiry}>
        <div className="p-12 text-white h-full flex flex-col justify-center">
          <h3 className="text-4xl font-black mb-6">All Ship Together</h3>
          <p className="text-white/80 text-xl font-bold mb-8">Reduce logistics costs with consolidated shipping. We manage the complexity, you save on bulk.</p>
          <div className="flex items-center gap-4 text-white font-black group-hover:gap-6 transition-all uppercase text-sm tracking-widest">
            <span>GET A QUOTE</span>
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
