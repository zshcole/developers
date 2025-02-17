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
      <div className="max-w-md mx-auto px-4 py-12">
      <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
      <div className="text-center mb-8">
          <CardTitle className="text-2xl font-light">LOGIN</CardTitle>
          <p className="text-gray-600">Welcome back to developers.com</p>
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
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button type="submit" className="w-full py-3 text-sm">Sign In</Button>
              
              <div className="text-center">
                  <div>

                      <Button asChild variant={'link'}>
                          <Link href="/password-reset" className="text-black hover:underline">
                          Forgot your password?
                          </Link>
                      </Button>
                  </div>
                  <div>
                    Dont have an account? {" "}
                    <Button asChild variant={'link'}>
                        <Link href="/signup" className="text-black hover:underline">Sign Up
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