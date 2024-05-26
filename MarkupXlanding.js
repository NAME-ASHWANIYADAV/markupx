document.getElementById("emailDiv").addEventListener("click", function () {
    const recipient = 'Founder@markupxbrands.com';
    const subject = encodeURIComponent("Dynamic subject here");
    const body = encodeURIComponent("Dynamic body text here");
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  })
  document.querySelectorAll('.querymarkupxgmailcom').forEach(div => {
    div.addEventListener('click', function () {
      const recipient = "Founder@markupxbrands.com";
      const subject = encodeURIComponent("Dynamic Subject Here");
      const body = encodeURIComponent("Dynamic body text here");

      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  });
  document.querySelectorAll('our-handles').forEach(div => {
    div.addEventListener('click', function () {
      const recipient = "Founder@markupxbrands.com";
      const subject = encodeURIComponent("Dynamic Subject Here");
      const body = encodeURIComponent("Dynamic body text here");

      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  });

   // Check if the page exists and redirect to 404 if not
   function checkPageExistence() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const url = link.getAttribute('href');
        fetch(url, { method: 'HEAD' })
          .then(response => {
            if (!response.ok) {
              window.location.href = '404.html';
            } else {
              window.location.href = url;
            }
          })
          .catch(() => {
            window.location.href = '404.html';
          });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', checkPageExistence);