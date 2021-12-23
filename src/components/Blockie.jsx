import Blockies from "react-blockies";
import { useMoralis } from "react-moralis";

/**
 * Shows a blockie image for the provided wallet address
 * @param {*} props
 * @returns <Blockies> JSX Elemenet
 */

function Blockie(props) {
  const { walletAddress } = useMoralis();
  if ((!props.address && !props.currentWallet) || !walletAddress) return null;

  return (
    <Blockies
      seed={props.currentWallet ? walletAddress.toLowerCase() : props.address.toLowerCase()}
      className="identicon"
      {...props}
    />
  );
}

export default Blockie;
