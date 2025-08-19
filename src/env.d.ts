/* eslint-disable @typescript-eslint/no-empty-interface */
type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}

// Ambient env typings for dev/build time access via import.meta.env
interface ImportMetaEnv {
  readonly AIRTABLE_TOKEN?: string;
  readonly AIRTABLE_BASE_ID?: string;
  readonly AIRTABLE_TABLE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
