import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const PAY_SERVICES = [
 { 
  title: "عوارض نوسازی",
  desc: "پرداخت و پیگیری قبض",
  link: "/payment"
},
 
  {
    title: "عوارض کسب و پیشه",
    desc: "پرداخت عوارض واحد صنفی",
    link: "/business"
  },
  {
    title: "بدهی نوسازی ملک",
    desc: "مشاهده و تسویه بدهی",
    link: "/debt"
  },
  {
    title: "فیش درآمد",
    desc: "دریافت و پرداخت آنلاین",
    link: "/income"
  },
];

const INFO_SERVICES = [
  {
    title: "شناسایی کد نوسازی",
    desc: "بر اساس آدرس یا مالکیت",
    link: "/renewal-code"
  },
  {
    title: "سوابق پرونده ملک",
    desc: "مشاهده سابقه‌ی مجاز",
    link: "/property-history"
  },
  {
    title: "آراء کمیسیون ماده صد",
    desc: "پیگیری نتیجه رأی",
    link: "/commission"
  },
  {
    title: "تأیید اعتبار گواهی",
    desc: "استعلام صحت مدارک",
    link: "/certificate-check"
  },
];

const CIVIC_SERVICES = [
  {
    title: "صدور گواهی شهرداری",
    desc: "ثبت درخواست جدید",
    link: "/certificate"
  },
  {
    title: "پیگیری درخواست‌ها",
    desc: "وضعیت پرونده‌های ارسالی",
    link: "/requests"
  },
  {
    title: "ثبت اعتراض ملکی",
    desc: "سامانه اعتراضات ممیزی",
    link: "/objection"
  },
];

