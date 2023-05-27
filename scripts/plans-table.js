const table = [
  {
    name: "Type",
    CPU: "CPU",
    Server_Slots: "Server Slots",
    CPU_Power: "CPU Power",
    Memory: "Memory",
    Unmetered_Backups: "Unmetered Backups",
    Unmetered_Databases: "Unmetered Databases",
    Unmetered_Ports: "Unmetered Ports",
    Unmetered_Disk_Space: "Unmetered Disk Space",
    Premium_Location: "Premium Location",
    Ad_Free: "Ad Free",
    MOTD_Ad_Removal: "MOTD Ad Removal",
    Always_Online: "Always Online",
    Priority_Support: "Priority Support",
    Access_New_Features: "Acceess New Features",
  },
  {
    name: "Free",
    CPU: "AMD Ryzen 9 5950X",
    Server_Slots: 3,
    CPU_Power: "120%",
    Memory: "2GB",
    Unmetered_Backups: false,
    Unmetered_Databases: false,
    Unmetered_Ports: false,
    Unmetered_Disk_Space: false,
    Premium_Location: false,
    Ad_Free: false,
    MOTD_Ad_Removal: false,
    Always_Online: false,
    Priority_Support: false,
    Access_New_Features: false,
  },
  {
    name: "Basic",
    CPU: "AMD Ryzen 9 5950X or Intel Core i9-13900",
    Server_Slots: 3,
    CPU_Power: "150%",
    Memory: "3GB",
    Unmetered_Backups: true,
    Unmetered_Databases: true,
    Unmetered_Ports: true,
    Unmetered_Disk_Space: true,
    Premium_Location: true,
    Ad_Free: true,
    MOTD_Ad_Removal: true,
    Always_Online: true,
    Priority_Support: true,
    Access_New_Features: true,
  },
  {
    name: "Starter",
    CPU: "AMD Ryzen 9 5950X or Intel Core i9-13900",
    Server_Slots: 3,
    CPU_Power: "200%",
    Memory: "4GB",
    Unmetered_Backups: true,
    Unmetered_Databases: true,
    Unmetered_Ports: true,
    Unmetered_Disk_Space: true,
    Premium_Location: true,
    Ad_Free: true,
    MOTD_Ad_Removal: true,
    Always_Online: true,
    Priority_Support: true,
    Access_New_Features: true,
  },
  {
    name: "Advancer",
    CPU: "AMD Ryzen 9 5950X or Intel Core i9-13900",
    Server_Slots: 4,
    CPU_Power: "250%",
    Memory: "8GB",
    Unmetered_Backups: true,
    Unmetered_Databases: true,
    Unmetered_Ports: true,
    Unmetered_Disk_Space: true,
    Premium_Location: true,
    Ad_Free: true,
    MOTD_Ad_Removal: true,
    Always_Online: true,
    Priority_Support: true,
    Access_New_Features: true,
  },
  {
    name: "Power",
    CPU: "AMD Ryzen 9 5950X or Intel Core i9-13900",
    Server_Slots: 8,
    CPU_Power: "300%",
    Memory: "12GB",
    Unmetered_Backups: true,
    Unmetered_Databases: true,
    Unmetered_Ports: true,
    Unmetered_Disk_Space: true,
    Premium_Location: true,
    Ad_Free: true,
    MOTD_Ad_Removal: true,
    Always_Online: true,
    Priority_Support: true,
    Access_New_Features: true,
  },
  {
    name: "Ultimate",
    CPU: "Intel Core i9-14900",
    Server_Slots: 12,
    CPU_Power: "350%",
    Memory: "16GB",
    Unmetered_Backups: true,
    Unmetered_Databases: true,
    Unmetered_Ports: true,
    Unmetered_Disk_Space: true,
    Premium_Location: true,
    Ad_Free: true,
    MOTD_Ad_Removal: true,
    Always_Online: true,
    Priority_Support: true,
    Access_New_Features: true,
  },
  {
    name: "Master",
    CPU: "Intel Core i9-14900",
    Server_Slots: 16,
    CPU_Power: "400%",
    Memory: "24GB",
    Unmetered_Backups: true,
    Unmetered_Databases: true,
    Unmetered_Ports: true,
    Unmetered_Disk_Space: true,
    Premium_Location: true,
    Ad_Free: true,
    MOTD_Ad_Removal: true,
    Always_Online: true,
    Priority_Support: true,
    Access_New_Features: true,
  },
  {
    name: "Hell",
    CPU: "Intel Core i9-14900",
    Server_Slots: 20,
    CPU_Power: "450%",
    Memory: "32GB",
    Unmetered_Backups: true,
    Unmetered_Databases: true,
    Unmetered_Ports: true,
    Unmetered_Disk_Space: true,
    Premium_Location: true,
    Ad_Free: true,
    MOTD_Ad_Removal: true,
    Always_Online: true,
    Priority_Support: true,
    Access_New_Features: true,
  },
];

