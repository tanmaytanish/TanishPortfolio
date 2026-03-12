/**
 * Detects whether the current device supports WebGL.
 * Returns true if WebGL is available, false otherwise.
 */
export const isWebGLAvailable = (): boolean => {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
};
