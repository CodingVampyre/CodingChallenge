"use client";
import useRemoteQuery from "@/hooks/use-remote-query/UseRemoteQuery.hook";

export interface FetchUserResponse {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            long: string;
        }
    }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

/**
 * adapter function to fetch users by id
 * @param userId
 * @constructor
 */
export default function UseRemoteFetchUser(userId: number) {
    return useRemoteQuery<FetchUserResponse>(["users", userId], `users/${userId}`);
}