declare module '@theme-ui/presets' {
  import { Theme } from 'theme-ui';

  const presets: Record<'tailwind', Theme>;

  export = presets;
}
