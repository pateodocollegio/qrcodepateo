if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/qrcodepateo/service-worker.js', { scope: '/qrcodepateo/' })
      .then(function () {
        console.log("Service Worker Registered, Cheers to PWA Fire!");
      });
  });
}