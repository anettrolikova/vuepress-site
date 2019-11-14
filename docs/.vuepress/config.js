module.exports = {
  title: 'Magicians title',
  description: 'description',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Community0', link: 'linkcommunit0'},
      { text: 'next link', link: 'here' },
      { text: 'navbar', 
        items: [
          { text: 'Community', link: 'linkcommunity' },
          { text: 'Community2', link: 'linkcommunity2' },
        ]
      }
    ],
    sidebar: [
      ['/', 'who are magicians'],
      ['/history/', 'History'],
      ['/faq', 'Faq'],
      ['/newMemberGuide', 'newmemberguide'],
      ['/whoWeAre', 'Who We Are']
    ]
  }
}
