import {Comment} from "@/hooks/use-remote-query/adapters/UseRemoteFetchComments";

interface Props {
    comment: Comment;
}

export function UserComment({comment}: Props) {
    return (
        <div key={comment.id} className={"border rounded border-solid p-4 m-4"}>
            <h1 className={"font-bold pb-2"}>{comment.title}</h1>
            <p>{comment.body}</p>
        </div>
    );
}