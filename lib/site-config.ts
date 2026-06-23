/**
 * Centralized site / brand configuration.
 *
 * ⚙️  SINGLE SOURCE OF TRUTH for all contact details, address, phone numbers,
 * social links and business hours used across the entire website.
 *
 * 👉 To update any contact info in the future, change it HERE ONLY and it will
 *    automatically reflect everywhere (header, footer, homepage, contact page,
 *    about page, product pages, floating buttons, etc.).
 */

export const siteConfig = {
  brandName: 'Bajrang Plywood',
  tagline: 'Premium plywood and interior materials dealer in Lucknow',

  /** Number shown on "Call Now" buttons */
  callNumber: '+91 9793638899',

  /** Number used for WhatsApp chat / WhatsApp buttons */
  whatsappNumber: '+91 9118881560',

  /** Showroom address */
  address: {
    line1: '586, Bara Birwa',
    line2: 'Near Hotel Piccadily',
    line3: 'Kanpur Road',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    pincode: '226012',
    /** Full single-line address */
    full: '586, Bara Birwa, Near Hotel Piccadily, Kanpur Road, Lucknow, Uttar Pradesh, 226012',
    /** Short address for compact spaces */
    short: 'Lucknow, Uttar Pradesh',
  },

  /** Google Maps location link (used by "Get Directions") */
  mapUrl: 'https://maps.app.goo.gl/xvkYa2dCiYBKw4vv8?g_st=aw',

  /** Business hours */
  hours: {
    weekdays: 'Mon-Sun: 10:00 AM - 8:00 PM',
    // sunday: 'Sun: 11 AM - 5 PM',
    holidays: 'Holidays: Closed',
  },

  /** Social network profile links */
  social: {
    instagram: 'https://www.instagram.com/bajrangplywood',
    instagramHandle: '@bajrangplywood',
    facebook: 'https://www.facebook.com/bajrangplywood',
  },

  /** Default prefilled message for WhatsApp chats */
  whatsappMessage: 'Hello Bajrang Plywood, I would like to know more about your products.',
} as const

/* ------------------------------------------------------------------ */
/* Derived helpers — build ready-to-use href values from the config.  */
/* ------------------------------------------------------------------ */

/** Strips everything except digits and leading + (e.g. "+91 979..." -> "+91979...") */
const toTel = (num: string) => num.replace(/[^\d+]/g, '')

/** Strips to pure digits for wa.me links (e.g. "+91 911..." -> "91911...") */
const toWhatsApp = (num: string) => num.replace(/\D/g, '')

/** href for "Call Now" buttons */
export const telHref = `tel:${toTel(siteConfig.callNumber)}`

/** href for WhatsApp chat buttons (with prefilled message) */
export const whatsappHref = `https://wa.me/${toWhatsApp(
  siteConfig.whatsappNumber,
)}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

/** href for "Get Directions" buttons */
export const mapHref = siteConfig.mapUrl
