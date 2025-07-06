declare module 'vanta' {
  import * as THREE from 'three';

  interface VantaOptions {
    el: HTMLElement;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    highlightColor?: number;
    midtoneColor?: number;
    baseColor?: number;
  }

  namespace VANTA {
    const FOG: (options: VantaOptions) => any;
  }

  export default VANTA;
}
