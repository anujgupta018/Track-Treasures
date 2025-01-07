import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { TransactionType } from "@/lib/Types";
import { Category } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

interface Props {
  type: TransactionType;
}

function CategoryPicker({ type }: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const categoriesQuery = useQuery({
    queryKey: ["categories", type],
    queryFn: () =>
      fetch(`/api/categories?type=${type}`).then((res) => res.json()),
  });
  const selectedCategory = categoriesQuery.data?.find(
    (category: Category) => category.name === value
  );
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        ></Button>
      </PopoverTrigger>
    </Popover>
  );
}

export default CategoryPicker;
