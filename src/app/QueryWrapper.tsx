"use client";
import {QueryClientProvider} from "@tanstack/react-query";
import {PropsWithChildren} from "react";
import {QueryClient} from "@tanstack/query-core";

const queryClient = new QueryClient();

export default function QueryWrapper({children}: PropsWithChildren) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}