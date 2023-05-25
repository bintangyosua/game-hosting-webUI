const plans = [
  {
    name: "Free",
    ram: 2,
    first_month: 0,
    desc: "Basic servers & some modpacks",
    recurring_month: 0,
  },
  {
    name: "Basic",
    ram: 3,
    first_month: "Rp20.000,00",
    desc: "Basic servers & some modpacks",
    recurring_month: "Rp25.000,00",
  },
  {
    name: "Starter",
    ram: 4,
    first_month: "Rp45.000,00",
    desc: "Basic servers & some modpacks",
    recurring_month: "Rp50.000,00",
  },
  {
    name: "Advancer",
    ram: 8,
    first_month: "Rp90.000,00",
    desc: "Basic servers & all modpacks",
    recurring_month: "Rp100.000,00",
  },
  {
    name: "Power",
    ram: 12,
    first_month: "Rp150.000,00",
    desc: "Basic servers & all modpacks",
    recurring_month: "Rp170.000,00",
  },
  {
    name: "Ultimate",
    ram: 16,
    first_month: "Rp270.000,00",
    desc: "Basic servers & all modpacks",
    recurring_month: "Rp300.000,00",
  },
  {
    name: "Master",
    ram: 24,
    first_month: "Rp380.000,00",
    desc: "Basic servers & all modpacks",
    recurring_month: "Rp420.000,00",
  },
  {
    name: "Hell",
    ram: 32,
    first_month: "Rp470.000,00",
    desc: "Basic servers & all modpacks",
    recurring_month: "Rp500.000,00",
  },
];

const hostPlansContainer = document.getElementsByClassName("host-plans")[0];

plans.forEach((res) => {
  const hostPlanDiv = document.createElement("div");
  hostPlanDiv.classList.add("host-plan");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("plan-name");
  titleDiv.innerHTML = `${res.name}`;

  const ramDiv = document.createElement("div");
  ramDiv.classList.add("ram");
  ramDiv.innerHTML = `${res.ram}<span>GB RAM</span>`;

  const descriptionSpan = document.createElement("span");
  descriptionSpan.classList.add("host-plan-desc");
  descriptionSpan.textContent = `${res.desc}`;

  const priceSpan = document.createElement("span");
  priceSpan.classList.add("price");
  priceSpan.innerHTML = `<strong>${res.first_month} first month</strong>`;

  const recurringPriceSpan = document.createElement("span");
  recurringPriceSpan.classList.add("per-month");
  recurringPriceSpan.textContent = `Recurring Price ${res.recururing_month}/mo billed monthly`;

  const orderButton = document.createElement("button");
  orderButton.classList.add("button");
  orderButton.textContent = "Order Now";

  hostPlanDiv.appendChild(titleDiv);
  hostPlanDiv.appendChild(ramDiv);
  hostPlanDiv.appendChild(descriptionSpan);
  hostPlanDiv.appendChild(document.createElement("br"));
  hostPlanDiv.appendChild(document.createElement("br"));
  hostPlanDiv.appendChild(priceSpan);
  hostPlanDiv.appendChild(document.createElement("br"));
  hostPlanDiv.appendChild(recurringPriceSpan);
  hostPlanDiv.appendChild(document.createElement("br"));
  hostPlanDiv.appendChild(orderButton);

  hostPlansContainer.appendChild(hostPlanDiv);
});
