/* eslint-disable @typescript-eslint/no-unused-vars */

import { cookieStorage, CreateConnectorFn, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, bsc } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = 'f7fc008984642cf1d6d87760b4e958ef'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [bsc] 

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig