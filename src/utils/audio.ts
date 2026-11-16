/**
 * Audio synthesis helper using Web Speech API for Russian pronunciation
 */

let cachedRussianVoice: SpeechSynthesisVoice | null = null;

function getRussianVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  if (cachedRussianVoice) return cachedRussianVoice;

  const voices = window.speechSynthesis.getVoices();
  // Try to find Russian voice
  const ruVoice = voices.find(
    (v) => v.lang.startsWith('ru') || v.lang.includes('RU') || v.name.toLowerCase().includes('russian')
  );
  if (ruVoice) {
    cachedRussianVoice = ruVoice;
  }
  return ruVoice || null;
}

// Pre-populate voices if supported
if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedRussianVoice = getRussianVoice();
  };
}

export function isSpeechAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function stopSpeaking(): void {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

export function playRussianAudio(
  text: string,
  rate: number = 0.9,
  onEnd?: () => void
): boolean {
  if (!isSpeechAvailable()) return false;

  try {
    window.speechSynthesis.cancel(); // Stop any pending speech

    // Remove stress marks if any (combining acute accent \u0301) for cleaner TTS
    const cleanText = text.replace(/[\u0301\u0300]/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ru-RU';
    utterance.rate = Math.max(0.5, Math.min(rate, 1.5));
    utterance.pitch = 1.0;

    const voice = getRussianVoice();
    if (voice) {
      utterance.voice = voice;
    }

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.warn('Speech synthesis error:', err);
    if (onEnd) onEnd();
    return false;
  }
}
