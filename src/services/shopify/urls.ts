import { env } from "app/config/env";

export const shopifyUrls = {
  products: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2025-07/products.json`,
  },
};
