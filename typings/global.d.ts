import System_ from "embedded:io/system"
import Device from "embedded:provider/builtin"

export {}
declare global {
  class HostBuffer extends ArrayBuffer {}
  type BufferLike = ArrayBuffer | (object & {length: number})
  // NOTE: `System` is non-standard and temporary to support the IO examples. Breaking changes are possible.
  var trace: (...parts: string[]) => void;
  var System: typeof System_;
  var device: typeof Device;
}
