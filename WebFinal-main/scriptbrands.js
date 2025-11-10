const faqLink = document.getElementById("faqLink");
const faqPopup = document.getElementById("faqPopup");
const closeBtn = document.querySelector(".close-btn");

faqLink.addEventListener("click", (e) => {
  e.preventDefault();
  faqPopup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  faqPopup.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === faqPopup) {
    faqPopup.style.display = "none";
  }
}
);

const showTimeBtn = document.getElementById("showTimeBtn");

showTimeBtn.addEventListener("click", () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString();

  alert("Current Time: " + timeString);

  document.getElementById("datetime").textContent = now.toLocaleString();
});

const cards = document.querySelectorAll('.brand-card');
document.querySelectorAll('.perfume-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.2s ease';
    card.style.transform = 'scale(1.07) rotate(1deg)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1) rotate(0deg)';
  });
});

 const hoverSound = new Audio('water.mp3');
    document.querySelectorAll('.perfume-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
      });
    });

$(document).ready(function () {
      const searchableItems = $(".card, .gallery-item");
      const suggestionsBox = $("#suggestions");
      const allNames = [];

      searchableItems.each(function () {
        const name = $(this).find("h3, .caption").text().trim();
        if (name) allNames.push(name);
      });

      $("#search-input").on("keyup", function () {
        const query = $(this).val().toLowerCase();
        suggestionsBox.empty();

        if (query === "") {
          searchableItems.show();
          suggestionsBox.hide();
          return;
        }

        searchableItems.filter(function () {
          const text = $(this).text().toLowerCase();
          $(this).toggle(text.includes(query));
        });

        const filtered = allNames.filter((n) => n.toLowerCase().includes(query));
        if (filtered.length > 0) {
          filtered.forEach((item) => {
            suggestionsBox.append(`<li>${item}</li>`);
          });
          suggestionsBox.show();
        } else {
          suggestionsBox.hide();
        }
      });

      suggestionsBox.on("click", "li", function () {
        const selected = $(this).text();
        $("#search-input").val(selected);
        suggestionsBox.hide();

        searchableItems.filter(function () {
          const text = $(this).text().toLowerCase();
          $(this).toggle(text.includes(selected.toLowerCase()));
        });
      });
    });

    $(window).on("scroll", function () {
        const scrollTop = $(window).scrollTop();
        const docHeight = $(document).height() - $(window).height();
        const scrollPercent = (scrollTop / docHeight) * 100;

        $("#progress-bar").css("width", scrollPercent + "%");
      });

      function lazyLoadImages() {
          $(".lazy").each(function () {
            const imgTop = $(this).offset().top;
            const scrollBottom = $(window).scrollTop() + $(window).height();

            if (imgTop < scrollBottom + 200 && !$(this).attr("src-loaded")) {
              const realSrc = $(this).attr("data-src");
              $(this).attr("src", realSrc);
              $(this).attr("src-loaded", true);
              $(this).addClass("loaded");
            }
          });
        }

        $(window).on("scroll", lazyLoadImages);
        lazyLoadImages();



