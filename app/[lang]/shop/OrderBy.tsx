import React, { useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const OrderBy = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value.length > 0) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams]
  );

  return (
    <Select
      onValueChange={(e) => {
        router.replace(`${pathname}?${createQueryString("orderBy", e)}`, {
          scroll: false,
        });
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Classer par" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Classer par</SelectLabel>
          <SelectItem value="asc"> Du - cher au + cher </SelectItem>
          <SelectItem value="desc"> Du + cher au - cher </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default OrderBy;