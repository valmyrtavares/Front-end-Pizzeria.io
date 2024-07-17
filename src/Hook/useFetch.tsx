"use client";
import React from "react";
import { ParamsFetch } from "@/types/types";

export const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async ({ url, options }: ParamsFetch) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      setData(json);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};
