const accordions = document.querySelectorAll(".accordion-btn");

    accordions.forEach(btn => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;

            content.style.display = content.style.display === "block" ? "none" : "block";

            content.style.transition = "all 0.6 ease";
        });
    });
        function showAbout() {
          alert("🌤️ Cloudly is a perfume shop offering original fragrances from global brands.\n\n We combine quality, style, and affordability so everyone can find their perfect scent.");
        }


$(document).ready(function(){
    console.log("jQuery is ready!");

    $(window).on("scroll", function(){
        const scrollTop = $(window).scrollTop();
        const docHeight = $(document).height() - $(window).height();
        const scrollPercent = (scrollTop / docHeight) * 100;
        $(".scroll-progress").css("width", scrollPercent + "%");
    });
});

$("#searchInput").on("keyup", function() {
    const value = $(this).val().toLowerCase();
    $(".product-item").filter(function() {
        $(this).toggle($(this).attr("data-name").toLowerCase().includes(value));
    });
});
$(document).ready(function() {
    console.log("jQuery is ready!");

    $(window).on("scroll", function() {
        const scrollTop = $(window).scrollTop();
        const docHeight = $(document).height() - $(window).height();
        const scrollPercent = (scrollTop / docHeight) * 100;
        $(".scroll-progress").css("width", scrollPercent + "%");
    });

    $("#searchInput").on("keyup", function() {
        const value = $(this).val().toLowerCase();
        $(".product-item").filter(function() {
            $(this).toggle($(this).attr("data-name").toLowerCase().includes(value));
        });
    });

    $("#loadMoreBtn").on("click", function() {
        const hiddenItems = $(".product-item.d-none");

        if (hiddenItems.length > 0) {
            hiddenItems.slice(0, 4).removeClass("d-none").hide().fadeIn(500);
            if ($(".product-item.d-none").length === 0) {
                $(this).text("Show Less");
            }
        } else {

            $(".product-item").slice(4).fadeOut(300, function() {
                $(this).addClass("d-none");
            });
            $("#loadMoreBtn").text("Load More");
        }
    });
});

