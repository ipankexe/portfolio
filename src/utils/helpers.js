/**
 * Helper utility functions
 */

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const navOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

export async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for non-secure contexts
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      return successful;
    }
  } catch (err) {
    console.warn('Copy to clipboard failed', err);
    return false;
  }
}

export function formatISODate(isoString, lang = 'id') {
  if (!isoString) return '';
  try {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat(lang === 'id' ? 'id-ID' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  } catch {
    return isoString;
  }
}

/**
 * Triggers the browser's native print-to-PDF flow with pre-configured
 * document title for clean file naming (e.g. Muhammad-Irfan-Setiawan-Portofolio.pdf).
 */
export function downloadPortfolioAsPdf(filename = 'Muhammad-Irfan-Setiawan-Portofolio') {
  if (typeof window === 'undefined') return;

  const originalTitle = document.title;
  const cleanFilename = filename.replace(/\.pdf$/i, '');
  document.title = cleanFilename;

  // Small delay to ensure title mutation is recognized by print subsystem
  setTimeout(() => {
    window.print();
    // Restore original page title after print dialog closes
    setTimeout(() => {
      document.title = originalTitle;
    }, 1500);
  }, 100);
}
