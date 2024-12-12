import { useUserContext } from "./createContext";

interface ProfileProps {

}
interface SideProfileProps {

}

export function SideProfile({ }: SideProfileProps) {
    const user = useUserContext();
    console.log(user)

    return (
        <div>
            <h3>I am from sideProfile function</h3>
            <p>Subscription status: {user.isSub.toString()}</p>
        </div>
    )
}

export function Profile({ }: ProfileProps) {
    const user = useUserContext();

    return (
        <div>
            <h3>I am from profile function</h3>
            <p>Name: {user.name}</p>
            <p>Age:{user.age}</p>
        </div>
    )
}