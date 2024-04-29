export function scrollto() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollto);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
};
