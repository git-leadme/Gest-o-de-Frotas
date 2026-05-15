export const trackLeadConversion = (url?: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion(url)
  }
}
