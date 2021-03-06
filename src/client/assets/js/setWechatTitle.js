module.exports = function (title) {
    document.title = title;
    let mobile = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(mobile)) {
      let iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      // 替换成站标favicon路径或者任意存在的较小的图片即可
      // iframe.setAttribute('src', 'static/favicon.ico');
      let iframeCallback = function () {
        setTimeout(function () {
          iframe.removeEventListener('load', iframeCallback);
          document.body.removeChild(iframe)
        }, 1)
      };
      iframe.addEventListener('load', iframeCallback);
      document.body.appendChild(iframe)
    }
  };
  