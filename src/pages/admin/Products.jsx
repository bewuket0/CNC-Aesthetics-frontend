import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableOfContents } from "lucide-react";

const DashProducts = () => {
  return (
    <div className="mx-auto w-5/6">
      Products
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger className="" asChild>
            <Button
              className="bg-sky-700 text-white hover:bg-sky-800"
              // variant="outline"
            >
              Create Product
            </Button>
          </DialogTrigger>
          <DialogContent className="p-10 sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create Product</DialogTitle>
              <DialogDescription>
                create a Product with image{" "}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Product Image</Label>
                <Input id="picture" type="file" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="price">Product Price</Label>
                <Input id="price" type="number" />
              </div>
            </div>
            <DialogFooter>
              {/* <Button variant="outline">Cancel</Button> */}
              <Button className="bg-sky-700 hover:bg-sky-800" type="submit">
                Add Product
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="my-10">
        <Table>
          <TableCaption>A list of your recent Products</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Product Code</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Product Price</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Updated Date</TableHead>
              <TableHead>Status</TableHead>
              {/* <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead> */}
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>2156589602</TableCell>
              <TableCell>Crafted</TableCell>
              <TableCell>89.9</TableCell>
              <TableCell>December 14th 2024</TableCell>
              <TableCell>December 14th 2024</TableCell>
              <TableCell>Active</TableCell>
              {/* <TableCell>Credit Card</TableCell> */}
              {/* <TableCell>$89.99</TableCell> */}
              <TableCell className="text-right">
                <Button variant="icon">
                  <TableOfContents size={18} />{" "}
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DashProducts;