const ICONS = {
  invoice: (
    <path d="M3 8h18M3 8v9a2 2 0 002 2h14a2 2 0 002-2V8M3 8l2-4h14l2 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  card: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </>
  ),
  debt: (
    <path d="M12 2v20M17 6H9.5a3 3 0 000 6H14a3 3 0 010 6H6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
  ),
  receipt: (
    <>
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M4 10h16" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </>
  ),
  file: (
    <>
      <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </>
  ),
  shield: (
    <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
  ),
  check: (
    <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  cert: (
    <>
      <path d="M4 20V10l8-6 8 6v10" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
      <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </>
  ),
  list: (
    <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
  ),
  flag: (
    <>
      <path d="M12 20s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </>
  ),
};

const PAY_ICONS = [ICONS.invoice, ICONS.card, ICONS.debt, ICONS.receipt];
const INFO_ICONS = [ICONS.search, ICONS.file, ICONS.shield, ICONS.check];
const CIVIC_ICONS = [ICONS.cert, ICONS.list, ICONS.flag];

function ServiceGrid({ items, icons }) {
  return (
    <div className="service-grid">
      {items.map((item, i) => (
        <Link className="service-card" key={item.title} to={item.link || "#"}>
          <div className="service-icon">
            <svg width="22" height="22" viewBox="0 0 24 24">{icons[i]}</svg>
          </div>
          <div className="service-text">
            <b>{item.title}</b>
            <span>{item.desc}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function MunicipalityPortal() {
  const particlesRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    // ambient floating particles
    const box = particlesRef.current;
    if (box && box.childElementCount === 0) {
      const COUNT = 26;
      for (let i = 0; i < COUNT; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const dur = 9 + Math.random() * 12;
        const delay = Math.random() * 16;
        const drift = Math.random() * 60 - 30 + "px";
        p.style.width = size + "px";
        p.style.height = size + "px";
        p.style.left = left + "%";
        p.style.bottom = "-20px";
        p.style.setProperty("--drift", drift);
        p.style.animationDuration = dur + "s";
        p.style.animationDelay = delay + "s";
        box.appendChild(p);
      }
    }

    // scroll reveal
    const revealEls = rootRef.current
      ? rootRef.current.querySelectorAll(".reveal")
      : [];
    if ("IntersectionObserver" in window && revealEls.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in-view");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      revealEls.forEach((el) => el.classList.add("in-view"));
    }
  }, []);

  return (
    <div ref={rootRef} dir="rtl" lang="fa" className="mp-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lalezar&family=Vazirmatn:wght@400;500;600;700;800&display=swap');
      
        .mp-root{
          --navy-950:#0E2A52; --navy-800:#153E77; --navy-700:#1A4A8C;
          --blue-600:#1E63A8; --blue-500:#2C79C4; --blue-400:#4C93D6;
          --teal-500:#2CA6A0; --teal-400:#3FBDB6;
          --gold-500:#C99A2E; --gold-400:#E4B95A;
          --sand-50:#FBF9F4; --sand-100:#F3EFE3;
          --ink-900:#1C2530; --ink-600:#4C5A69; --ink-400:#7C8A97;
          --mist-300:#B9C6D3; --mist-400:#8FA0AF; --white:#FFFFFF;
          --radius-lg:28px;
          margin:0; font-family:'Vazirmatn', sans-serif; background:var(--navy-950); color:var(--ink-900);
          -webkit-font-smoothing:antialiased;
        }
        .mp-root *{box-sizing:border-box;}
        .mp-root img, .mp-root svg{display:block; max-width:100%;}
        .mp-root a{color:inherit; text-decoration:none;}
        .mp-root button{font-family:inherit;}

        @media (prefers-reduced-motion: reduce){
          .mp-root *{animation-duration:0.001ms !important; animation-iteration-count:1 !important; transition-duration:0.001ms !important;}
        }

        .mp-root .wrap{max-width:1240px; margin-inline:auto; padding-inline:28px;}
        .mp-root .eyebrow{display:inline-flex; align-items:center; gap:8px; font-size:13px; font-weight:600; color:var(--teal-400); letter-spacing:.5px;}
        .mp-root .eyebrow::before{content:""; width:16px; height:2px; background:var(--teal-400); border-radius:2px;}

        .mp-root .topbar{position:sticky; top:0; z-index:50; background:rgba(11,31,53,.72); backdrop-filter:blur(14px); border-block-end:1px solid rgba(255,255,255,.08);}
        .mp-root .topbar-inner{display:flex; align-items:center; justify-content:space-between; height:74px;}
        .mp-root .brand{display:flex; align-items:center; gap:12px; color:var(--white);}
        .mp-root .brand-mark{width:42px; height:42px; border-radius:12px; background:linear-gradient(155deg, var(--gold-400), var(--teal-500)); display:flex; align-items:center; justify-content:center; flex-shrink:0;}
        .mp-root .brand-name{display:flex; flex-direction:column; line-height:1.3;}
        .mp-root .brand-name b{font-size:16px; font-weight:700; color:var(--white);}
        .mp-root .brand-name span{font-size:12px; color:var(--mist-300);}

        .mp-root .nav-links{display:flex; align-items:center; gap:30px; font-size:14.5px; font-weight:500; color:#D7E0E8;}
        .mp-root .nav-links a{position:relative; padding-block:6px;}
        .mp-root .nav-links a::after{content:""; position:absolute; inset-inline:0; block-size:2px; inset-block-end:0; background:var(--teal-400); transform:scaleX(0); transition:transform .25s ease;}
        .mp-root .nav-links a:hover::after{transform:scaleX(1);}
        .mp-root .nav-links a:hover{color:var(--white);}

        .mp-root .top-actions{display:flex; align-items:center; gap:10px;}
        .mp-root .btn{display:inline-flex; align-items:center; justify-content:center; padding:10px 20px; border-radius:999px; font-size:13.5px; font-weight:600; cursor:pointer; border:1.5px solid transparent; transition:.2s ease; white-space:nowrap;}
        .mp-root .btn-ghost{color:var(--white); border-color:rgba(255,255,255,.28);}
        .mp-root .btn-ghost:hover{border-color:rgba(255,255,255,.6); background:rgba(255,255,255,.06);}
        .mp-root .btn-solid{background:var(--white); color:var(--navy-950); box-shadow:0 6px 18px rgba(0,0,0,.12);}
        .mp-root .btn-solid:hover{background:var(--teal-400); color:var(--white); transform:translateY(-1px);}
        .mp-root .menu-toggle{display:none; background:none; border:none; color:var(--white); cursor:pointer;}

        .mp-root .hero{position:relative; overflow:hidden; background:linear-gradient(165deg, var(--blue-500) 0%, var(--navy-700) 46%, var(--navy-950) 100%); color:var(--white); padding-block:56px 90px;}

        .mp-root .hero-glow{position:absolute; inset:0; z-index:0; pointer-events:none;}
        .mp-root .glow{position:absolute; border-radius:50%; filter:blur(70px); opacity:.5; mix-blend-mode:screen;}
        .mp-root .glow-gold{width:560px; height:560px; background:radial-gradient(circle, rgba(228,185,90,.75), transparent 70%); inset-inline-end:-160px; inset-block-start:-180px; animation:drift-a 16s ease-in-out infinite;}
        .mp-root .glow-teal{width:500px; height:500px; background:radial-gradient(circle, rgba(63,189,182,.6), transparent 70%); inset-inline-start:-140px; inset-block-start:420px; animation:drift-b 20s ease-in-out infinite;}
        .mp-root .glow-blue{width:420px; height:420px; background:radial-gradient(circle, rgba(76,147,214,.45), transparent 70%); inset-inline-start:40%; inset-block-start:-60px; animation:drift-c 24s ease-in-out infinite;}
        @keyframes drift-a{0%,100%{transform:translate(0,0) scale(1);} 50%{transform:translate(-40px,30px) scale(1.12);}}
        @keyframes drift-b{0%,100%{transform:translate(0,0) scale(1);} 50%{transform:translate(30px,-24px) scale(1.08);}}
        @keyframes drift-c{0%,100%{transform:translate(0,0) scale(1);} 50%{transform:translate(-24px,20px) scale(.94);}}

        .mp-root .particles{position:absolute; inset:0; z-index:1; pointer-events:none;}
        .mp-root .particle{position:absolute; border-radius:50%; background:radial-gradient(circle, rgba(255,255,255,.9), rgba(255,255,255,0) 70%); animation:rise linear infinite; opacity:0;}
        @keyframes rise{0%{transform:translateY(0) translateX(0); opacity:0;} 10%{opacity:.85;} 90%{opacity:.35;} 100%{transform:translateY(-620px) translateX(var(--drift,20px)); opacity:0;}}

        .mp-root .hero-pattern{position:absolute; inset:-10%; z-index:1; opacity:.07; pointer-events:none; mix-blend-mode:screen; animation:spin-slow 160s linear infinite;}
        @keyframes spin-slow{from{transform:rotate(0deg);} to{transform:rotate(360deg);}}

        .mp-root .city-sun{position:absolute; z-index:1; pointer-events:none; top:-40px; left:50%; transform:translateX(-50%); width:min(980px, 130vw); opacity:.5;}
        .mp-root .sun-core{animation:pulse-halo 6s ease-in-out infinite; transform-origin:center;}
        .mp-root .sun-rays{animation:spin-slow 90s linear infinite; transform-origin:420px 230px;}
        @keyframes pulse-halo{0%,100%{opacity:.75;} 50%{opacity:1;}}

        .mp-root .hero-head{position:relative; z-index:3; text-align:center; max-width:640px; margin:0 auto 40px;}
        .mp-root .hero-head .eyebrow{justify-content:center; margin-bottom:14px;}
        .mp-root .hero-head h1{font-size:clamp(26px, 3vw, 34px); line-height:1.45; margin:0; color:var(--white); font-weight:800;}
        .mp-root .hero-head h1 em{font-style:normal; color:var(--gold-400);}

        .mp-root .service-search{position:relative; z-index:3; display:flex; align-items:center; gap:10px; background:var(--white); border:1px solid rgba(255,255,255,.5); border-radius:14px; padding:6px; max-width:480px; margin:0 auto 46px; box-shadow:0 16px 34px rgba(6,18,36,.28);}
        .mp-root .service-search input{flex:1; border:none; outline:none; background:none; font-family:inherit; font-size:14.5px; color:var(--ink-900); padding:10px 14px;}
        .mp-root .service-search input::placeholder{color:var(--ink-400);}
        .mp-root .service-search .icon{width:36px; height:36px; border-radius:10px; background:var(--sand-50); display:flex; align-items:center; justify-content:center; color:var(--ink-400); flex-shrink:0; margin-inline-start:6px;}

        .mp-root .service-group{position:relative; z-index:3; margin-bottom:48px;}
        .mp-root .group-title{display:flex; align-items:center; gap:10px; font-size:14px; font-weight:700; color:var(--mist-300); margin-bottom:18px;}
        .mp-root .group-title .dot{width:9px; height:9px; border-radius:50%;}
        .mp-root .group-title.c-pay .dot{background:var(--blue-400);}
        .mp-root .group-title.c-info .dot{background:var(--teal-400);}
        .mp-root .group-title.c-civic .dot{background:var(--gold-400);}

        .mp-root .service-grid{display:grid; grid-template-columns:repeat(4, 1fr); gap:18px;}
        .mp-root .service-card{display:flex; flex-direction:column; align-items:center; text-align:center; gap:12px; background:var(--white); border:1px solid rgba(255,255,255,.6); border-radius:var(--radius-lg); padding:30px 18px 24px; box-shadow:0 14px 34px rgba(6,18,36,.22); transition:transform .25s ease, box-shadow .25s ease; cursor:pointer;}
        .mp-root .service-card:hover{transform:translateY(-6px); box-shadow:0 20px 44px rgba(6,18,36,.32);}
        .mp-root .service-icon{flex-shrink:0; width:58px; height:58px; border-radius:20px; display:flex; align-items:center; justify-content:center; color:#fff; box-shadow:inset 0 -3px 0 rgba(0,0,0,.08); transition:transform .45s cubic-bezier(.34,1.56,.64,1), border-radius .3s ease, box-shadow .3s ease; animation:icon-float 3.4s ease-in-out infinite;}
        .mp-root .service-grid .service-card:nth-child(4n+2) .service-icon{animation-delay:.3s;}
        .mp-root .service-grid .service-card:nth-child(4n+3) .service-icon{animation-delay:.6s;}
        .mp-root .service-grid .service-card:nth-child(4n+4) .service-icon{animation-delay:.9s;}
        @keyframes icon-float{0%,100%{transform:translateY(0);} 50%{transform:translateY(-4px);}}
        .mp-root .service-card:hover .service-icon{animation-play-state:paused; transform:scale(1.14) rotate(-6deg); border-radius:28%; box-shadow:0 10px 20px rgba(14,42,82,.22), inset 0 -3px 0 rgba(0,0,0,.08);}
        .mp-root .service-icon svg{transition:transform .4s ease;}
        .mp-root .service-card:hover .service-icon svg{transform:scale(1.08) rotate(4deg);}
        .mp-root .service-grid .service-card:nth-child(4n+1) .service-icon{background:linear-gradient(155deg,#3FBDB6,#1C8A85);}
        .mp-root .service-grid .service-card:nth-child(4n+2) .service-icon{background:linear-gradient(155deg,#4C93D6,#1E63A8);}
        .mp-root .service-grid .service-card:nth-child(4n+3) .service-icon{background:linear-gradient(155deg,#E4B95A,#C99A2E);}
        .mp-root .service-grid .service-card:nth-child(4n+4) .service-icon{background:linear-gradient(155deg,#8D7BD8,#5B4CB0);}
        .mp-root .service-text b{display:block; font-size:14.5px; font-weight:700; color:var(--ink-900); line-height:1.5;}
        .mp-root .service-text span{display:block; font-size:12px; color:var(--ink-400); margin-top:2px;}

        .mp-root .reveal{opacity:0; transform:translateY(18px); transition:opacity .6s ease, transform .6s ease;}
        .mp-root .reveal.in-view{opacity:1; transform:translateY(0);}

        .mp-root footer{background:var(--navy-950); padding-block:34px; color:var(--mist-300); border-block-start:1px solid rgba(255,255,255,.08);}
        .mp-root .footer-inner{display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px;}
        .mp-root .footer-brand{display:flex; align-items:center; gap:10px;}
        .mp-root .footer-brand .brand-mark{width:32px; height:32px; border-radius:9px;}
        .mp-root .footer-brand span{font-size:13px; color:var(--mist-400);}
        .mp-root .footer-meta{font-size:12.5px; color:var(--mist-400);}

        @media (max-width:980px){
          .mp-root .nav-links{display:none;}
          .mp-root .menu-toggle{display:inline-flex;}
          .mp-root .service-grid{grid-template-columns:repeat(2,1fr);}
        }
        @media (max-width:560px){
          .mp-root .service-grid{grid-template-columns:1fr;}
          .mp-root .wrap{padding-inline:18px;}
          .mp-root .footer-inner{flex-direction:column; align-items:flex-start;}
          .mp-root .hero-head h1{font-size:22px;}
        }
      `}</style>

      <header className="topbar">
        <div className="wrap topbar-inner">
          <div className="brand">
            <div className="brand-mark">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2 L21 7.5 V16.5 L12 22 L3 16.5 V7.5 Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M12 2 V22 M3 7.5 L21 16.5 M21 7.5 L3 16.5" stroke="white" strokeWidth="1" opacity=".55" />
              </svg>
            </div>
            <div className="brand-name">
              <b>شهرداری نمونه</b>
              <span>درگاه خدمات هوشمند شهروندی</span>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#top">خانه</a>
            <a href="#services">خدمات</a>
          </nav>
          <div className="top-actions">
            <Link className="btn btn-ghost" to="/login">
  ورود شهروند
</Link>

<Link className="btn btn-solid" to="/login">
  ثبت‌نام
</Link>
            <button className="menu-toggle" aria-label="منو">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="services">
        <div className="hero-glow">
          <div className="glow glow-gold" />
          <div className="glow glow-teal" />
          <div className="glow glow-blue" />
        </div>

        <div className="particles" ref={particlesRef} />

        <svg className="hero-pattern" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="girih" width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
              <g stroke="#E4B95A" strokeWidth="1" fill="none" opacity=".8">
                <path d="M23 0 L46 23 L23 46 L0 23 Z" />
                <path d="M23 6 L40 23 L23 40 L6 23 Z" />
                <circle cx="23" cy="23" r="3" />
              </g>
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#girih)" />
        </svg>

        {/* Conceptual signature graphic: sun rising over the city skyline */}
        <svg className="city-sun" viewBox="0 0 840 420" preserveAspectRatio="xMidYMax meet">
          <defs>
            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FCE7B0" />
              <stop offset="55%" stopColor="#E4B95A" />
              <stop offset="100%" stopColor="#E4B95A" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="cityFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#DDEBF6" stopOpacity=".9" />
              <stop offset="100%" stopColor="#DDEBF6" stopOpacity=".35" />
            </linearGradient>
          </defs>

          <g className="sun-rays" stroke="#E4B95A" strokeWidth="2" strokeLinecap="round" opacity=".55">
            <path d="M420 230 L420 90" />
            <path d="M420 230 L540 130" />
            <path d="M420 230 L300 130" />
            <path d="M420 230 L610 190" />
            <path d="M420 230 L230 190" />
            <path d="M420 230 L580 260" />
            <path d="M420 230 L260 260" />
          </g>

          <circle className="sun-core" cx="420" cy="230" r="92" fill="url(#sunGlow)" />
          <circle cx="420" cy="230" r="58" fill="none" stroke="#FCE7B0" strokeWidth="1.5" opacity=".8" />

          <g fill="none" stroke="url(#cityFade)" strokeWidth="2.2" strokeLinejoin="round">
            <path d="M60 340 V300 H100 V340" />
            <path d="M100 340 V270 H150 V340" />
            <path d="M150 340 V310 H190 V340" />
            <path d="M330 340 V240 H360 V220 A60 60 0 0 1 480 220 V240 H510 V340" />
            <path d="M420 220 V190" />
            <circle cx="420" cy="182" r="8" />
            <path d="M375 340 V270 M405 340 V270 M435 340 V270 M465 340 V270" strokeWidth="1.4" opacity=".6" />
            <path d="M560 340 V280 H600 V340" />
            <path d="M600 340 V300 H650 V340" />
            <path d="M650 340 V250 H700 V340" />
            <path d="M700 340 V300 H740 V340" />
            <path d="M40 340 H780" strokeWidth="2" />
          </g>
        </svg>

        <div className="wrap">
          <div className="hero-head reveal">
            <span className="eyebrow">درگاه خدمات شهروندی</span>
            <h1>هر خدمت شهرداری، <em>یک کلیک</em> با شما فاصله دارد</h1>
          </div>

          <div className="service-search reveal">
            <input type="text" placeholder="جستجوی خدمت..." />
            <div className="icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="service-group reveal">
            <div className="group-title c-pay"><span className="dot" />پرداخت‌ها</div>
            <ServiceGrid items={PAY_SERVICES} icons={PAY_ICONS} />
          </div>

          <div className="service-group reveal">
            <div className="group-title c-info"><span className="dot" />استعلام‌ها</div>
            <ServiceGrid items={INFO_SERVICES} icons={INFO_ICONS} />
          </div>

          <div className="service-group reveal">
            <div className="group-title c-civic"><span className="dot" />خدمات شهروندی</div>
            <ServiceGrid items={CIVIC_SERVICES} icons={CIVIC_ICONS} />
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <div className="brand-mark">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2 L21 7.5 V16.5 L12 22 L3 16.5 V7.5 Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </div>
            <span>شهرداری شهرآفتاب — درگاه خدمات هوشمند شهروندی</span>
          </div>
          <div className="footer-meta">© ۱۴۰۵ تمامی حقوق محفوظ است.</div>
        </div>
      </footer>
    </div>
  );
}
