'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent,TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getDevelopers } from '@/features/developers/queries/get';
import { Developer } from '@/features/developers/types';
import { developerPath } from '@/path';

// Mock image URLs - replace with actual dev profile images
const getProfileImage = () => `/api/placeholder/300/400`;

export default function DevelopersPage() {
    const [developers, setDevelopers] = useState<Developer[]>([]);
    const [filteredDevelopers, setFilteredDevelopers] = useState<Developer[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        const fetchDevelopers = async () => {
            const result = await getDevelopers();
            setDevelopers(result);
            setFilteredDevelopers(result);
        };
        fetchDevelopers();
    }, []);

    useEffect(() => {
        // Filter developers based on search query and active filter
        let filtered = developers;

        if (searchQuery) {
            filtered = filtered.filter(dev => 
                dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                dev.description?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (activeFilter !== 'all') {
            // Example filter: assume developers have a 'specialization' field
            // Adjust this based on your actual data model
            filtered = filtered.filter(dev => 
                dev.specialization === activeFilter
            );
        }

        setFilteredDevelopers(filtered);
    }, [searchQuery, activeFilter, developers]);

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            {/* Header Section */}
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Developers</h1>
                    <p className="text-gray-600 max-w-2xl">
                        Discover top talent in software development. Connect with experts in web development,
                        mobile apps, AI, and more.
                    </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <Input
                        type="text"
                        placeholder="Search developers..."
                        className="max-w-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Select onValueChange={setActiveFilter} defaultValue="all">
                        <SelectTrigger className="w-full sm:w-40">
                            <SelectValue placeholder="Filter by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Developers</SelectItem>
                            <SelectItem value="frontend">Frontend</SelectItem>
                            <SelectItem value="backend">Backend</SelectItem>
                            <SelectItem value="fullstack">Full Stack</SelectItem>
                            <SelectItem value="mobile">Mobile</SelectItem>
                            <SelectItem value="ai">AI/ML</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Filter Tabs */}
            <Tabs defaultValue="featured" className="mb-10">
                <TabsList className="mb-4">
                    <TabsTrigger value="featured">Featured</TabsTrigger>
                    <TabsTrigger value="trending">Trending</TabsTrigger>
                    <TabsTrigger value="newest">Newest</TabsTrigger>
                    <TabsTrigger value="top-rated">Top Rated</TabsTrigger>
                </TabsList>
                
                {/* We'll only implement the "featured" tab content for now */}
                <TabsContent value="featured" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredDevelopers.map((developer) => (
                            <Card key={developer.id} className="overflow-hidden group hover:shadow-md transition-shadow duration-300">
                                <Link href={developerPath(developer.id)} className="block">
                                    <div className="relative h-80 overflow-hidden">
                                        <Image
                                            src={getProfileImage()}
                                            alt={developer.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <CardContent className="pt-4">
                                        <h2 className="text-lg font-semibold">{developer.name}</h2>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {developer.specialization || 'Software Developer'}
                                        </p>
                                        <div className="mt-3 text-sm line-clamp-2 text-gray-600">
                                            {developer.description || 'Experienced developer with a passion for creating innovative solutions.'}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between pt-0">
                                        <div className="flex space-x-2">
                                            {/* Example skill tags - customize based on your data */}
                                            <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">React</span>
                                            <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Node.js</span>
                                        </div>
                                        <span className="text-sm text-gray-500">★ {developer.rating || '4.8'}</span>
                                    </CardFooter>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                {/* Placeholder for other tabs - implement similarly to "featured" */}
                <TabsContent value="trending"></TabsContent>
                <TabsContent value="newest"></TabsContent>
                <TabsContent value="top-rated"></TabsContent>
            </Tabs>

            {/* Pagination or Load More */}
            {filteredDevelopers.length > 0 && (
                <div className="flex justify-center mt-12">
                    <Button variant="outline">Load More</Button>
                </div>
            )}

            {/* No results message */}
            {filteredDevelopers.length === 0 && (
                <div className="text-center py-24">
                    <h3 className="text-lg font-medium mb-2">No developers found</h3>
                    <p className="text-gray-500">Try adjusting your search or filters</p>
                </div>
            )}
        </main>
    );
}