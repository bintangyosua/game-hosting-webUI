Vue.component("discount-component", {
  template: `
    <div class="alert-area">
      <span><strong>50% OFF</strong> For the first time</span>
      <span>Check this code out: <span class="discount-code">CAVES</span></span>
    </div>
    `,
});

new Vue({
  el: "#app",
});
