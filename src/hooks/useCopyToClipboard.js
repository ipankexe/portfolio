import { useState, useCallback } from 'react';

export function useCopyToClipboard(timeout = 2500) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async (text) => {
    if (!navigator?.clipboard) {
      // Fallback
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), timeout);
        return true;
      } catch (err) {
        console.error('Failed to copy text: ', err);
        return false;
      }
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
      return true;
    } catch {
      // Fallback if navigator.clipboard is blocked or permission denied
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), timeout);
          return true;
        }
        return false;
      } catch (fallbackErr) {
        console.error('Failed to copy text: ', fallbackErr);
        return false;
      }
    }
  }, [timeout]);

  const reset = useCallback(() => {
    setCopied(false);
  }, []);

  return { copied, copyToClipboard, reset };
}
