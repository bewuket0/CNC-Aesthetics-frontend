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

// export function DialogDemo() {
//   return (

//   )
// }

const Categories = () => {
  return (
    <div className="mx-auto w-5/6">
      Categories
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger className="" asChild>
            <Button
              className="bg-sky-700 text-white hover:bg-sky-800"
              // variant="outline"
            >
              Create Category
            </Button>
          </DialogTrigger>
          <DialogContent className="p-10 sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create Category</DialogTitle>
              <DialogDescription>
                create a category with image{" "}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Category Name</Label>
                <Input id="name" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Category Image</Label>
                <Input id="picture" type="file" />
              </div>
            </div>
            <DialogFooter>
              {/* <Button variant="outline">Cancel</Button> */}
              <Button type="submit">Add Category</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="my-10">
        <Table>
          <TableCaption>A list of your recent categories</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Category Code</TableHead>
              <TableHead>Category Name</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Updated Date</TableHead>
              {/* <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead> */}
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>2156589602</TableCell>
              <TableCell>Crafted</TableCell>
              <TableCell>December 14th 2024</TableCell>
              <TableCell>December 14th 2024</TableCell>
              {/* <TableCell>Credit Card</TableCell> */}
              {/* <TableCell>$89.99</TableCell> */}
              <TableCell className="text-right">
                <Button variant="icon">
                  <TableOfContents size={18} />{" "}
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2156589602</TableCell>
              <TableCell>Crafted</TableCell>
              <TableCell>December 14th 2024</TableCell>
              <TableCell>December 14th 2024</TableCell>
              {/* <TableCell>Credit Card</TableCell> */}
              {/* <TableCell>$89.99</TableCell> */}
              <TableCell className="text-right">
                {" "}
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

export default Categories;
