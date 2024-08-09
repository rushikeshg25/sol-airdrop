import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Balance from "./Balance";
import Airdrop from "./Airdrop";

const Wrapper = () => {
  return (
    <Card className='py-5'>
      {/* <CardTitle className='flex items-center justify-center p-5'>
        <div className='text-xl'>Airdrop</div>
      </CardTitle> */}
      <CardContent>
        <Tabs defaultValue='balance' className='w-full md:w-[500px]'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='balance'>Balance</TabsTrigger>
            <TabsTrigger value='airdrop'>Airdrop</TabsTrigger>
            {/* <TabsTrigger value="transfer">Transfer</TabsTrigger> */}
          </TabsList>
          <TabsContent value='balance'>
            <Balance />
          </TabsContent>
          <TabsContent value='airdrop'>
            <Airdrop />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Wrapper;
