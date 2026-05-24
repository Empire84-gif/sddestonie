import { useEffect, useRef } from "react";

const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;

function TurnstileWidget({
  onVerify,
  onTokenChange,
  onChange,
  onExpire,
  onError,
}) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const callbacksRef = useRef({
    onVerify,
    onTokenChange,
    onChange,
    onExpire,
    onError,
  });

  useEffect(() => {
    callbacksRef.current = {
      onVerify,
      onTokenChange,
      onChange,
      onExpire,
      onError,
    };
  }, [onVerify, onTokenChange, onChange, onExpire, onError]);

  useEffect(() => {
    if (!SITE_KEY) return;

    let isCancelled = false;
    let intervalId = null;

    function renderWidget() {
      if (isCancelled) return;
      if (!containerRef.current) return;
      if (!window.turnstile) return;
      if (widgetIdRef.current !== null) return;

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
        theme: "light",
        size: "normal",

        callback(token) {
          callbacksRef.current.onVerify?.(token);
          callbacksRef.current.onTokenChange?.(token);
          callbacksRef.current.onChange?.(token);
        },

        "expired-callback"() {
          callbacksRef.current.onExpire?.();
          callbacksRef.current.onTokenChange?.("");
          callbacksRef.current.onChange?.("");
        },

        "error-callback"() {
          callbacksRef.current.onError?.();
          callbacksRef.current.onTokenChange?.("");
          callbacksRef.current.onChange?.("");
        },
      });
    }

    renderWidget();

    intervalId = window.setInterval(() => {
      renderWidget();

      if (widgetIdRef.current !== null && intervalId) {
        window.clearInterval(intervalId);
      }
    }, 250);

    return () => {
      isCancelled = true;

      if (intervalId) {
        window.clearInterval(intervalId);
      }

      if (window.turnstile && widgetIdRef.current !== null) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore cleanup errors from Cloudflare iframe.
        }
      }

      widgetIdRef.current = null;
    };
  }, []);

  if (!SITE_KEY) {
    return null;
  }

  return (
    <div className="sde-turnstile-slot">
      <div ref={containerRef} className="sde-turnstile-slot__widget" />
    </div>
  );
}

export default TurnstileWidget;