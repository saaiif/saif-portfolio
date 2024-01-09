declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<"svg"> & { title?: string }
  >;

  export default ReactComponent;
}

declare namespace JSX {
  interface IntrinsicElements {
    marquee: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLMarqueeElement> & { loop?: string },
      HTMLMarqueeElement
    >;
  }
}

interface ImportMetaEnv {
  VITE_GITHUB_LINK: string;
  VITE_LINKEDIN_LINK: string;
  VITE_INSTA_LINK: string;
  VITE_SERVICE_ID: string;
  VITE_TEMPLATE_ID: string;
  VITE_PUBLIC_KEY: string;
  VITE_RESUME_ALERT: string;
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference types="vite/client" />
