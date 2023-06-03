Vue.component("footer-component", {
  template: `
      <div class="pre-footer">
        <div class="wrapper">
          <div>
            <h1>Products</h1>
            <ul class="footer-list">
              <li>Game Server Hosting</li>
              <li>Modpack List</li>
              <li>Server List</li>
              <li>Enterprise Console</li>
            </ul>
            <h1>Our Company</h1>
            <ul class="footer-list">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Affiliate Program</li>
              <li>Sponsorships</li>
              <li>Jobs</li>
            </ul>
          </div>
          <div>
            <h1>Top Game Server</h1>
            <ul class="footer-list">
              <li>Minecraft Hosting</li>
              <li>Ark Hosting</li>
              <li>Rust Hosting</li>
              <li>Valheim Hosting</li>
              <li>CS:GO Hosting</li>
              <li>Terraria Hosting</li>
              <li>Left 4 Dead</li>
              <li>Grand Theft Auto V</li>
              <li>The Forest</li>
              <li>All Games ></li>
            </ul>
          </div>
          <div>
            <h1>Customer Areas</h1>
            <ul class="footer-list">
              <li>Billing Panel</li>
              <li>Game Panel</li>
              <li>Knowledgebase</li>
            </ul>
            <h1>Resources</h1>
            <ul class="footer-list">
              <li>Server Status</li>
              <li>Submit a Ticket</li>
              <li>Education</li>
              <li>Scholarship</li>
              <li>Giveaway</li>
              <li>Public Server</li>
            </ul>
          </div>
          <div>
            <p>
              Our mission is to be the leader in game server hosting through
              dedication to customer support and education.
            </p>
          </div>
        </div>
      </div>
    `,
});

new Vue({
  el: "#app",
});