declare module "stremio-addon-sdk" {
  export type StreamArgs = {
    type?: string;
    id: string;
  };

  export type Stream = {
    name: string;
    title: string;
    externalUrl?: string;
  };

  export type StreamHandler = (
    args: StreamArgs
  ) => Promise<{ streams: Stream[] }> | { streams: Stream[] };

  export type AddonBuilder = {
    defineStreamHandler(handler: StreamHandler): void;
    getInterface(): unknown;
  };

  export const addonBuilder: {
    new (manifest: unknown): AddonBuilder;
    (manifest: unknown): AddonBuilder;
  };

  export const serveHTTP: (
    addonInterface: unknown,
    options: { port: number }
  ) => void;
}
