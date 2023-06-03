Vue.component("game-list-component", {
  template: `
    <div class="sp-games">
        <div class="game-card">
            <img src="./imgs/Minecraft.webp" alt="" />
        </div>
        <div class="game-card">
            <img src="./imgs/Terraria.webp" alt="" />
        </div>
        <div class="game-card"><img src="./imgs/Ark.webp" alt="" /></div>
        <div class="game-card"><img src="./imgs/Rust.webp" alt="" /></div>
        <div class="game-card">
            <img src="./imgs/Valheim.webp" alt="" />
        </div>
        <div class="game-card"><img src="./imgs/CSGO.webp" alt="" /></div>
        <div class="game-card">
            <img src="./imgs/The Forest.webp" alt="" />
        </div>
        <div class="game-card"><img src="./imgs/GTAV.jpg" alt="" /></div>
        <div class="game-card"><img src="./imgs/L4D2.png" alt="" /></div>
    </div>
    `,
});

new Vue({
  el: "#app",
});
