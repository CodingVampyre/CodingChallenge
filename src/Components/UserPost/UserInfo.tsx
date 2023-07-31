import {FetchUserResponse} from "@/hooks/use-remote-query/adapters/UseRemoteFetchUser";

interface Props {
    user: FetchUserResponse;
}
export default function UserInfo({user}: Props) {
    return (
        <div className={"flex flex-row justify-around content-center"}>
            <div className={"flex flex-col justify-center"}>
                <p className={"text-lg"}>{user.username} ({user.name})</p>
                <p className={"text-sm"}>Working @ {user.company.name}</p>
            </div>

            <div className={"flex flex-col gap-2"}>
                <p><span className={"font-bold"}>Mail:</span> {user.email}</p>
                <div>
                    <p className={"font-bold"}>Address:</p>
                    <p>{user.address.street} {user.address.suite}</p>
                    <p>{user.address.zipcode} {user.address.city}</p>
                </div>
            </div>
        </div>
    );
}