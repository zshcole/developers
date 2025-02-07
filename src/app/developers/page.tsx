import Link from 'next/link';
import { intialDevelopers } from '@/data';
import { developerPath } from '@/path';

export default function Page() {
    return (
        <div>
            <h1>Developers</h1>
            <p>Here you will find information for developers.</p>
            {intialDevelopers.map((developer) => (
                <div key={developer.id}>
                    <h2 className='text-lg'>{developer.name}</h2>
                    <p className='text-sm'>{developer.description}</p>
                    <Link href={developerPath(developer.id)}>View</Link>
                </div>
            ))}
        </div>
    )
}