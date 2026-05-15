export const trackLeadConversion = () => {
  if (typeof window !== 'undefined' && window.gtag_report_conversion) {
    window.gtag_report_conversion()
  }
}
