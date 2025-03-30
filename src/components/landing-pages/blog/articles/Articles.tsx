import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Article from "./Article"
import ArticlePagination from "./pagination"

export default function Articles() {
  return (
    <div className="space-y-16 bg-white px-40">
      <Tabs className="space-y-[88px]" defaultValue="trending">
        <div className="flex items-center justify-center">
          <TabsList className="bg-transparent px-20 py-6">
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="crypto-and-blockchain">
              Crypto and Blockchain
            </TabsTrigger>
            <TabsTrigger value="investments">Investments</TabsTrigger>
            <TabsTrigger value="market">Market</TabsTrigger>
            <TabsTrigger value="web3">Web3</TabsTrigger>
            <TabsTrigger value="press-release">Press Release</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="trending">
          <Article />
        </TabsContent>
        <TabsContent value="crypto-and-blockchain">
          <Article />
        </TabsContent>
        <TabsContent value="investments">
          <Article />
        </TabsContent>
        <TabsContent value="market">
          <Article />
        </TabsContent>
        <TabsContent value="web3">
          <Article />
        </TabsContent>
        <TabsContent value="press-release">
          <Article />
        </TabsContent>
      </Tabs>

      <ArticlePagination />
    </div>
  )
}
