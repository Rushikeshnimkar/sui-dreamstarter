"use client"
import WormholeConnect from '@wormhole-foundation/wormhole-connect';
const DemoNav = () => {
  return (
    <WormholeConnect config={{"env":"devnet"}} />
  );
}
export default DemoNav;