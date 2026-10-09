import type { CaseStudy } from "../types";

export const paperErp: CaseStudy = {
  slug: "paper-erp",
  tagline: "A workflow-first ERP designed around a real paper distribution business.",
  blocks: [
    {
      type: "prose",
      id: "status",
      title: "Status",
      paragraphs: [
        "This project is in the design stage. It is based on a real paper distribution business, shown here with the owner's permission. Results will be added once the system is running.",
      ],
    },
    {
      type: "prose",
      id: "business",
      title: "The business",
      paragraphs: [
        "The project is based on a real paper-distribution business. The owner has given permission to present it here, so details are kept at a general level.",
      ],
    },
    {
      type: "list",
      id: "why-erp",
      title: "Why an ERP",
      intro:
        "A distribution business tracks stock, orders, customers, suppliers, and money at the same time.",
      items: [
        "Stock levels change with every sale and every delivery from a supplier.",
        "Orders, invoices, and payments need to stay consistent with one another.",
        "Customer and supplier balances need a reliable ledger rather than scattered records.",
      ],
    },
    {
      type: "list",
      id: "modules",
      title: "Planned modules",
      intro:
        "The system is in the design stage and none of these modules is implemented yet. Modules under consideration:",
      items: [
        "Inventory management",
        "Order management",
        "Customer and supplier records",
        "Invoicing",
        "Ledger management",
      ],
    },
  ],
};
