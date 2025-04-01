const TAG_NAME = '@privy-io/blah@1.3.4'
const BODY = `### Minor Changes

-   95ba13a: introduces the useSyncJwtBasedAuthState hook.
    deprecates the \`customAuth\` config option and \`useCustomAuth\` hook.

### Patch Changes

-   73f400f: fix transaction gas/nonce bug
-   d632ebc: Removed WalletConnect fetch when WalletConnect is not used
-   dd6dbbd: temp: fix UI bug for Solana wallet transactions involving ATA transactions
-   d799676: update internal behavior of useWallets().ready for unauthenticated instances
-   Updated dependencies [a750ba0]
    -   @privy-io/js-sdk-core@0.46.4
`

console.log(`<Update label="${TAG_NAME.split('@').at(-1)}">

### Improvements

${BODY
  .split('\n')
  .filter(line => line.trim().length > 0 && !line.startsWith('###') && !line.includes('Updated dependencies'))
  .map(line => line.trim().replace(/^.*:/, '-').replace(/\s+/, ' '))
  .join('\n').replace(/\n([^-])/, '\n- $1')
}

</Update>`);
