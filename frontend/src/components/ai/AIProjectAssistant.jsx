import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Loader2, Send, X } from "lucide-react";

import assistantImage from "../../assets/images/ai-assistant.png";
import "../../styles/ai-assistant.css";

const API_BASE_URL =
  import.meta.env.VITE_AI_API_URL || "http://127.0.0.1:5000";

const assistantCopy = {
  en: {
    launcherTitle: "Carlos AI",
    launcherSubtitle: "Project Assistant",
    panelSubtitle: "Project Assistant by SDE",
    openLabel: "Open Carlos AI",
    closeLabel: "Close Carlos AI",
    sendLabel: "Send message to Carlos AI",
    loading: "Analyzing your process...",
    placeholder: "Describe the process you want to improve...",
    projectButton: "Describe project",
    contactButton: "Quick contact",
    unavailable: "Carlos AI is temporarily unavailable.",
    fallback:
      "I could not prepare a response. Please describe your process again with a bit more detail.",
    backendError:
      "Carlos AI is not connected to the backend right now. Please check the API configuration or try again later.",
    initialMessage:
      "I’m Carlos AI — SDE’s project assistant. Briefly describe the process that currently takes too much time, and I’ll help you understand whether the right direction is CRM, SaaS, automation, dashboard, document generator, API integration or an AI-supported solution.",
    quickPrompts: [
      "I want to organize clients and the sales process.",
      "We have too much manual data entry.",
      "I want to generate PDF documents automatically.",
      "I need AI in the company’s daily workflow.",
    ],
  },

  ee: {
    launcherTitle: "Carlos AI",
    launcherSubtitle: "Projektiassistent",
    panelSubtitle: "SDE projektiassistent",
    openLabel: "Ava Carlos AI",
    closeLabel: "Sulge Carlos AI",
    sendLabel: "Saada sõnum Carlos AI-le",
    loading: "Analüüsin protsessi...",
    placeholder: "Kirjelda protsessi, mida soovid parandada...",
    projectButton: "Kirjelda projekti",
    contactButton: "Kiire kontakt",
    unavailable: "Carlos AI ei ole hetkel saadaval.",
    fallback:
      "Mul ei õnnestunud vastust koostada. Palun kirjelda protsessi uuesti ja võimalikult konkreetselt.",
    backendError:
      "Carlos AI-l puudub hetkel ühendus backendiga. Kontrolli API seadistust või proovi hiljem uuesti.",
    initialMessage:
      "Olen Carlos AI — SDE projektiassistent. Kirjelda lühidalt protsessi, mis võtab praegu liiga palju aega, ja aitan hinnata, kas õige suund on CRM, SaaS, automatiseerimine, dashboard, dokumendigeneraator, API-integratsioon või AI-toega lahendus.",
    quickPrompts: [
      "Soovin korrastada kliendid ja müügiprotsessi.",
      "Meil on liiga palju käsitsi andmete sisestamist.",
      "Soovin PDF-dokumente automaatselt genereerida.",
      "Vajan AI-d ettevõtte igapäevases töövoos.",
    ],
  },

  pl: {
    launcherTitle: "Carlos AI",
    launcherSubtitle: "Project Assistant",
    panelSubtitle: "Project Assistant by SDE",
    openLabel: "Otwórz Carlos AI",
    closeLabel: "Zamknij Carlos AI",
    sendLabel: "Wyślij wiadomość do Carlos AI",
    loading: "Analizuję proces...",
    placeholder: "Opisz proces, który chcesz usprawnić...",
    projectButton: "Opisz projekt",
    contactButton: "Szybki kontakt",
    unavailable: "Carlos AI jest chwilowo niedostępny.",
    fallback:
      "Nie udało mi się przygotować odpowiedzi. Opisz proces jeszcze raz, możliwie konkretnie.",
    backendError:
      "Nie mam teraz połączenia z backendem AI. Sprawdź konfigurację API albo spróbuj ponownie za chwilę.",
    initialMessage:
      "Jestem Carlos AI — asystent projektowy SDE. Opisz krótko proces, który dziś zajmuje zbyt dużo czasu, a pomogę określić, czy lepszym kierunkiem będzie CRM, SaaS, automatyzacja, dashboard, generator dokumentów, integracja API albo rozwiązanie AI.",
    quickPrompts: [
      "Chcę uporządkować klientów i proces sprzedaży.",
      "Mam za dużo ręcznego przepisywania danych.",
      "Chcę automatycznie generować dokumenty PDF.",
      "Potrzebuję AI w codziennym workflow firmy.",
    ],
  },
};

const languagePaths = {
  en: {
    home: "/",
    projectForm: "/describe-project",
  },
  ee: {
    home: "/ee",
    projectForm: "/ee/kirjelda-projekti",
  },
  pl: {
    home: "/pl",
    projectForm: "/pl/opisz-projekt",
  },
};

function getCurrentLanguage(pathname) {
  if (pathname === "/pl" || pathname.startsWith("/pl/")) return "pl";
  if (pathname === "/ee" || pathname.startsWith("/ee/")) return "ee";
  return "en";
}

function normalizeApiUrl(url) {
  return url.replace(/\/$/, "");
}

function createInitialMessage(copy) {
  return {
    role: "assistant",
    content: copy.initialMessage,
  };
}

