"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { getWalletBalance } from "@/lib/logic";
import { PublicKey } from "@solana/web3.js";

const Balance = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  const balanceHandler = async () => {
    if (address) {
      const balance = await getWalletBalance(address as unknown as PublicKey);
      setBalance(balance as unknown as string);
    }
  };
  return (
    <div className='w-full justify-center items-center flex flex-col gap-5'>
      <Input
        placeholder='Enter Solana Address'
        className='mt-3'
        onChange={(e) => setAddress(e.target.value)}
      />
      <div className='flex flex-row gap-2 w-full'>
        <Button className='w-full' onClick={balanceHandler}>
          Get Balance
        </Button>
        <Button
          className='w-full'
          onClick={() => setAddress("")}
          variant='outline'
        >
          Clear
        </Button>
      </div>
      <div className='flex flex-row gap-2 w-full'>
        <p className='text-center'>{balance}</p>
      </div>
    </div>
  );
};

export default Balance;
