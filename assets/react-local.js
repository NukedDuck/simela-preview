// Στο live (simela-psychology.gr), στο *.pages.dev και τοπικά (localhost) το React φορτώνει από το ίδιο domain (assets/vendor/), όχι από το unpkg.com.
// Οι διευθύνσεις πρέπει να είναι ίδιες με τα REACT_URL / REACT_DOM_URL του support.js. Αν αλλάξει η έκδοση εκεί, αλλάζουν μαζί αυτές και τα αρχεία του assets/vendor/.
(function () {
  var h = location.hostname;
  if (h === 'simela-psychology.gr' || /\.simela-psychology\.gr$/.test(h) || /\.pages\.dev$/.test(h) || h === 'localhost' || h === '127.0.0.1') {
    window.__resources = {
      'https://unpkg.com/react@18.3.1/umd/react.production.min.js': '/assets/vendor/react.production.min.js',
      'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js': '/assets/vendor/react-dom.production.min.js'
    };
  }
})();
