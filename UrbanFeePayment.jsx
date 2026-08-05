import { useState } from "react";

const MOCK_RECORD = {
  code: "۱۲۴۴۸۸۷۷",
  owner: "زهرا احمدی",
  address: "شهرآفتاب، فاز ۲، خیابان یاس، پلاک ۱۴",
  area: "۱۸۵ متر مربع",
  usage: "مسکونی",
  amount: "۴۲,۶۵۰,۰۰۰",
  due: "۱۴۰۵/۰۶/۳۱",
};

export default function UrbanFeePayment() {
  const [step, setStep] = useState("idle"); // idle | loading | result | paid
  const [code, setCode] = useState("");

  const handleInquiry = (e) => {
    e.preventDefault();
    if (!code.trim()) return;
    setStep("loading");
    setTimeout(() => setStep("result"), 1100);
  };

  const handlePay = () => {
    setStep("paying");
    setTimeout(() => setStep("paid"), 1400);
  };

  return (
    <div dir="rtl" lang="fa" className="fee-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&display=swap');

        .fee-root{
          --navy-950:#0E2A52; --navy-700:#1A4A8C;
          --blue-600:#1E63A8; --blue-500:#2C79C4;
          --teal-500:#2CA6A0; --teal-400:#3FBDB6;
          --gold-500:#C99A2E; --gold-400:#E4B95A;
          --sand-50:#FBF9F4; --sand-100:#F3EFE3;
          --ink-900:#1C2530; --ink-600:#4C5A69; --ink-400:#7C8A97;
          --mist-300:#B9C6D3;
          --white:#FFFFFF; --success:#2CA67A; --success-bg:#E9F7F1;
          margin:0; min-height:100vh; font-family:'Vazirmatn', sans-serif; color:var(--ink-900);
          background:var(--sand-50); -webkit-font-smoothing:antialiased;
        }
        .fee-root *{box-sizing:border-box;}
        .fee-root a{color:inherit; text-decoration:none;}
        .fee-root button{font-family:inherit;}

        @media (prefers-reduced-motion: reduce){
          .fee-root *{animation-duration:.001ms !important; transition-duration:.001ms !important;}
        }

        .fee-root .topbar{
          background:var(--navy-950); padding:18px 28px; display:flex; align-items:center; justify-content:space-between;
        }
        .fee-root .brand{display:flex; align-items:center; gap:10px; color:var(--white);}
        .fee-root .brand-mark{width:36px; height:36px; border-radius:10px; background:linear-gradient(155deg, var(--gold-400), var(--teal-500)); display:flex; align-items:center; justify-content:center; flex-shrink:0;}
        .fee-root .brand-name{display:flex; flex-direction:column; line-height:1.25;}
        .fee-root .brand-name b{font-size:14.5px; font-weight:700;}
        .fee-root .brand-name span{font-size:11px; color:var(--mist-300);}
        .fee-root .back-link{font-size:13.5px; color:var(--mist-300); display:flex; align-items:center; gap:6px;}
        .fee-root .back-link:hover{color:var(--white);}

        .fee-root .page-wrap{max-width:720px; margin:0 auto; padding:40px 20px 70px;}

        .fee-root .breadcrumb{font-size:13px; color:var(--ink-400); margin-bottom:14px; display:flex; align-items:center; gap:6px;}
        .fee-root .breadcrumb b{color:var(--ink-600); font-weight:600;}

        .page-head{margin-bottom:28px;}
        .page-head .eyebrow{display:inline-flex; align-items:center; gap:8px; font-size:12.5px; font-weight:600; color:var(--teal-500); letter-spacing:.4px; margin-bottom:10px;}
        .page-head .eyebrow::before{content:""; width:14px; height:2px; background:var(--teal-500); border-radius:2px;}
        .page-head h1{font-size:24px; margin:0 0 8px; color:var(--navy-950); font-weight:800;}
        .page-head p{margin:0; font-size:14px; color:var(--ink-600); line-height:1.8; max-width:520px;}

        .panel{
          background:var(--white); border-radius:22px; padding:26px 26px 24px;
          box-shadow:0 12px 30px rgba(14,42,82,.08); border:1px solid var(--sand-100);
        }

        .inquiry-form{display:flex; gap:10px;}
        .inquiry-form .field{flex:1;}
        .inquiry-form label{display:block; font-size:13px; font-weight:600; color:var(--ink-600); margin-bottom:8px;}
        .inquiry-form input{
          width:100%; padding:13px 14px; border-radius:12px; border:1.5px solid #E7E2D4; background:var(--sand-50);
          font-family:inherit; font-size:14.5px; color:var(--ink-900); outline:none; transition:.18s ease;
        }
        .inquiry-form input:focus{border-color:var(--teal-400); background:var(--white); box-shadow:0 0 0 4px rgba(63,189,182,.12);}
        .inquiry-form button{
          align-self:flex-end; padding:13px 26px; border-radius:12px; border:none; cursor:pointer;
          background:var(--navy-950); color:var(--white); font-size:14px; font-weight:700; transition:.2s ease;
          white-space:nowrap;
        }
        .inquiry-form button:hover{background:var(--blue-600);}
        .inquiry-form button:disabled{opacity:.6; cursor:default;}

        .hint{font-size:12.5px; color:var(--ink-400); margin-top:12px;}

        .loading-row{display:flex; align-items:center; gap:12px; padding:16px 2px; color:var(--ink-600); font-size:14px;}
        .spinner{
          width:20px; height:20px; border-radius:50%; border:2.5px solid var(--sand-100); border-top-color:var(--teal-400);
          animation:spin .7s linear infinite; flex-shrink:0;
        }
        @keyframes spin{ to{transform:rotate(360deg);} }

        .result-head{display:flex; align-items:center; justify-content:space-between; margin-bottom:18px;}
        .result-head h2{font-size:16px; margin:0; color:var(--navy-950); font-weight:700;}
        .badge{
          font-size:12px; font-weight:700; padding:5px 12px; border-radius:999px;
          background:#FDF1DD; color:var(--gold-500);
        }

        .info-grid{display:grid; grid-template-columns:1fr 1fr; gap:14px 20px; margin-bottom:20px;}
        .info-item{background:var(--sand-50); border-radius:14px; padding:14px 16px;}
        .info-item span{display:block; font-size:12px; color:var(--ink-400); margin-bottom:4px;}
        .info-item b{font-size:14.5px; color:var(--ink-900); font-weight:700;}
        .info-item.full{grid-column:1 / -1;}

        .amount-row{
          display:flex; align-items:center; justify-content:space-between; padding:18px 20px;
          background:linear-gradient(135deg, var(--navy-950), var(--navy-700)); border-radius:16px; color:var(--white);
          margin-bottom:20px;
        }
        .amount-row .label{font-size:13px; color:var(--mist-300); margin-bottom:4px;}
        .amount-row .value{font-size:22px; font-weight:800;}
        .amount-row .value span{font-size:13px; font-weight:500; margin-inline-start:4px; color:var(--mist-300);}

        .pay-btn{
          width:100%; padding:15px 0; border-radius:14px; border:none; cursor:pointer;
          background:linear-gradient(135deg, var(--gold-400), var(--gold-500)); color:var(--navy-950);
          font-size:15px; font-weight:700; box-shadow:0 12px 28px rgba(201,154,46,.32); transition:.2s ease;
          display:flex; align-items:center; justify-content:center; gap:8px;
        }
        .pay-btn:hover{transform:translateY(-1px); box-shadow:0 16px 34px rgba(201,154,46,.42);}
        .pay-btn:disabled{opacity:.7; cursor:default; transform:none;}

        .success-panel{text-align:center; padding:36px 20px 30px;}
        .success-icon{
          width:64px; height:64px; border-radius:50%; background:var(--success-bg); color:var(--success);
          display:flex; align-items:center; justify-content:center; margin:0 auto 18px;
          animation:pop .35s cubic-bezier(.34,1.56,.64,1);
        }
        @keyframes pop{ from{transform:scale(.6); opacity:0;} to{transform:scale(1); opacity:1;} }
        .success-panel h2{font-size:19px; margin:0 0 8px; color:var(--navy-950);}
        .success-panel p{font-size:13.5px; color:var(--ink-600); margin:0 0 22px; line-height:1.8;}
        .success-actions{display:flex; gap:10px; justify-content:center; flex-wrap:wrap;}
        .success-actions a, .success-actions button{
          padding:11px 20px; border-radius:12px; font-size:13.5px; font-weight:700; cursor:pointer; border:1.5px solid transparent;
        }
        .success-actions .primary{background:var(--navy-950); color:var(--white);}
        .success-actions .primary:hover{background:var(--blue-600);}
        .success-actions .ghost{background:none; border-color:#E7E2D4; color:var(--ink-600);}
        .success-actions .ghost:hover{border-color:var(--ink-400);}

        @media (max-width:560px){
          .inquiry-form{flex-direction:column;}
          .inquiry-form button{align-self:stretch;}
          .info-grid{grid-template-columns:1fr;}
          .amount-row{flex-direction:column; align-items:flex-start; gap:10px;}
        }
      `}</style>

      <div className="topbar">
        <div className="brand">
          <div className="brand-mark">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
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

      <div className="page-wrap">
        <div className="breadcrumb">خدمات <b>/</b> پرداخت‌ها <b>/</b> <b>عوارض شهرسازی</b></div>

        <div className="page-head">
          <span className="eyebrow">پرداخت‌ها</span>
          <h1>پرداخت عوارض شهرسازی</h1>
          <p>با وارد کردن کد نوسازی یا شماره پرونده ملک، مبلغ عوارض شهرسازی را استعلام و به‌صورت آنلاین پرداخت کنید.</p>
        </div>

        <div className="panel">
          {step === "idle" || step === "loading" ? (
            <>
              <form className="inquiry-form" onSubmit={handleInquiry}>
                <div className="field">
                  <label>کد نوسازی یا شماره پرونده</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="مثلاً ۱۲۴۴۸۸۷۷"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    disabled={step === "loading"}
                  />
                </div>
                <button type="submit" disabled={step === "loading"}>
                  {step === "loading" ? "در حال بررسی..." : "استعلام"}
                </button>
              </form>
              {step === "loading" && (
                <div className="loading-row">
                  <span className="spinner" />
                  در حال دریافت اطلاعات پرونده از سامانه شهرسازی...
                </div>
              )}
              {step === "idle" && (
                <div className="hint">کد نوسازی روی قبض عوارض سالانه یا سند مالکیت درج شده است.</div>
              )}
            </>
          ) : step === "result" || step === "paying" ? (
            <>
              <div className="result-head">
                <h2>اطلاعات پرونده</h2>
                <span className="badge">در انتظار پرداخت</span>
              </div>

              <div className="info-grid">
                <div className="info-item full">
                  <span>آدرس ملک</span>
                  <b>{MOCK_RECORD.address}</b>
                </div>
                <div className="info-item">
                  <span>نام مالک</span>
                  <b>{MOCK_RECORD.owner}</b>
                </div>
                <div className="info-item">
                  <span>کد نوسازی</span>
                  <b>{MOCK_RECORD.code}</b>
                </div>
                <div className="info-item">
                  <span>متراژ</span>
                  <b>{MOCK_RECORD.area}</b>
                </div>
                <div className="info-item">
                  <span>کاربری</span>
                  <b>{MOCK_RECORD.usage}</b>
                </div>
              </div>

              <div className="amount-row">
                <div>
                  <div className="label">مبلغ قابل پرداخت · سررسید {MOCK_RECORD.due}</div>
                  <div className="value">{MOCK_RECORD.amount}<span>ریال</span></div>
                </div>
              </div>

              <button className="pay-btn" onClick={handlePay} disabled={step === "paying"}>
                {step === "paying" ? (
                  <>
                    <span className="spinner" style={{ borderTopColor: "#0E2A52", borderColor: "rgba(14,42,82,.2)" }} />
                    در حال اتصال به درگاه پرداخت...
                  </>
                ) : (
                  "پرداخت آنلاین"
                )}
              </button>
            </>
          ) : (
            <div className="success-panel">
              <div className="success-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2>پرداخت با موفقیت انجام شد</h2>
              <p>رسید پرداخت عوارض شهرسازی برای پرونده {MOCK_RECORD.code} صادر شد و در پیشخوان حساب شما قابل مشاهده است.</p>
              <div className="success-actions">
                <button className="primary" onClick={() => { setStep("idle"); setCode(""); }}>پرداخت پرونده دیگر</button>
                <a className="ghost" href="#">مشاهده رسید</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
