Vue.component("my-component", {
  template: `
    <div>
      <h1>{{ message }}</h1>
      <button @click="changeMessage">Change Message</button>
    </div>
    `,
  data() {
    return {
      message: "Hello, this is vue",
    };
  },
  methods: {
    changeMessage() {
      this.message = "Hello, its vue!";
    },
  },
});

new Vue({
  el: "#app",
});
