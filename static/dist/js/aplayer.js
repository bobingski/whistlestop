var ap = new APlayer({
  element: document.getElementById('player'),
  narrow: false,
  autoplay: false,
  showlrc: 1,
  mutex: true,
  theme: '#444',
  listmaxheight: '128px',
  music:[
    {
      title: 'All My Friends',
      author: 'Snakehips ',
      url: "http://music.163.com/song/media/outer/url?id=410010056.mp3",
      pic: 'http://p1.music.126.net/uDR83qCkgYwyENtg4TLrHw==/18254092044582933.jpg',
      
    },
    {
      title: 'Nirvana',
      author: 'Sam Smith',
      url: 'http://music.163.com/song/media/outer/url?id=36308275.mp3',
      pic: 'http://p1.music.126.net/jxKCtRmDaA9YBPfOV8WUDw==/3389794349690837.jpg',
      
    },
    {
      title: 'Brave Shine',
      author: 'Aimer',
      url: 'http://music.163.com/song/media/outer/url?id=476081881.mp3',
      pic: 'http://p1.music.126.net/I6oHyU94hH8cTyI93IdFsg==/18853325881518014.jpg',
      
    },
    {
      title: 'I Found the Love',
      author: 'KOKIA',
      url: 'http://music.163.com/song/media/outer/url?id=31053308.mp3',
      pic: 'http://p1.music.126.net/R5flucnlBOsdU8GkUlG0xA==/7812030115856743.jpg',
      
    },
    {
      title: '爱をこめて花束を',
      author: 'Superfly',
      url: 'http://music.163.com/song/media/outer/url?id=4896445.mp3',
      pic: 'http://p1.music.126.net/XuTy9_ZaW-NoAkPO4cTeOQ==/6622358534926067.jpg',
      
    },
    {
      title: 'When Love & Hate Collide',
      author: 'Def Leppard',
      url: 'http://music.163.com/song/media/outer/url?id=2416597.mp3',
      pic: 'http://p1.music.126.net/OV-ZDJmwt_bEnoLFxo37Mw==/899400511575058.jpg',
      
    },    
  ]

});
ap.init;
