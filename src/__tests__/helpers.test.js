// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { downloadPortfolioAsPdf, copyToClipboard, formatISODate } from '../utils/helpers';

describe('Helpers & PDF Utility', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('triggers window.print and sets clean document title for PDF export', () => {
    const originalTitle = 'Portfolio | Muhammad Irfan Setiawan';
    document.title = originalTitle;

    const printSpy = vi.spyOn(window, 'print').mockImplementation(() => {});

    downloadPortfolioAsPdf('Muhammad-Irfan-Setiawan-Portofolio');

    // Fast-forward initial timer for title switch and print
    vi.advanceTimersByTime(120);

    expect(printSpy).toHaveBeenCalledTimes(1);
    expect(document.title).toBe('Muhammad-Irfan-Setiawan-Portofolio');

    // Fast-forward restoration timer
    vi.advanceTimersByTime(1600);
    expect(document.title).toBe(originalTitle);
  });

  it('strips .pdf extension if provided in filename', () => {
    document.title = 'Original';
    vi.spyOn(window, 'print').mockImplementation(() => {});

    downloadPortfolioAsPdf('Custom-Document.pdf');
    vi.advanceTimersByTime(120);

    expect(document.title).toBe('Custom-Document');
  });

  it('formats ISO dates correctly', () => {
    const formatted = formatISODate('2024-05-15T00:00:00Z', 'id');
    expect(formatted).toContain('2024');
  });

  it('handles copyToClipboard fallback gracefully', async () => {
    const result = await copyToClipboard('test string');
    expect(typeof result).toBe('boolean');
  });
});
