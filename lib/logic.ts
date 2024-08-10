import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

export const CLUSTER = process.env.DEVNET_URL ?? clusterApiUrl("devnet");
const connection = new Connection(CLUSTER);

export const getWalletBalance = async (walletAddress: PublicKey) => {
  console.log(clusterApiUrl("devnet"));
  const bal = await connection.getBalance(walletAddress);
  console.log(bal);
  return bal;
};

//airdrop logic
