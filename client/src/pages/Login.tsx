import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    if (res.status === 200) {
      navigate("/dashboard");
    } else {
      const data = await res.json();
      alert(data.message);
    }
    
  };

  return (

    <div className="flex items-center justify-center min-h-screen"><Card className="w-full max-w-sm">
          <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                  Enter your username below to login to your account
              </CardDescription>
              <CardAction>
                  <Button variant="link">Sign Up</Button>
              </CardAction>
          </CardHeader>
          <form onSubmit={handleLogin}>
          <CardContent>
              
                  <div className="flex flex-col gap-6">
                      <div className="grid gap-2">
                          <Label htmlFor="text">Username</Label>
                          <Input
                              id="username"
                              type="text"
                              placeholder="Username"
                              onChange={e => setUsername(e.target.value)}
                              required />
                      </div>
                      <div className="grid gap-2">
                          <div className="flex items-center">
                              <Label htmlFor="password">Password</Label>
                              
                          </div>
                          <Input id="password" type="password" onChange={e => setPassword(e.target.value)} required />
                      </div>
                  </div>
                  <br></br>
              <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                  Login
              </Button>
          </CardFooter>
          </CardContent>
          
          </form>
      </Card>
      </div>
  );
}
