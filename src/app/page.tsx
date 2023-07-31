"use client";
import UseRemoteFetchUser from "@/hooks/use-remote-query/adapters/UseRemoteFetchUser";
import UseRemoteFetchComments from "@/hooks/use-remote-query/adapters/UseRemoteFetchComments";
import UserPost from "@/Components/UserPost/UserPost";
import {useState} from "react";

export default function Home() {
    const userId = 2;
    const [inputUserId, setInputUserId] = useState<number>(1);

    const {data: user, error: userError} = UseRemoteFetchUser(inputUserId);
    const {data: comments, error: commentsError} = UseRemoteFetchComments(inputUserId);

    return (
        <main className="flex flex-col items-center justify-between p-16">
            {/* could be fancier, but for now, it's enough */}
            <input className={"text-black p-4 mb-4"} type={"number"} value={inputUserId} onChange={event => {
                setInputUserId(+event.target.value);
            }}/>

            {user === undefined || comments === undefined && <p>Loading...</p>}
            {user !== undefined && comments !== undefined && <UserPost user={user} comments={comments} />}

            {/* Generic errors are sufficient here */}
            {userError && <p>There was an error fetching user data</p>}
            {commentsError && <p>There was an error fetching comments</p>}
        </main>
    )
}
