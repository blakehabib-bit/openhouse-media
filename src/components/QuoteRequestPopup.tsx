"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const INTERESTS = [
  "Brand / Business Video",
  "Property / Real Estate Video",
  "One-off Shoot",
  "Monthly Retainer",
  "Social Media Content",
  "Other",
];

interface QuoteRequestPopupProps {
  buttonClassName?: string;
  buttonContent: ReactNode;
}

export default function QuoteRequestPopup({
  buttonClassName,
  buttonContent,
}: QuoteRequestPopupProps) {
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (showModal) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [showModal]);

  function toggleInterest(item: string) {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, interests, message }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  function closeAndReset() {
    setShowModal(false);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
      setInterests([]);
      setMessage("");
    }, 200);
  }

  const modal = (
    <div className="qr-overlay">
      <div className="qr-card">
        <button
          type="button"
          onClick={closeAndReset}
          className="qr-close"
          aria-label="Close"
        >
          &times;
        </button>

        {submitted ? (
          <div className="qr-success">
            <h2>Thanks, {name.split(" ")[0] || "there"}.</h2>
            <p>Got your details — Blake will come back with a quote and the next available shoot dates shortly.</p>
          </div>
        ) : (
          <>
            <h2 className="qr-title">Contact us</h2>
            <form onSubmit={handleSubmit} className="qr-form">
              <div className="qr-field">
                <label>Full name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="qr-row">
                <div className="qr-field">
                  <label>Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="qr-field">
                  <label>Phone number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="qr-field">
                <label>What are you interested in?</label>
                <div className="qr-checks">
                  {INTERESTS.map((item) => (
                    <label className="qr-check" key={item}>
                      <input
                        type="checkbox"
                        checked={interests.includes(item)}
                        onChange={() => toggleInterest(item)}
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <div className="qr-field">
                <label>Message</label>
                <textarea
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                />
              </div>

              <button type="submit" className="qr-submit" disabled={submitting}>
                {submitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: css }} />
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className={buttonClassName}
      >
        {buttonContent}
      </button>

      {showModal && mounted && createPortal(modal, document.body)}
    </>
  );
}

const css = `
  .qr-overlay{
    position:fixed;inset:0;z-index:100;
    display:flex;align-items:flex-start;justify-content:center;
    background:rgba(10,22,18,.7);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);
    padding:32px 16px;overflow-y:auto;
  }
  .qr-card{
    position:relative;width:100%;max-width:520px;margin:auto 0;
    background:#fff;border-radius:16px;padding:36px 32px;
    box-shadow:0 24px 64px rgba(0,0,0,.4);
    font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI',Inter,system-ui,sans-serif;
  }
  .qr-close{
    position:absolute;top:14px;right:16px;background:none;border:none;
    font-size:26px;line-height:1;color:#9ca3af;cursor:pointer;padding:4px;
  }
  .qr-close:hover{color:#111}
  .qr-title{font-size:22px;font-weight:800;color:#0E1F1A;margin-bottom:22px;letter-spacing:-.3px}

  .qr-form{display:flex;flex-direction:column;gap:20px}
  .qr-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  .qr-field label{display:block;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#111;margin-bottom:8px}
  .qr-field input[type="text"],
  .qr-field input[type="email"],
  .qr-field input[type="tel"]{
    width:100%;border:none;border-bottom:1.5px solid #d1d5db;padding:8px 2px;
    font-size:15px;color:#111;background:transparent;outline:none;
    transition:border-color .15s;
  }
  .qr-field input:focus{border-color:#1D9E75}
  .qr-field textarea{
    width:100%;border:1.5px solid #e5e7eb;border-radius:8px;padding:12px;
    font-size:15px;color:#111;background:transparent;outline:none;resize:vertical;
    font-family:inherit;transition:border-color .15s;
  }
  .qr-field textarea:focus{border-color:#1D9E75}

  .qr-checks{display:grid;grid-template-columns:1fr 1fr;gap:10px 16px}
  .qr-check{display:flex;align-items:center;gap:9px;font-size:14px;color:#333;cursor:pointer;font-weight:400;text-transform:none;letter-spacing:normal}
  .qr-check input{width:16px;height:16px;accent-color:#1D9E75;cursor:pointer;flex-shrink:0}

  .qr-submit{
    margin-top:4px;background:#0E1F1A;color:#fff;border:none;border-radius:8px;
    padding:14px 24px;font-size:15px;font-weight:700;cursor:pointer;
    transition:background .15s;
  }
  .qr-submit:hover{background:#1D9E75}
  .qr-submit:disabled{opacity:.6;cursor:default}

  .qr-success{padding:8px 0 4px}
  .qr-success h2{font-size:22px;font-weight:800;color:#0E1F1A;margin-bottom:10px}
  .qr-success p{font-size:15px;color:#555;line-height:1.6}

  @media(max-width:600px){
    .qr-card{padding:28px 22px}
    .qr-row{grid-template-columns:1fr}
    .qr-checks{grid-template-columns:1fr}
  }
`;
