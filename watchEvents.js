const Moralis = require('moralis').default
require('dotenv').config()
const { EvmChain } = require('@moralisweb3/common-evm-utils')

const addresses = require('./constants/contractAddresses.json')
const abis = require('./constants/abi.json')

const chainId = '31337'
// Add a variable for the api key, address and chain
const MORALIS_API_KEY = process.env.NEXT_PUBLIC_MORALIS_API_KEY
const address = addresses[chainId][0]
const chain = EvmChain.ETHEREUM

const runApp = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
    // ...and any other configuration
  })

  const itemListedTopic = 'ItemListed(address,address,uint256,uint256)'
  const itemCanceledTopic = 'ItemCanceled(address,address,uint256)'
  const itemBought = 'ItemBought(address,address,uint256,uint256)'
  const itemListedAbi = abis.find(i => i.name === 'ItemListed')
  const itemCanceledAbi = abis.find(i => i.name === 'ItemCanceled')
  const itemBoughtAbi = abis.find(i => i.name === 'ItemBought')

  const listedResponse = await Moralis.EvmApi.events.getContractEvents({
    address,
    chain,
    topic: itemListedTopic,
    abi: itemListedAbi,
  })
  const canceledResponse = await Moralis.EvmApi.events.getContractEvents({
    address,
    chain,
    topic: itemCanceledTopic,
    abi: itemCanceledAbi,
  })
  const boughtResponse = await Moralis.EvmApi.events.getContractEvents({
    address,
    chain,
    topic: itemBought,
    abi: itemBoughtAbi,
  })
  console.log(listedResponse.toJSON())
  console.log(canceledResponse.toJSON())
  console.log(boughtResponse.toJSON())
}

runApp()
