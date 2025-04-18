import React, { useState } from "react";
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
import {
  TableOfContents,
  Fullscreen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

const base_url = import.meta.env.VITE_BASE_URL;

const fetchCateogries = async (page) => {
  console.log("base url ==> ", base_url);
  console.log("page ==> ", page);

  return axios.get(`${base_url}/category/all?limit=12&page=${page}`);
};

const createCategory = (payload) => {
  const create_category_url = `${base_url}/category/create`;
  return axios.post(create_category_url, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const Categories = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);

  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCateogries(page),
    staleTime: 30000,
  });

  const { mutate } = useMutation({
    mutationFn: createCategory,
    onSuccess: (newData) => {
      refetch();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // mutate({ name, category_image: image });
    console.log("file", file);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category_image", file);

    console.log("formData", formData);

    mutate(formData);
    setImage("");
    setName("");
  };

  const nextpage = () => {
    console.log("page ", page);

    setPage((nextpage) => nextpage + 1);

    console.log("page ", page);
    refetch();
  };
  const prevpage = () => {
    console.log("page ", page);

    setPage((prevpage) => prevpage - 1);

    console.log("page ", page);
    refetch();
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const categories_list = data?.data?.data;
  console.log("data ---> ", categories_list);
  let filename = file ? file.name.split(".")[0] : "";
  // let file_name_fetched = filename.split(".")[0];
  console.log("file name === ", filename.toString());
  console.log("file name === ", filename.split(".")[0]);

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
                <Input
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Category Image</Label>
                <Input
                  id="picture"
                  type="file"
                  // onChange={(e) => setImage(e.target.value)}
                  onChange={(e) => setFile(e.target.files[0])}
                  // value={file}
                />
                {/* <input type="file" onChange={(e) => setFile(e.target.files[0])} /> */}
              </div>
            </div>
            <DialogFooter>
              {/* <Button variant="outline">Cancel</Button> */}
              <Button onClick={handleSubmit} type="submit">
                Add Category
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="my-10">
        <Table>
          {/* <TableCaption>A list of your recent categories</TableCaption> */}
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
            {categories_list.docs.map((category) => (
              <TableRow key={category.category_code}>
                <TableCell>{category.category_code}</TableCell>
                <TableCell>{category.category_name}</TableCell>
                <TableCell>{category.created_at}</TableCell>
                <TableCell>{category.updated_at}</TableCell>
                <TableCell className="text-right">
                  <Button variant="icon">
                    <Fullscreen size={18} />{" "}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mx-auto mt-5 w-fit space-x-2">
        <Button
          variant="outline"
          size="icon"
          disabled={!categories_list.hasPrevPage}
          onClick={() => prevpage()}
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => nextpage()}
          disabled={!categories_list.hasNextPage}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Categories;
