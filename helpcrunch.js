/* 클리뉴코리아 HelpCrunch 채팅 위젯 로더 (카페24 스크립트 태그용, 2026-10-27)
   HelpCrunch 공식 설치 코드와 동일. 카페24 스킨을 수정하지 않고 앱 스크립트 태그로 주입한다. */
(function (w, d) {
  w.helpcrunchSettings = { organization: 'clinue', appId: '5653b978-d342-4995-835e-a9f9b22103a3' };
  var url = 'https://embed.helpcrunch.com/sdk.js';
  w.HelpCrunch = w.HelpCrunch || function () { w.HelpCrunch.q.push(arguments); };
  w.HelpCrunch.q = w.HelpCrunch.q || [];
  function load() {
    var list = d.getElementsByTagName('script');
    for (var i = 0; i < list.length; i++) { if (list[i].src === url) { return; } }
    var s = d.createElement('script');
    s.async = true;
    s.type = 'text/javascript';
    s.src = url;
    (d.body || d.head).appendChild(s);
  }
  if (d.readyState === 'complete') { load(); } else { w.addEventListener('load', load, false); }
})(window, document);
