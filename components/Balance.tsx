'use client';

import { useEvmNativeBalance } from '@moralisweb3/next';
import { useEffect, useState } from 'react';
import { useAccount, useChainId } from 'wagmi';

function Balance() {
  const chain = useChainId();
  const account = useAccount();
  const [address, setAddress] = useState<`0x${string}` | undefined>(undefined);

  useEffect(() => {
    if (account) {
      setAddress(account.address);
    }
  }, [account]);

  const { data: nativeBalance, isFetching } = useEvmNativeBalance({ address: account.address!, chain });
  return (
    <div>
      <h3>Wallet: {address ? address : 'Connecting...'}</h3>
      <h3>Native Balance: {isFetching ? 'Fetching...' : `${nativeBalance?.balance.ether} ETH`}</h3>
    </div>
  );
}

export default Balance;
