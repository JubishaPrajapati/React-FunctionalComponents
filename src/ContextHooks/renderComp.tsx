import { Profile, SideProfile } from "./consumingComps";

interface renderCompsProps {

}

export default function RenderComps({ }: renderCompsProps) {
    return (
        <div>
            <Profile />
            <SideProfile />
        </div>
    )
}