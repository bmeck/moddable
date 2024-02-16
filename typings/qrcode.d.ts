declare module "qrcode" {
    type QRCodeParams = {
        /**
         * A number between 1 and 40 inclusive indicating the maximum version of the generated QR Code.
         * The version number determines the amount of data the QR Code can contain.
         * The implementation uses the minimum version number possible for the size of the data provided.
         * This property is optional and defaults to 40.
         * @default 40
         */
        maxVersion?: number,
        /**
         * A String or buffer containing the data to encode into the QR Code. This property is required.
         */
        input: string | ArrayBuffer
    }
    type QRCodeResult = ArrayBuffer & {
        /**
         * Dimension of square width and height of the data
         */
        size: number
    }
    /**
     * The qrCode function accepts an options object that describes the QR Code to generate.
     * It returns an ArrayBuffer where each byte is 0 or 1 for a white or black pixel.
     * The returned buffer has a size property that indicate the number of cells in one dimension of the generated QR Code.
     * @example
     * ```
       const code = qrCode({input: "Welcome to Moddable", maxVersion: 4});

        // trace QR Code to console
        code = new Uint8Array(code);
        for (let y = 0; y < = code.size; y++) {
            for (let x = 0; x < = code.size; x++)
                trace(code[(y * code.size) + x] ? "X" : ".", "\n");
            trace("\n");
        }
      ```
     */
    const QRCodeGenerator: (params: QRCodeParams) => QRCodeResult
    export default QRCodeGenerator
}

