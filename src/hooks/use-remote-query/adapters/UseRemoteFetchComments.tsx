import useRemoteQuery from "@/hooks/use-remote-query/UseRemoteQuery.hook";

export type Comment = {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export type FetchCommentsResponse = Comment[];

/**
 * adapter function to remotely fetch comments by user id
 * @param userId
 * @constructor
 */
export default function UseRemoteFetchComments(userId: number) {
    return useRemoteQuery<FetchCommentsResponse>(["posts", "user", userId], "posts", {userId});
}