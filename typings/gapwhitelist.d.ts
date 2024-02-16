declare module "gapwhitelist" {
    import GAP from "gap"
    /**
     * @default GAP.AddressType.PUBLIC
     */
    type GAPWhitelistAddressType = (typeof GAP)['AddressType']
    const GAPWhitelist: {
        add(address: string, addressType?: GAPWhitelistAddressType): void
        remove(address: string, addressType?: GAPWhitelistAddressType): void
        clear(): void
    }
    export default GAPWhitelist
}
