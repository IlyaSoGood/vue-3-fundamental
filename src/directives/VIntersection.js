export default {
    mounted(el, binding) {
        const options = {
          rootMargin: "0px",
          threshold: 1.0,
        };
        const callback = (entries, observer) => {
        //binding.instance.page < binding.instance.totalPages - условие лишает директиву универсальности.
        //Подумать как это получить/вынести (через store?)
        //Также нужно запретить отслеживание, если активен поиск по строке (searchQuery) (сделал)
        //На мажордоме сортировка на бэке через query-параметры (на каждый инпут - get запрос)
          if (entries[0].isIntersecting && binding.instance.page < binding.instance.totalPages && !binding.instance.searchQuery) {
              binding.value()
          }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
    name: 'intersection'
}