const checklist = "✅";

const tableDiv = document.getElementById("plans-table");
console.log(tableDiv);

const tbody = document.getElementById("plans-table-body");

tableDiv.appendChild(tbody);

for (let i = 0; i < 1; i++) {
  const tr = document.createElement("tr");
  table.forEach((res) => {
    const td = document.createElement("td");
    td.innerHTML = res.CPU;

    tr.appendChild(td);
    tbody.appendChild(tr);
  });

  const tr2 = document.createElement("tr");
  table.forEach((res) => {
    const td = document.createElement("td");
    td.innerHTML = res.Server_Slots;

    tr2.appendChild(td);
    tbody.appendChild(tr2);
  });

  const tr3 = document.createElement("tr");
  table.forEach((res) => {
    const td = document.createElement("td");
    td.innerHTML = res.CPU_Power;

    tr3.appendChild(td);
    tbody.appendChild(tr3);
  });

  const tr4 = document.createElement("tr");
  table.forEach((res) => {
    const td = document.createElement("td");
    td.innerHTML = res.Memory;

    tr4.appendChild(td);
    tbody.appendChild(tr4);
  });

  const tr5 = document.createElement("tr");
  table.forEach((res) => {
    const td = document.createElement("td");
    if (!(res.name === "Type")) {
      td.innerHTML = res.Unmetered_Backups ? "Yes" : "No";
    } else {
      td.innerHTML = "Unmetered Backups";
    }

    tr5.appendChild(td);
    tbody.appendChild(tr5);
  });

  const tr6 = document.createElement("tr");
  table.forEach((res) => {
    const td = document.createElement("td");
    if (!(res.name === "Type")) {
      td.innerHTML = res.Unmetered_Databases ? "Yes" : "No";
    } else {
      td.innerHTML = "Unmetered Databases";
    }

    tr6.appendChild(td);
    tbody.appendChild(tr6);
  });

  const tr7 = document.createElement("tr");
  table.forEach((res) => {
    const td = document.createElement("td");
    if (!(res.name === "Type")) {
      td.innerHTML = res.Unmetered_Ports ? "Yes" : "No";
    } else {
      td.innerHTML = "Unmetered Ports";
    }

    tr7.appendChild(td);
    tbody.appendChild(tr7);
  });

  const tr8 = document.createElement("tr");
  table.forEach((res) => {
    const td = document.createElement("td");
    if (!(res.name === "Type")) {
      td.innerHTML = res.Unmetered_Disk_Space ? "Yes" : "No";
    } else {
      td.innerHTML = "Unmetered Disk Space";
    }

    tr8.appendChild(td);
    tbody.appendChild(tr8);
  });

  const tr9 = document.createElement("tr");
  table.forEach((res) => {
    const td = document.createElement("td");
    if (!(res.name === "Type")) {
      td.innerHTML = res.Premium_Location ? "Yes" : "No";
    } else {
      td.innerHTML = "Premium Location";
    }

    tr9.appendChild(td);
    tbody.appendChild(tr9);
  });

  const tr10 = document.createElement("tr");
  table.forEach((res) => {
    const td = document.createElement("td");
    if (!(res.name === "Type")) {
      td.innerHTML = res.Ad_Free ? "Yes" : "No";
    } else {
      td.innerHTML = "Ad Free";
    }

    tr10.appendChild(td);
    tbody.appendChild(tr10);
  });

  const tr11 = document.createElement("tr");
  table.forEach((res) => {
    const td = document.createElement("td");
    if (!(res.name === "Type")) {
      td.innerHTML = res.MOTD_Ad_Removal ? "Yes" : "No";
    } else {
      td.innerHTML = "MOTD Ad Removal";
    }

    tr11.appendChild(td);
    tbody.appendChild(tr11);
  });

  const tr12 = document.createElement("tr");
  table.forEach((res) => {
    const td = document.createElement("td");
    if (!(res.name === "Type")) {
      td.innerHTML = res.Always_Online ? "Yes" : "No";
    } else {
      td.innerHTML = "Always Online";
    }

    tr12.appendChild(td);
    tbody.appendChild(tr12);
  });

  const tr13 = document.createElement("tr");
  table.forEach((res) => {
    const td = document.createElement("td");
    if (!(res.name === "Type")) {
      td.innerHTML = res.Priority_Support ? "Yes" : "No";
    } else {
      td.innerHTML = "Priority Support";
    }

    tr13.appendChild(td);
    tbody.appendChild(tr13);
  });

  const tr14 = document.createElement("tr");
  table.forEach((res) => {
    const td = document.createElement("td");
    if (!(res.name === "Type")) {
      td.innerHTML = res.Access_New_Features ? "Yes" : "No";
    } else {
      td.innerHTML = "Access New Features";
    }

    tr14.appendChild(td);
    tbody.append(tr14);
  });
}