function AIProjectAssistant() {
  const navigate = useNavigate();
  const location = useLocation();

  const language = useMemo(
    () => getCurrentLanguage(location.pathname),
    [location.pathname]
  );

  const copy = assistantCopy[language];
  const paths = languagePaths[language];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => [
    createInitialMessage(copy),
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [connectionError, setConnectionError] = useState("");

  const panelRef = useRef(null);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    setMessages([createInitialMessage(copy)]);
    setInputValue("");
    setConnectionError("");
    setIsLoading(false);
  }, [copy]);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("sde-ai-open");

    function shouldPreventPageScroll(target, deltaY) {
      const panel = panelRef.current;

      if (!panel || !(target instanceof Node) || !panel.contains(target)) {
        return true;
      }

      if (!(target instanceof Element)) {
        return true;
      }

      const scrollContainer = target.closest(".sde-ai-chat__messages");

      if (!scrollContainer) {
        return true;
      }

      const canScroll =
        scrollContainer.scrollHeight > scrollContainer.clientHeight;

      if (!canScroll) {
        return true;
      }

      const isScrollingUp = deltaY < 0;
      const isScrollingDown = deltaY > 0;

      const isAtTop = scrollContainer.scrollTop <= 0;
      const isAtBottom =
        scrollContainer.scrollTop + scrollContainer.clientHeight >=
        scrollContainer.scrollHeight - 1;

      if (isScrollingUp && isAtTop) {
        return true;
      }

      if (isScrollingDown && isAtBottom) {
        return true;
      }

      return false;
    }

    function handleWheel(event) {
      if (shouldPreventPageScroll(event.target, event.deltaY)) {
        event.preventDefault();
      }
    }

    let touchStartY = 0;

    function handleTouchStart(event) {
      touchStartY = event.touches?.[0]?.clientY || 0;
    }

    function handleTouchMove(event) {
      const currentY = event.touches?.[0]?.clientY || touchStartY;
      const deltaY = touchStartY - currentY;

      if (shouldPreventPageScroll(event.target, deltaY)) {
        event.preventDefault();
      }
    }

    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      document.body.classList.remove("sde-ai-open");

      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isLoading, isOpen]);

  function openProjectForm() {
    setIsOpen(false);
    navigate(paths.projectForm);
  }

  function openContact() {
    setIsOpen(false);

    navigate(paths.home, {
      state: {
        scrollTo: "kontakt",
      },
    });
  }

  async function sendMessage(customText) {
    const text = (customText || inputValue).trim();

    if (!text || isLoading) return;

    const userMessage = {
      role: "user",
      content: text,
    };

    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInputValue("");
    setConnectionError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `${normalizeApiUrl(API_BASE_URL)}/api/ai-assistant/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            language,
            messages: nextMessages.map((message) => ({
              role: message.role,
              content: message.content,
            })),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || copy.unavailable);
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content: data.reply || copy.fallback,
        },
      ]);
    } catch (error) {
      const fallbackMessage = error?.message || copy.backendError;

      setConnectionError(fallbackMessage);

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content: copy.backendError,
        },
      ]);
    } finally {
      setIsLoading(false);

      requestAnimationFrame(() => {
        textareaRef.current?.focus();
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  function handleTextareaKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      <button
        type="button"
        className={`sde-ai-launcher ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen((current) => !current)}
        aria-label={copy.openLabel}
      >
        <span className="sde-ai-launcher__avatar" aria-hidden="true">
          <img src={assistantImage} alt="" />
        </span>

        <span className="sde-ai-launcher__copy">
          <strong>{copy.launcherTitle}</strong>
          <span>{copy.launcherSubtitle}</span>
        </span>
      </button>

      {isOpen && (
        <aside
          ref={panelRef}
          className="sde-ai-panel"
          role="dialog"
          aria-label="Carlos AI Project Assistant"
        >
          <header className="sde-ai-panel__header">
            <div className="sde-ai-panel__identity">
              <span className="sde-ai-panel__avatar" aria-hidden="true">
                <img src={assistantImage} alt="" />
              </span>

              <div>
                <p>{copy.launcherTitle}</p>
                <span>{copy.panelSubtitle}</span>
              </div>
            </div>

            <button
              type="button"
              className="sde-ai-panel__close"
              onClick={() => setIsOpen(false)}
              aria-label={copy.closeLabel}
            >
              <X size={17} strokeWidth={1.5} />
            </button>
          </header>

          <div className="sde-ai-chat">
            <div className="sde-ai-chat__messages" aria-live="polite">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`sde-ai-bubble sde-ai-bubble--${message.role}`}
                >
                  {message.role === "assistant" && (
                    <span className="sde-ai-bubble__name">Carlos AI</span>
                  )}

                  <p>{message.content}</p>
                </div>
              ))}

              {isLoading && (
                <div className="sde-ai-bubble sde-ai-bubble--assistant">
                  <span className="sde-ai-bubble__name">Carlos AI</span>

                  <div className="sde-ai-loading">
                    <Loader2 size={15} strokeWidth={1.7} />
                    <span>{copy.loading}</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="sde-ai-quick-prompts">
                {copy.quickPrompts.map((prompt) => (
                  <button
                    type="button"
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {connectionError && (
              <div className="sde-ai-error">
                <p>{connectionError}</p>
              </div>
            )}

            <div className="sde-ai-chat__links">
              <button type="button" onClick={openProjectForm}>
                {copy.projectButton}
                <ArrowUpRight size={14} strokeWidth={1.6} />
              </button>

              <button type="button" onClick={openContact}>
                {copy.contactButton}
                <ArrowUpRight size={14} strokeWidth={1.6} />
              </button>
            </div>

            <form className="sde-ai-composer" onSubmit={handleSubmit}>
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={handleTextareaKeyDown}
                placeholder={copy.placeholder}
                rows={2}
                disabled={isLoading}
              />

              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                aria-label={copy.sendLabel}
              >
                <Send size={16} strokeWidth={1.7} />
              </button>
            </form>
          </div>
        </aside>
      )}
    </>
  );
}

export default AIProjectAssistant;