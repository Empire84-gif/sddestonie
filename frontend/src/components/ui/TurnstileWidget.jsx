import { useEffect, useRef } from "react";

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";
const TURNSTILE_SCRIPT_ID = "cf-turnstile-script";

function loadTurnstileScript() {
  if (typeof window === "undefined") {
    return Promise.resolve(false);
  }

  if (window.turnstile) {
    return Promise.resolve(true);
  }

  const existingScript = document.getElementById(TURNSTILE_SCRIPT_ID);

  if (existingScript) {
    return new Promise((resolve) => {
      existingScript.addEventListener("load", () => resolve(true), { once: true });
      existingScript.addEventListener("error", () => resolve(false), { once: true });
    });
  }

  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.id = TURNSTILE_SCRIPT_ID;
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function TurnstileWidget({ onVerify, onExpire, onError }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    if (!TURNSTILE_SITE_KEY) {
      onVerify?.("");
      return undefined;
    }

    async function renderWidget() {
      const isLoaded = await loadTurnstileScript();

      if (!isMounted || !isLoaded || !window.turnstile || !containerRef.current) {
        onError?.();
        return;
      }

      if (widgetIdRef.current) {
        return;
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: "light",
        callback: (token) => {
          onVerify?.(token);
        },
        "expired-callback": () => {
          onExpire?.();
        },
        "error-callback": () => {
          onError?.();
        },
      });
    }

    renderWidget();

    return () => {
      isMounted = false;

      if (window.turnstile && widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore cleanup errors from the third-party widget.
        }
      }

      widgetIdRef.current = null;
    };
  }, [onVerify, onExpire, onError]);

  if (!TURNSTILE_SITE_KEY) {
    return null;
  }

  return <div ref={containerRef} className="turnstile-widget" />;
}

export default TurnstileWidget;
