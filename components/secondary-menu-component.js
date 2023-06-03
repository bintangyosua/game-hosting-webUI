Vue.component("secondary-menu-component", {
  template: `
    <div class="secondary-menu">
      <div class="wrapper">
        <span>
          <a href="" class="top-mini-menu">
            <img src="./imgs/svg/setup.svg" alt="" />
            <span>Status</span>
          </a>
          <a href="dashboard.html" class="top-mini-menu">
            <img src="./imgs/svg/setting.svg" alt="" />
            <span>Panel</span>
          </a>
        </span>
      </div>
    </div>
    `,
});

new Vue({
  el: "#app",
});
