/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_PRODUCT_URL?: string;
  readonly PUBLIC_UGC_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
