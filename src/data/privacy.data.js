export const privacyMeta = {
  lastUpdated: '28 April 2026',
  controller: 'Klimamigrationsrecht, Universität Bern',
  address: 'Schanzeneckstrasse 1, 3012 Bern, Switzerland',
  email: 'romain.marguet@unibe.ch',
}

export const privacySections = [
  {
    id: 'data-infos',
    title: 'General Information on Data Processing',
    content: [
      {
        type: 'paragraph',
        text: `We process personal data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR). Personal data refers to any information relating to an identified or identifiable natural person.`,
      },
    ],
  },

  {
    id: 'data-collect',
    title: 'What data do we collect?',
    content: [
      {
        type: 'subtitle',
        text: 'Data you provide to us',
      },
      {
        type: 'list',
        items: ['Name', 'Email address', 'Any information submitted via forms or communication'],
      },
      {
        type: 'subtitle',
        text: 'Automatically collected data',
      },
      {
        type: 'list',
        items: [
          'IP address',
          'Browser type and version',
          'Operating system',
          'Referrer URL',
          'Date and time of access',
        ],
      },
    ],
  },

  {
    id: 'data-collect-how',
    title: 'How do we collect your data?',
    content: [
      {
        type: 'paragraph',
        text: `You directly provide us with most of the data we collect. We collect data and process data when you:`,
      },
      {
        type: 'list',
        items: [
          'Voluntarily complete a contact form.',
          `Use or view our website via your browser's cookies.`,
          'Accept analytics cookies in our cookie banner.',
        ],
      },
    ],
  },

  {
    id: 'data-use',
    title: 'How will we use your data?',
    content: [
      {
        type: 'paragraph',
        text: `We collect your data so that we can:`,
      },
      {
        type: 'list',
        items: [
          'Process your message and answer your question.',
          'Analyze how visitors use our website, only if you consent to analytics.',
          'Improve the structure, content and performance of our website.',
        ],
      },
    ],
  },

  {
    id: 'data-store',
    title: 'How do we store your data?',
    content: [
      {
        type: 'paragraph',
        text: `We securely store the data you submit through the contact form for the sole purpose of responding to your message.`,
      },
      {
        type: 'paragraph',
        text: `We store personal data only for as long as necessary for the purposes stated above or as required by law.`,
      },
    ],
  },

  {
    id: 'data-security',
    title: 'How do we secure your data?',
    content: [
      {
        type: 'paragraph',
        text: `We implement appropriate technical and organizational measures to protect your data.`,
      },
    ],
  },

  {
    id: 'analytics',
    title: 'Web analytics (Google Analytics)',
    content: [
      {
        type: 'paragraph',
        text: `We use Google Analytics, a web analytics service provided by Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) and, for users in Europe, by Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Ireland), to analyse the use of our website.`,
      },
      {
        type: 'paragraph',
        text: `Google Analytics collects data such as the pages you visit, the time spent on pages, your approximate location (based on IP), the device and browser you use, and interactions with our website. This data is used to create aggregated, anonymous statistics about the use of our website.`,
      },
      {
        type: 'paragraph',
        text: `We only activate Google Analytics after you have given your consent via our cookie banner. The legal basis for this processing is your consent (Art. 6(1)(a) GDPR / corresponding provisions of the Swiss Federal Act on Data Protection).`,
      },
      {
        type: 'paragraph',
        text: `Data may be transferred to the United States. We rely on appropriate safeguards such as standard contractual clauses and, where applicable, the Swiss–US Data Privacy Framework.`,
      },
      {
        type: 'paragraph',
        text: `You can withdraw your consent at any time by deleting cookies in your browser or changing your cookie preferences.`,
      },
      {
        type: 'link',
        prefix: 'For more information, please see ',
        label: `Google's privacy policy`,
        href: 'https://policies.google.com/privacy',
      },
    ],
  },

  {
    id: 'cookies',
    title: 'Cookies',
    content: [
      {
        type: 'paragraph',
        text: `Cookies are text files placed on your computer to collect standard Internet log information and visitor behaviour information. When you visit our website, we may collect information from you automatically through cookies or similar technology.`,
      },
      {
        type: 'link',
        prefix: 'For more information about cookies, visit ',
        label: 'allaboutcookies.org',
        href: 'https://www.allaboutcookies.org',
      },
    ],
  },

  {
    id: 'cookie-types',
    title: 'What types of cookies do we use?',
    content: [
      {
        type: 'rich-list',
        items: [
          {
            title: 'Necessary cookies',
            text: 'Required for the website to function. These cannot be disabled in our systems.',
          },
          {
            title: 'Analytics / performance cookies',
            text: 'Set by Google Analytics to help us understand how visitors interact with the website. These are only used if you accept them in the cookie banner on our site.',
          },
        ],
      },
      {
        type: 'paragraph',
        text: `Analytics cookies help us to improve our website by collecting and reporting information on its usage.`,
      },
    ],
  },

  {
    id: 'manage-cookies',
    title: 'How to manage your cookies',
    content: [
      {
        type: 'paragraph',
        text: `You can set your browser not to accept cookies and remove existing cookies from your browser. However, some of our website features may not function properly as a result.`,
      },
      {
        type: 'paragraph',
        text: `If you have previously accepted analytics cookies in our banner, you can withdraw your consent by deleting cookies in your browser. The banner will appear again on your next visit.`,
      },
    ],
  },

  {
    id: 'international-transfers',
    title: 'International data transfers',
    content: [
      {
        type: 'paragraph',
        text: `Some of the service providers we use, such as Google, are located in countries outside Switzerland and the EU/EEA, in particular the United States. Where personal data is transferred to such countries, we ensure that appropriate safeguards are in place, such as standard contractual clauses approved by the European Commission or the Swiss authorities, or that the recipient is certified under an applicable data privacy framework.`,
      },
    ],
  },

  {
    id: 'other-websites',
    title: 'Privacy policies of other websites',
    content: [
      {
        type: 'paragraph',
        text: `Our privacy policy applies only to our website. If you click on a link to another website, you should read their privacy policy.`,
      },
    ],
  },

  {
    id: 'policy-changes',
    title: 'Changes to our privacy policy',
    content: [
      {
        type: 'paragraph',
        text: `We may update this Privacy Policy from time to time. The latest version will always be available on this website.`,
      },
    ],
  },

  {
    id: 'data-rights',
    title: 'What are your data protection rights?',
    content: [
      {
        type: 'paragraph',
        text: `Every user is entitled to the following:`,
      },
      {
        type: 'rich-list',
        items: [
          {
            title: 'The right to access',
            text: 'Request copies of your personal data.',
          },
          {
            title: 'The right to rectification',
            text: 'Request correction of inaccurate data.',
          },
          {
            title: 'The right to erasure',
            text: 'Request deletion of your personal data.',
          },
          {
            title: 'The right to restrict processing',
            text: 'Request restricted processing under certain conditions.',
          },
          {
            title: 'The right to object to processing',
            text: 'Object to data processing under certain conditions.',
          },
          {
            title: 'The right to data portability',
            text: 'Request transfer of your data to another organization.',
          },
        ],
      },
    ],
  },

  {
    id: 'data-controller',
    title: 'Data controller',
    content: [
      {
        type: 'html',
        html: `The controller responsible for processing your personal data on this website is <strong>Klimamigrationsrecht, Universität Bern</strong>, Schanzeneckstrasse 1, 3012 Bern, Switzerland.`,
      },
      {
        type: 'email',
        prefix: 'You can contact the controller directly at ',
        label: 'romain.marguet@unibe.ch',
        href: 'mailto:romain.marguet@unibe.ch',
      },
    ],
  },

  {
    id: 'authority',
    title: 'How to contact the appropriate authorities',
    content: [
      {
        type: 'paragraph',
        text: `If you are based in Switzerland or your issue concerns Swiss data protection law, you can contact the Federal Data Protection and Information Commissioner (FDPIC).`,
      },
      {
        type: 'link',
        label: 'Federal Data Protection and Information Commissioner',
        href: 'https://www.edoeb.admin.ch',
      },
      {
        type: 'paragraph',
        text: `If you are in the EU/EEA, you may also lodge a complaint with your local supervisory authority.`,
      },
    ],
  },
]
