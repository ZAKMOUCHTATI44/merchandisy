"use client";
import React, { useState } from "react";
import { AxiosResponse } from "axios";
import { useInfiniteQuery, useQuery } from "react-query";
import emptyProduct from "@/public/empty.svg";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import api from "@/components/api";
import Loading from "@/components/Loading";
import OrderBy from "./OrderBy";
import { Product } from "@/types";
import ProductCard from "@/components/shop/ProductCard";
// import OrderBy from "@/components/products/OrderBy";

const ListProducts = () => {
  const searchParams = useSearchParams();

  const { ref, inView } = useInView();

  const buildQueryString = (): string => {
    let queryString = `/products`,
      name = searchParams.get("name"),
      categories = searchParams.get("categories"),
      prices = searchParams.get("prices"),
      orderBy = searchParams.get("orderBy");

    if (name != null) {
      queryString += `?name=${searchParams.get("name")}`;
    }

    if (categories != null) {
      queryString += `${
        queryString.includes("?") ? "&" : "?"
      }categories=${categories}`;
    }
    if (orderBy != null) {
      queryString += `${
        queryString.includes("?") ? "&" : "?"
      }orderBy=${orderBy}`;
    }

    if (prices != null) {
      let [minPrice, maxPrice] = prices.split("-");
      queryString += `${
        queryString.includes("?") ? "&" : "?"
      }minPrice=${minPrice}&maxPrice=${maxPrice}`;
    }

    return queryString;
  };

  const { error, isLoading, data } = useQuery([buildQueryString()], async () => {
    const response = await api.get(buildQueryString())

    return response.data.products
  })
  if (error) return <h1>Error</h1>


  return (
    <div>
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <span>Error: ERROR </span>
      ) : (
        <>
          {data && (
            <div className="lg:grid lg:grid-cols-4 flex flex-col gap-5 lg:gap-5 my-12 justify-center">
              <div className="col-span-4 flex justify-end">
                <OrderBy />
              </div>
              {data.map((product : Product) => (
                <>
                      <div key={product.id}>
                        <ProductCard product={product} />
                      </div>
               
                </>
              ))}
            </div>
          )}
        </>
      )}
    
    </div>
  );
};

export default ListProducts;