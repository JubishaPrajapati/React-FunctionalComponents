import useFetchCustom from "./fetchCustom";

interface Post {
    id: number;
    title: string;
    body: string;
}

const FetchCustomComp: React.FC = () => {
    const { data, error, loading } = useFetchCustom<Post[]>('https://jsonplaceholder.typicode.com/posts');

    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <div>
            <h3>Fetching data using custom hook:</h3>
            <ul>
                {data?.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>

    )
}
export default FetchCustomComp;