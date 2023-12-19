import { createApp, ref, computed } from "vue";

createApp({
  setup() {
    const title = ref("");
    const moviedata = ref([]);

    const searchMovie = async () => {
      const response = await fetch(
        "http://www.omdbapi.com/?s=" + title.value + "&apikey=3f66eca5"
      );
      const result = await response.json();
      moviedata.value = result.Search;
      console.log(moviedata.value);
    }

    const moviesPerPage = computed(() => {
      return moviedata.value.slice(
        (page_number - 1) * page_size,
        page_number * page_size
      );
    });
    return {
      title,
      moviedata,
      searchMovie,
    };
  },
}).mount("#home");
