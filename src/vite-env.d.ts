/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Formspree form ID, e.g. "xdkogqyz". Without it the contact section falls
   *  back to a direct mail link rather than rendering a form that cannot post. */
  readonly VITE_FORMSPREE_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
