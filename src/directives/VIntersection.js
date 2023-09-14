export default {
    mounted(el, binding) {
        console.log(binding)
        const options = {
          rootMargin: "0px",
          threshold: 1.0,
        };
        const callback = (entries, observer) => {
          if (entries[0].isIntersecting && binding.instance.page < binding.instance.totalPages) {
              binding.value.cb()
          }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
}