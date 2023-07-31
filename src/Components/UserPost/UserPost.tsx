import {FetchUserResponse} from "@/hooks/use-remote-query/adapters/UseRemoteFetchUser";
import {FetchCommentsResponse} from "@/hooks/use-remote-query/adapters/UseRemoteFetchComments";
import {UserComment} from "@/Components/UserPost/UserComment";
import UserInfo from "@/Components/UserPost/UserInfo";

interface Props {
    user: FetchUserResponse;
    comments: FetchCommentsResponse;
}

/**
 * A single user post containing information about a user and their comments
 * @param user user as expected from a remote
 * @param comments comments of a specific user as expected form a remote
 * @constructor
 */
export default function UserPost({user, comments}: Props) {
    return (
        <div className={"border border-solid rounded p-4"}>
            <UserInfo user={user} />

            <div>
                {comments.map(comment => (
                    <UserComment key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
}