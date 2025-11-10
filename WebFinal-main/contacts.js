
$(function () {
    const form = $("form");

    form.on("submit", function (event) {
        event.preventDefault();

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();

        $(".toast-message").remove();

        if (!name || !email || !message) {
            showToast(" Please fill in all fields.", "error");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showToast(" Invalid email format.", "error");
            return;
        }

        const btn = $(this).find("button[type='submit']");
        btn.prop("disabled", true)
            .html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Please wait...');

        setTimeout(() => {
            btn.prop("disabled", false).html("Send");
            showToast(" Your message has been sent successfully!", "success");
            form[0].reset();
        }, 2000);
    });

    function showToast(message, type) {
        const borderColor = type === "success" ? "#28a745" : "#dc3545";
        const toast = $(`
      <div class="toast-message" style="border-left:5px solid ${borderColor};">
        ${message}
      </div>
    `);
        $("body").append(toast);
        toast.hide().fadeIn(300);

        setTimeout(() => {
            toast.fadeOut(400, () => toast.remove());
        }, 3000);
    }
});
