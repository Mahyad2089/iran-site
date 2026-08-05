import { useState } from "react";

export default function AuthPage() {
  const [tab, setTab] = useState("login"); // "login" | "register"
  const [showPass, setShowPass] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2200);
  };

  return (
    <div dir="rtl" lang="fa" className="auth-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&display=swap');

        .auth-root{
          --navy-950:#0E2A52; --navy-700:#1A4A8C;
          --blue-500:#2C79C4; --blue-400:#4C93D6;
          --teal-500:#2CA6A0; --teal-400:#3FBDB6;
          --gold-500:#C99A2E; --gold-400:#E4B95A;
          --sand-50:#FBF9F4;
          --ink-900:#1C2530; --ink-600:#4C5A69; --ink-400:#7C8A97;
          --mist-300:#B9C6D3; --mist-400:#8FA0AF; --white:#FFFFFF;
          --danger:#D2483C; --success:#2CA67A;
          margin:0; min-height:100vh; font-family:'Vazirmatn', sans-serif; color:var(--ink-900);
          -webkit-font-smoothing:antialiased;
          position:relative; overflow:hidden;
          background:linear-gradient(165deg, var(--blue-500) 0%, var(--navy-700) 46%, var(--navy-950) 100%);
          display:flex; flex-direction:column;
        }
        .auth-root *{box-sizing:border-box;}
        .auth-root a{color:inherit; text-decoration:none;}
        .auth-root button{font-family:inherit;}

        @media (prefers-reduced-motion: reduce){
          .auth-root *{animation-duration:.001ms !important; transition-duration:.001ms !important;}
        }

        .auth-root .glow{position:absolute; border-radius:50%; filter:blur(70px); opacity:.45; mix-blend-mode:screen; pointer-events:none;}
        .auth-root .glow-gold{width:520px; height:520px; background:radial-gradient(circle, rgba(228,185,90,.75), transparent 70%); inset-inline-end:-160px; inset-block-start:-160px; animation:drift-a 16s ease-in-out infinite;}
        .auth-root .glow-teal{width:460px; height:460px; background:radial-gradient(circle, rgba(63,189,182,.6), transparent 70%); inset-inline-start:-140px; inset-block-end:-160px; animation:drift-b 20s ease-in-out infinite;}
        @keyframes drift-a{0%,100%{transform:translate(0,0) scale(1);} 50%{transform:translate(-30px,24px) scale(1.1);}}
        @keyframes drift-b{0%,100%{transform:translate(0,0) scale(1);} 50%{transform:translate(24px,-20px) scale(1.06);}}

        .auth-root .topbar{position:relative; z-index:5; display:flex; align-items:center; justify-content:space-between; padding:22px 28px;}
        .auth-root .brand{display:flex; align-items:center; gap:10px; color:var(--white);}
        .auth-root .brand-mark{width:38px; height:38px; border-radius:11px; background:linear-gradient(155deg, var(--gold-400), var(--teal-500)); display:flex; align-items:center; justify-content:center; flex-shrink:0;}
        .auth-root .brand-name{display:flex; flex-direction:column; line-height:1.25;}
        .auth-root .brand-name b{font-size:15px; font-weight:700;}
        .auth-root .brand-name span{font-size:11.5px; color:var(--mist-300);}
        .auth-root .back-link{font-size:13.5px; color:var(--mist-300); display:flex; align-items:center; gap:6px;}
        .auth-root .back-link:hover{color:var(--white);}

        .auth-root .stage{position:relative; z-index:3; flex:1; display:flex; align-items:center; justify-content:center; padding:20px 20px 60px;}

        .auth-card{
          width:100%; max-width:420px; background:var(--white); border-radius:26px;
          padding:34px 30px 30px; box-shadow:0 30px 70px rgba(6,18,36,.35);
        }
        .auth-card .eyebrow{display:inline-flex; align-items:center; gap:8px; font-size:12.5px; font-weight:600; color:var(--teal-500); letter-spacing:.4px; margin-bottom:8px;}
        .auth-card .eyebrow::before{content:""; width:14px; height:2px; background:var(--teal-500); border-radius:2px;}
        .auth-card h1{font-size:22px; margin:0 0 22px; color:var(--navy-950); font-weight:800;}

        .auth-tabs{display:flex; background:var(--sand-50); border-radius:14px; padding:5px; margin-bottom:24px;}
        .auth-tabs button{
          flex:1; border:none; background:none; padding:11px 0; border-radius:10px; font-size:14px; font-weight:700;
          color:var(--ink-400); cursor:pointer; transition:.2s ease;
        }
        .auth-tabs button.active{background:var(--navy-950); color:var(--white); box-shadow:0 6px 16px rgba(14,42,82,.25);}

        .field{margin-bottom:16px;}
        .field label{display:block; font-size:13px; font-weight:600; color:var(--ink-600); margin-bottom:7px;}
        .field .input-wrap{position:relative;}
        .field input{
          width:100%; padding:13px 14px; border-radius:12px; border:1.5px solid #E7E2D4; background:var(--sand-50);
          font-family:inherit; font-size:14.5px; color:var(--ink-900); outline:none; transition:.18s ease;
        }
        .field input:focus{border-color:var(--teal-400); background:var(--white); box-shadow:0 0 0 4px rgba(63,189,182,.12);}
        .field .toggle-pass{
          position:absolute; inset-inline-start:12px; top:50%; transform:translateY(-50%);
          background:none; border:none; color:var(--ink-400); cursor:pointer; padding:2px;
        }
        .field.has-toggle input{padding-inline-start:38px;}

        .field-row{display:flex; gap:12px;}
        .field-row .field{flex:1;}

        .aux-row{display:flex; align-items:center; justify-content:space-between; margin:2px 0 22px; font-size:13px;}
        .aux-row label{display:flex; align-items:center; gap:7px; color:var(--ink-600); cursor:pointer;}
        .aux-row a{color:var(--blue-500); font-weight:600;}
        .aux-row a:hover{text-decoration:underline;}

        .submit-btn{
          width:100%; padding:14px 0; border-radius:14px; border:none; cursor:pointer;
          background:linear-gradient(135deg, var(--gold-400), var(--gold-500)); color:var(--navy-950);
          font-size:15px; font-weight:700; box-shadow:0 12px 28px rgba(201,154,46,.32);
          transition:.2s ease;
        }
        .submit-btn:hover{transform:translateY(-1px); box-shadow:0 16px 34px rgba(201,154,46,.42);}
        .submit-btn:active{transform:translateY(0);}

        .divider{display:flex; align-items:center; gap:12px; margin:22px 0 16px; color:var(--ink-400); font-size:12.5px;}
        .divider::before, .divider::after{content:""; flex:1; height:1px; background:#EEEAE0;}

        .switch-line{text-align:center; font-size:13.5px; color:var(--ink-600);}
        .switch-line button{background:none; border:none; color:var(--blue-500); font-weight:700; cursor:pointer; font-size:13.5px; padding:0;}
        .switch-line button:hover{text-decoration:underline;}

        .toast{
          position:fixed; bottom:28px; left:50%; transform:translateX(-50%);
          background:var(--navy-950); color:var(--white); padding:13px 22px; border-radius:12px;
          font-size:13.5px; font-weight:600; box-shadow:0 14px 30px rgba(0,0,0,.3);
          display:flex; align-items:center; gap:10px; z-index:20;
          animation:toast-in .25s ease;
        }
        @keyframes toast-in{ from{opacity:0; transform:translate(-50%,10px);} to{opacity:1; transform:translate(-50%,0);} }

        @media (max-width:480px){
          .auth-card{padding:28px 20px 24px;}
          .field-row{flex-direction:column; gap:0;}
        }
      `}</style>

      <div className="glow glow-gold" />
      <div className="glow glow-teal" />

      <div className="topbar">
        <div className="brand">
          <div className="brand-mark">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L21 7.5 V16.5 L12 22 L3 16.5 V7.5 Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="brand-name">
            <b>شهرداری شهرآفتاب</b>
            <span>درگاه خدمات هوشمند شهروندی</span>
          </div>
        </div>
        <a className="back-link" href="#">
          بازگشت به خانه
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div className="stage">
        <div className="auth-card">
          <span className="eyebrow">درگاه شهروندی</span>
          <h1>{tab === "login" ? "ورود به حساب کاربری" : "ثبت‌نام شهروندان"}</h1>

          <div className="auth-tabs">
            <button className={tab === "login" ? "active" : ""} onClick={() => setTab("login")}>ورود</button>
            <button className={tab === "register" ? "active" : ""} onClick={() => setTab("register")}>ثبت‌نام</button>
          </div>

          <form onSubmit={handleSubmit}>
            {tab === "register" && (
              <div className="field-row">
                <div className="field">
                  <label>نام</label>
                  <input type="text" placeholder="مثلاً علی" required />
                </div>
                <div className="field">
                  <label>نام خانوادگی</label>
                  <input type="text" placeholder="مثلاً محمدی" required />
                </div>
              </div>
            )}

            <div className="field">
              <label>کد ملی یا شماره موبایل</label>
              <input type="text" inputMode="numeric" placeholder="۰۹xxxxxxxxx" required />
            </div>

            <div className="field has-toggle">
              <label>رمز عبور</label>
              <div className="input-wrap">
                <input type={showPass ? "text" : "password"} placeholder="حداقل ۸ کاراکتر" required />
                <button
                  type="button"
                  className="toggle-pass"
                  onClick={() => setShowPass((s) => !s)}
                  aria-label="نمایش رمز عبور"
                >
                  {showPass ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 3l18 18M10.6 10.6a2.5 2.5 0 003.5 3.5M9.9 5.1A9.8 9.8 0 0112 5c5 0 9 4 10.3 7-.5 1.1-1.2 2.2-2.1 3.2M6.2 6.6C4 8.1 2.4 10.3 1.7 12c1.3 3 5.3 7 10.3 7 1.4 0 2.7-.3 3.9-.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M1.7 12C3 9 7 5 12 5s9 4 10.3 7c-1.3 3-5.3 7-10.3 7S3 15 1.7 12z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6"/></svg>
                  )}
                </button>
              </div>
            </div>

            {tab === "register" && (
              <div className="field">
                <label>تکرار رمز عبور</label>
                <input type={showPass ? "text" : "password"} placeholder="رمز عبور را دوباره وارد کنید" required />
              </div>
            )}

            <div className="aux-row">
              {tab === "login" ? (
                <>
                  <label><input type="checkbox" /> مرا به خاطر بسپار</label>
                  <a href="#">فراموشی رمز عبور؟</a>
                </>
              ) : (
                <label><input type="checkbox" required /> با قوانین و مقررات سامانه موافقم</label>
              )}
            </div>

            <button type="submit" className="submit-btn">
              {tab === "login" ? "ورود به حساب" : "ایجاد حساب کاربری"}
            </button>
          </form>

          <div className="divider">یا</div>
          <p className="switch-line">
            {tab === "login" ? (
              <>حساب کاربری ندارید؟ <button onClick={() => setTab("register")}>ثبت‌نام کنید</button></>
            ) : (
              <>قبلاً ثبت‌نام کرده‌اید؟ <button onClick={() => setTab("login")}>وارد شوید</button></>
            )}
          </p>
        </div>
      </div>

      {submitted && (
        <div className="toast">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#3FBDB6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          {tab === "login" ? "در حال ورود..." : "حساب شما با موفقیت ایجاد شد"}
        </div>
      )}
    </div>
  );
}
