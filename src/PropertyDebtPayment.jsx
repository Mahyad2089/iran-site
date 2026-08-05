import { useState } from "react";
import { Link } from "react-router-dom";

function ServiceLayout({ eyebrow, title, description, crumbs = [], children }) {
  return (
    <div dir="rtl" lang="fa" className="svc-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&display=swap');

        .svc-root{
          --navy-950:#0E2A52; --navy-700:#1A4A8C;
          --blue-600:#1E63A8; --blue-500:#2C79C4;
          --teal-500:#2CA6A0; --teal-400:#3FBDB6;
          --gold-500:#C99A2E; --gold-400:#E4B95A;
          --purple-500:#5B4CB0; --purple-400:#8D7BD8;
          --sand-50:#FBF9F4; --sand-100:#F3EFE3;
          --ink-900:#1C2530; --ink-600:#4C5A69; --ink-400:#7C8A97;
          --mist-300:#B9C6D3;
          --white:#FFFFFF;
          --success:#2CA67A; --success-bg:#E9F7F1;
          --danger:#D2483C; --danger-bg:#FBEAE8;
          --warn:#C99A2E; --warn-bg:#FDF1DD;
          margin:0; min-height:100vh; font-family:'Vazirmatn', sans-serif; color:var(--ink-900);
          background:var(--sand-50); -webkit-font-smoothing:antialiased;
        }
        .svc-root *{box-sizing:border-box;}
        .svc-root a{color:inherit; text-decoration:none;}
        .svc-root button{font-family:inherit;}

        @media (prefers-reduced-motion: reduce){
          .svc-root *{animation-duration:.001ms !important; transition-duration:.001ms !important;}
        }

        .svc-root .topbar{background:var(--navy-950); padding:18px 28px; display:flex; align-items:center; justify-content:space-between;}
        .svc-root .brand{display:flex; align-items:center; gap:10px; color:var(--white);}
        .svc-root .brand-mark{width:36px; height:36px; border-radius:10px; background:linear-gradient(155deg, var(--gold-400), var(--teal-500)); display:flex; align-items:center; justify-content:center; flex-shrink:0;}
        .svc-root .brand-name{display:flex; flex-direction:column; line-height:1.25;}
        .svc-root .brand-name b{font-size:14.5px; font-weight:700;}
        .svc-root .brand-name span{font-size:11px; color:var(--mist-300);}
        .svc-root .back-link{font-size:13.5px; color:var(--mist-300); display:flex; align-items:center; gap:6px;}
        .svc-root .back-link:hover{color:var(--white);}

        .svc-root .page-wrap{max-width:720px; margin:0 auto; padding:40px 20px 70px;}
        .svc-root .breadcrumb{font-size:13px; color:var(--ink-400); margin-bottom:14px; display:flex; align-items:center; gap:6px; flex-wrap:wrap;}
        .svc-root .breadcrumb b{color:var(--ink-600); font-weight:600;}

        .svc-root .page-head{margin-bottom:28px;}
        .svc-root .eyebrow{display:inline-flex; align-items:center; gap:8px; font-size:12.5px; font-weight:600; color:var(--teal-500); letter-spacing:.4px; margin-bottom:10px;}
        .svc-root .eyebrow::before{content:""; width:14px; height:2px; background:var(--teal-500); border-radius:2px;}
        .svc-root .page-head h1{font-size:24px; margin:0 0 8px; color:var(--navy-950); font-weight:800;}
        .svc-root .page-head p{margin:0; font-size:14px; color:var(--ink-600); line-height:1.8; max-width:540px;}

        .svc-root .panel{background:var(--white); border-radius:22px; padding:26px 26px 24px; box-shadow:0 12px 30px rgba(14,42,82,.08); border:1px solid var(--sand-100);}

        .svc-root .form-row{display:flex; gap:10px;}
        .svc-root .form-row .field{flex:1;}
        .svc-root .field{margin-bottom:16px;}
        .svc-root .field:last-child{margin-bottom:0;}
        .svc-root .field label{display:block; font-size:13px; font-weight:600; color:var(--ink-600); margin-bottom:8px;}
        .svc-root input, .svc-root select, .svc-root textarea{
          width:100%; padding:13px 14px; border-radius:12px; border:1.5px solid #E7E2D4; background:var(--sand-50);
          font-family:inherit; font-size:14.5px; color:var(--ink-900); outline:none; transition:.18s ease;
        }
        .svc-root textarea{resize:vertical; min-height:100px; line-height:1.7;}
        .svc-root input:focus, .svc-root select:focus, .svc-root textarea:focus{
          border-color:var(--teal-400); background:var(--white); box-shadow:0 0 0 4px rgba(63,189,182,.12);
        }
        .svc-root select{appearance:none; background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%237C8A97' stroke-width='1.6'><path d='M4 6l4 4 4-4'/></svg>"); background-repeat:no-repeat; background-position:left 14px center;}

        .svc-root .btn-primary-block{
          width:100%; padding:14px 0; border-radius:14px; border:none; cursor:pointer;
          background:linear-gradient(135deg, var(--gold-400), var(--gold-500)); color:var(--navy-950);
          font-size:15px; font-weight:700; box-shadow:0 12px 28px rgba(201,154,46,.32); transition:.2s ease;
          display:flex; align-items:center; justify-content:center; gap:8px;
        }
        .svc-root .btn-primary-block:hover{transform:translateY(-1px); box-shadow:0 16px 34px rgba(201,154,46,.42);}
        .svc-root .btn-primary-block:disabled{opacity:.65; cursor:default; transform:none;}

        .svc-root .btn-dark{
          padding:13px 24px; border-radius:12px; border:none; cursor:pointer;
          background:var(--navy-950); color:var(--white); font-size:14px; font-weight:700; transition:.2s ease; white-space:nowrap;
        }
        .svc-root .btn-dark:hover{background:var(--blue-600);}
        .svc-root .btn-dark:disabled{opacity:.6; cursor:default;}

        .svc-root .hint{font-size:12.5px; color:var(--ink-400); margin-top:12px;}

        .svc-root .loading-row{display:flex; align-items:center; gap:12px; padding:16px 2px; color:var(--ink-600); font-size:14px;}
        .svc-root .spinner{width:20px; height:20px; border-radius:50%; border:2.5px solid var(--sand-100); border-top-color:var(--teal-400); animation:svc-spin .7s linear infinite; flex-shrink:0;}
        .svc-root .spinner.dark{border-color:rgba(14,42,82,.18); border-top-color:var(--navy-950);}
        @keyframes svc-spin{ to{transform:rotate(360deg);} }

        .svc-root .result-head{display:flex; align-items:center; justify-content:space-between; margin-bottom:18px; gap:10px; flex-wrap:wrap;}
        .svc-root .result-head h2{font-size:16px; margin:0; color:var(--navy-950); font-weight:700;}
        .svc-root .badge{font-size:12px; font-weight:700; padding:5px 12px; border-radius:999px; white-space:nowrap;}
        .svc-root .badge.warn{background:var(--warn-bg); color:var(--warn);}
        .svc-root .badge.success{background:var(--success-bg); color:var(--success);}
        .svc-root .badge.danger{background:var(--danger-bg); color:var(--danger);}

        .svc-root .info-grid{display:grid; grid-template-columns:1fr 1fr; gap:14px 20px; margin-bottom:20px;}
        .svc-root .info-item{background:var(--sand-50); border-radius:14px; padding:14px 16px;}
        .svc-root .info-item span{display:block; font-size:12px; color:var(--ink-400); margin-bottom:4px;}
        .svc-root .info-item b{font-size:14.5px; color:var(--ink-900); font-weight:700;}
        .svc-root .info-item.full{grid-column:1 / -1;}

        .svc-root .amount-row{
          display:flex; align-items:center; justify-content:space-between; padding:18px 20px;
          background:linear-gradient(135deg, var(--navy-950), var(--navy-700)); border-radius:16px; color:var(--white);
          margin-bottom:20px; gap:12px; flex-wrap:wrap;
        }
        .svc-root .amount-row .label{font-size:13px; color:var(--mist-300); margin-bottom:4px;}
        .svc-root .amount-row .value{font-size:22px; font-weight:800;}
        .svc-root .amount-row .value span{font-size:13px; font-weight:500; margin-inline-start:4px; color:var(--mist-300);}

        .svc-root .row-list{border:1px solid var(--sand-100); border-radius:14px; overflow:hidden; margin-bottom:18px;}
        .svc-root .row-item{display:flex; align-items:center; justify-content:space-between; padding:13px 16px; font-size:13.5px;}
        .svc-root .row-item + .row-item{border-top:1px solid var(--sand-100);}
        .svc-root .row-item b{font-weight:700; color:var(--ink-900);}
        .svc-root .row-item span{color:var(--ink-400);}

        .svc-root .timeline{list-style:none; margin:0 0 6px; padding:0;}
        .svc-root .timeline li{position:relative; padding-inline-start:26px; padding-bottom:22px;}
        .svc-root .timeline li:last-child{padding-bottom:0;}
        .svc-root .timeline li::before{
          content:""; position:absolute; inset-inline-start:0; top:3px; width:11px; height:11px; border-radius:50%;
          background:var(--teal-400); border:2px solid var(--white); box-shadow:0 0 0 2px var(--teal-400);
        }
        .svc-root .timeline li::after{
          content:""; position:absolute; inset-inline-start:5px; top:16px; bottom:0; width:1.5px; background:var(--sand-100);
        }
        .svc-root .timeline li:last-child::after{display:none;}
        .svc-root .timeline li.done::before{background:var(--success); box-shadow:0 0 0 2px var(--success);}
        .svc-root .timeline li.pending::before{background:var(--white); box-shadow:0 0 0 2px var(--mist-300);}
        .svc-root .timeline .t-title{font-size:14px; font-weight:700; color:var(--ink-900); margin-bottom:3px;}
        .svc-root .timeline .t-meta{font-size:12.5px; color:var(--ink-400);}

        .svc-root .choice-group{display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:16px;}
        .svc-root .choice-card{
          border:1.5px solid #E7E2D4; border-radius:12px; padding:12px 14px; cursor:pointer; font-size:13.5px;
          font-weight:600; color:var(--ink-600); transition:.18s ease; display:flex; align-items:center; gap:9px;
        }
        .svc-root .choice-card.active{border-color:var(--teal-400); background:#F1FBFA; color:var(--navy-950);}
        .svc-root .choice-card input{width:auto; padding:0; accent-color:var(--teal-500);}

        .svc-root .success-panel{text-align:center; padding:36px 20px 30px;}
        .svc-root .success-icon{
          width:64px; height:64px; border-radius:50%; background:var(--success-bg); color:var(--success);
          display:flex; align-items:center; justify-content:center; margin:0 auto 18px; animation:svc-pop .35s cubic-bezier(.34,1.56,.64,1);
        }
        @keyframes svc-pop{ from{transform:scale(.6); opacity:0;} to{transform:scale(1); opacity:1;} }
        .svc-root .success-panel h2{font-size:19px; margin:0 0 8px; color:var(--navy-950);}
        .svc-root .success-panel p{font-size:13.5px; color:var(--ink-600); margin:0 0 22px; line-height:1.8;}
        .svc-root .tracking-code{
          display:inline-flex; align-items:center; gap:10px; background:var(--sand-50); border:1px dashed #D8D0BC;
          border-radius:12px; padding:11px 18px; font-size:15px; font-weight:800; color:var(--navy-950); margin-bottom:22px; letter-spacing:.5px;
        }
        .svc-root .success-actions{display:flex; gap:10px; justify-content:center; flex-wrap:wrap;}
        .svc-root .success-actions a, .svc-root .success-actions button{
          padding:11px 20px; border-radius:12px; font-size:13.5px; font-weight:700; cursor:pointer; border:1.5px solid transparent;
        }
        .svc-root .success-actions .primary{background:var(--navy-950); color:var(--white);}
        .svc-root .success-actions .primary:hover{background:var(--blue-600);}
        .svc-root .success-actions .ghost{background:none; border-color:#E7E2D4; color:var(--ink-600);}
        .svc-root .success-actions .ghost:hover{border-color:var(--ink-400);}

        .svc-root .upload-box{
          border:1.5px dashed #D8D0BC; border-radius:14px; padding:22px; text-align:center; color:var(--ink-400);
          font-size:13px; cursor:pointer; transition:.18s ease;
        }
        .svc-root .upload-box:hover{border-color:var(--teal-400); color:var(--teal-500);}

        @media (max-width:560px){
          .svc-root .form-row{flex-direction:column;}
          .svc-root .info-grid{grid-template-columns:1fr;}
          .svc-root .amount-row{flex-direction:column; align-items:flex-start;}
          .svc-root .choice-group{grid-template-columns:1fr;}
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
            <b>شهرداری نمونه</b>
            <span>درگاه خدمات هوشمند شهروندی</span>
          </div>
        </div>
         <Link className="back-link" to="/">
  بازگشت به خانه
</Link>
      </div>

      <div className="page-wrap">
        <div className="breadcrumb">
          خدمات {crumbs.map((c, i) => (<span key={i}><b>/</b> {i === crumbs.length - 1 ? <b>{c}</b> : c}</span>))}
        </div>

        <div className="page-head">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <div className="panel">{children}</div>
      </div>
    </div>
  );
}

function Spinner({ dark }) {
  return <span className={"spinner" + (dark ? " dark" : "")} />;
}

const DEBTS = [
  { year: "۱۴۰۲", amount: "۹,۴۰۰,۰۰۰" },
  { year: "۱۴۰۳", amount: "۱۰,۸۰۰,۰۰۰" },
  { year: "۱۴۰۴", amount: "۱۲,۱۵۰,۰۰۰" },
];
const TOTAL = "۳۲,۳۵۰,۰۰۰";

export default function PropertyDebtPayment() {
  const [step, setStep] = useState("idle");
  const [code, setCode] = useState("");

  const inquire = (e) => {
    e.preventDefault();
    if (!code.trim()) return;
    setStep("loading");
    setTimeout(() => setStep("result"), 1000);
  };
  const pay = () => {
    setStep("paying");
    setTimeout(() => setStep("paid"), 1300);
  };

  return (
    <ServiceLayout
      eyebrow="پرداخت‌ها"
      title="مشاهده و تسویه بدهی نوسازی ملک"
      description="بدهی‌های معوق عوارض نوسازی ملک را به تفکیک سال مشاهده و به‌صورت یکجا تسویه کنید."
      crumbs={["پرداخت‌ها", "بدهی نوسازی ملک"]}
    >
      {(step === "idle" || step === "loading") && (
        <>
          <form className="form-row" onSubmit={inquire}>
            <div className="field">
              <label>کد نوسازی ملک</label>
              <input type="text" placeholder="مثلاً ۱۲۴۴۸۸۷۷" value={code} onChange={(e) => setCode(e.target.value)} disabled={step === "loading"} />
            </div>
            <button type="submit" className="btn-dark" style={{ alignSelf: "flex-end" }} disabled={step === "loading"}>
              {step === "loading" ? "در حال بررسی..." : "استعلام"}
            </button>
          </form>
          {step === "loading" && <div className="loading-row"><Spinner />در حال بررسی سوابق بدهی ملک...</div>}
          {step === "idle" && <div className="hint">در صورت نداشتن بدهی معوق، پیامی مبنی بر تسویه کامل نمایش داده می‌شود.</div>}
        </>
      )}

      {(step === "result" || step === "paying") && (
        <>
          <div className="result-head">
            <h2>ریز بدهی معوق</h2>
            <span className="badge danger">{DEBTS.length} سال معوق</span>
          </div>
          <div className="row-list">
            {DEBTS.map((d) => (
              <div className="row-item" key={d.year}>
                <b>عوارض نوسازی سال {d.year}</b>
                <span>{d.amount} ریال</span>
              </div>
            ))}
          </div>
          <div className="amount-row">
            <div>
              <div className="label">مجموع بدهی قابل پرداخت</div>
              <div className="value">{TOTAL}<span>ریال</span></div>
            </div>
          </div>
          <button className="btn-primary-block" onClick={pay} disabled={step === "paying"}>
            {step === "paying" ? (<><Spinner dark />در حال اتصال به درگاه پرداخت...</>) : "تسویه کامل بدهی"}
          </button>
        </>
      )}

      {step === "paid" && (
        <div className="success-panel">
          <div className="success-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <h2>بدهی با موفقیت تسویه شد</h2>
          <p>مجموع بدهی معوق پرونده {code} به مبلغ {TOTAL} ریال پرداخت شد.</p>
          <div className="success-actions">
            <button className="primary" onClick={() => { setStep("idle"); setCode(""); }}>استعلام پرونده دیگر</button>
            <a className="ghost" href="#">مشاهده رسید</a>
          </div>
        </div>
      )}
    </ServiceLayout>
  );
}
