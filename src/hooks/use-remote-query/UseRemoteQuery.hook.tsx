"use client";
import {QueryKey, useQuery} from "@tanstack/react-query";

export default function useRemoteQuery<Response>(queryKey: QueryKey, route: string, params?: {[key: string]: string | number}) {
    const url = process.env.NEXT_PUBLIC_PLACEHOLDER_API_URL;

    return useQuery<unknown, unknown, Response>({
        queryKey,
        queryFn: async () => {
            const requestUrl = new URL(`${url}/${route}`);
            requestUrl.search = new URLSearchParams(params).toString();
            const result = await fetch(requestUrl);
            if (result.ok) {
                return result.json();
            }
            if (!result.ok) {
                throw new Error("No Matching Data")
            }
        },
        refetchOnWindowFocus: false
    });
}