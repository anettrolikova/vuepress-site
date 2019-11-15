module.exports = {
  title: 'Magicians title',
  description: 'description',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'About', link: 'linkcommunit0'},
      { text: 'next link', link: 'here' },
      { text: 'navbar', 
        items: [
          { text: 'Community', link: 'linkcommunity' },
          { text: 'Community2', link: 'linkcommunity2' },
     { text: 'Our story', link: 'here' },
     { text: 'Recent Gatherings', link: 'here' },
     { text: 'New Member Guide', link: 'here' },
     { text: 'Community', link: 'here' },
     { text: 'Contact', link: 'here' },
        ]
      }
    ],
    sidebar: [
      ['/', 'About'],
      ['/Our story/', 'Our story'],
      ['/faq', 'Faq'],
      ['/newMemberGuide', 'newmemberguide'],
      ['/whoWeAre', 'Who We Are']
    ]
  }
}
