import { intialDevelopers } from '@/data';

type DeveloperPageProps = {
    params: Promise<{ id: string }>;
}

export default async function DeveloperPage({ params }: DeveloperPageProps) {
    const { id } = await params;

    const user = intialDevelopers.find((developer) => developer.id === id);

    if (!user) { return <div>Developer not found</div>}

    return (
        <div>
            <h1 className="text-lg">Developer {id}</h1>
            <h2 className="text-lg">{user.name}</h2>
            <p className="text-sm">{user.description}</p>
        </div>
    );
}

