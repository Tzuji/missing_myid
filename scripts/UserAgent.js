window.onload = function() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('ipod') > -1) {
      document.body.classList.add('ios');
    } else if (ua.indexOf('android') > -1) {
      document.body.classList.add('android');
    }
  }