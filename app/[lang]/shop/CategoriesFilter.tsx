"use client";
import React, { InputHTMLAttributes, use, useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Category } from "@/types";
import axios  from "axios"

async function getCategories() {
  try {
    const res = await axios.get(`http://127.0.0.1:8000/api/categories`);
    return res.data.categories;
  } catch (error) {
    throw new Error("Failed to fetch");
  }
}

const categoriesPromise = getCategories();

const CategoriesFilter = () => {
  const categories: Category[] = use(categoriesPromise);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  let [categoriesFilter, setCategoriesFilter] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let items: string[] = categoriesFilter;
    let item = items.find((item) => item === e.target.value);
    if (item) {
      items = categoriesFilter.filter((item) => item !== e.target.value);
    } else {
      items = [...categoriesFilter, e.target.value];
    }
    setCategoriesFilter(items);

    router.replace(
      `${pathname}?${createQueryString("categories", items.join(","))}`,
      { scroll: false }
    );
  };
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
    <div className="mt-5 pr-3 border-b border-black py-5">
      <div className="flex items-center justify-between">
        <h5 className="text-primary font-bold">Category</h5>
        <p>{categoriesFilter.length} Selected</p>
      </div>
      <div className="mt-5 lg:block flex justify-around">
        {categories.map((category) => (
          <div
            className="flex items-center lg:justify-start justify-around mb-2"
            key={category.id}
          >
            <input
              id={category.id}
              value={category.id}
              checked={
                categoriesFilter.includes(category.id.toString()) ? true : false
              }
              type="checkbox"
              className="w-4 h-4 focus:ring-0 focus:shadow-none accent-main-color checked:text-main-color lg:block hidden"
              onChange={handleChange}
            />
            <label
              htmlFor={category.id}
              className=" ml-2 text-sm font-semibold lg:block hidden"
            >
              {category.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesFilter;