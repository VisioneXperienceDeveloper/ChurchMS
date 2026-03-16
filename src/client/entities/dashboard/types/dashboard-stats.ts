export const data = {
  members: [
    { name: "Jan", total: 120 },
    { name: "Feb", total: 132 },
    { name: "Mar", total: 145 },
    { name: "Apr", total: 160 },
    { name: "May", total: 178 },
    { name: "Jun", total: 245 },
  ],
  newcomers: [
    { name: "Jan", total: 10 },
    { name: "Feb", total: 15 },
    { name: "Mar", total: 8 },
    { name: "Apr", total: 20 },
    { name: "May", total: 12 },
    { name: "Jun", total: 25 },
  ],
  attendance: [
    { name: "Jan", total: 100 },
    { name: "Feb", total: 110 },
    { name: "Mar", total: 125 },
    { name: "Apr", total: 140 },
    { name: "May", total: 155 },
    { name: "Jun", total: 210 },
  ],
  offering: [
    { name: "Jan", total: 2500 },
    { name: "Feb", total: 3200 },
    { name: "Mar", total: 2800 },
    { name: "Apr", total: 3500 },
    { name: "May", total: 4100 },
    { name: "Jun", total: 5200 },
  ],
};

export type StatType = keyof typeof data;
