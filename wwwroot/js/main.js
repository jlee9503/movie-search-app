const { createApp, ref } = Vue;

createApp({
  setup() {
    const movieData = ref(["data 1, data 2, data 3"]);
    const title = ref("");
    const id = ref("");
    const posterUrl = ref("")

    const searchMoive = async () => {
      console.log(title.value)

      const response = await fetch('http://www.omdbapi.com/?s=' + title.value + '&apikey=3f66eca5')
      const result = await response.json();
      console.log(result)
      result = data.value;

    }

    return {
      movieData,
      title,
      id,
      posterUrl,
      searchMoive
    };

  },
}).mount("#home");