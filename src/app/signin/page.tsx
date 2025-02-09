'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent,CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/profile');
        setError('');
      };
    
    return (
        <div className="min-h-[calc(100vh-4rem)] grid place-items-center bg-gray-50">
        <Card className="w-[90%] max-w-sm mx-auto">
          <CardHeader className="space-y-1 text-center pb-4">
            <CardTitle className="text-2xl font-light">LOGIN</CardTitle>
            <p className="text-sm text-gray-600">Welcome back to developers.com</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
  
              <div className="space-y-3 pt-2">
                <Button 
                  type="submit" 
                  className="w-full bg-black hover:bg-gray-900 text-white transition-colors"
                >
                  LOG IN
                </Button>
                <div className="text-center text-sm">
                  <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <div>
                    <p className="text-center text-gray-600">Don't have an account?
                        <Link href="/signup" className="text-black hover:underline"> Sign up</Link>
                    </p>
                </div>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t text-center">
              <p className="text-xs text-gray-500 mb-4">OR CONTINUE WITH</p>
              <div className="space-y-3">
                <Button variant={"secondary"} className="w-full border border-gray-300 hover:bg-gray-50 text-black transition-colors">
                  GITHUB
                </Button>
                <Button variant={"secondary"} className="w-full bg-red-500 hover:bg-red-600 text-white transition-colors">
                  GOOGLE
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
}