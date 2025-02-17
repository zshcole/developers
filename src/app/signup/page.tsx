'use client';

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }   

    return (
        <div className="max-w-md mx-auto px-4 py-12">
            <Card className="w-full max-w-sm mx-auto">
            <CardHeader>
            <div className="text-center mb-8">
                <CardTitle className="text-2xl font-light">SIGNUP</CardTitle>
                <p className="text-gray-600">Join the developers community</p>
            </div>
            </CardHeader>
            <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <div>
                        <Input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:ring-0 text-sm"/>
                    </div>
                    <div>
                        <Input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:ring-0 text-sm"/>
                    </div>
                    <Button type="submit" className="w-full py-3 text-sm">Sign Up</Button>

                    <div className="text-center">
                        <div>
                            Already have an account?
                            <Button asChild variant={'link'}>
                                <Link href="/signin" className="text-black hover:underline">Sign In
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </form>

            <div className="mt-8 pt-8 border-t text-center">
                <p className="text-xs text-gray-500 mb-4">OR CONTINUE WITH</p>
                <div className="space-y-3">
                    <Button variant={'secondary'} className="w-full py-3 text-sm">
                        Continue with Google
                    </Button>
                    <Button variant={'secondary'} className="w-full py-3 text-sm">
                        Continue with Github
                    </Button>
                </div>
            </div>
            </CardContent>
            </Card>
        </div>
    );
}