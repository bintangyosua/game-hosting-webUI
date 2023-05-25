const contents = [
  {
    thumbnail: "./imgs/blog-thumbnail1.webp",
    legend: "Minecraft",
    title: "Can you break the Unbreakable? [Lost Legends: The Breakout]",
    desc: "You have one hour to defeat the Unbreakable, one of the toughest piglins to ever snort, in this free challenge for Minecraft Legends.......",
  },
  {
    thumbnail: "./imgs/blog-thumbnail2.webp",
    legend: "Minecraft",
    title: "Start a New Minecraft Story - Official Trailer",
    desc: "Whether you’re a farmer or a fighter, a builder or a burrower, discover a new chapter of ideas at Minecraft.....",
  },
  {
    thumbnail: "./imgs/blog-thumbnail3.webp",
    legend: "Minecraft",
    title: "Minecraft Soothing Scenes – Relaxing Falling Snow",
    desc: "The first snow falls softly, covering the Overworld in a bright white blanket. Basking in the glow of the lanterns, take a moment to relax in Minecraft.....",
  },
];

const posts = document.getElementsByClassName("posts")[0];

contents.forEach((res) => {
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("post");

  const thumbnail = document.createElement("img");
  thumbnail.src = res.thumbnail;

  const legend = document.createElement("span");
  legend.classList.add("legend");
  legend.innerHTML = `${res.legend}`;

  const p = document.createElement("p");
  p.innerHTML = `${res.desc}`;

  contentDiv.appendChild(thumbnail);
  contentDiv.appendChild(legend);
  contentDiv.appendChild(p);

  posts.appendChild(contentDiv);
});
