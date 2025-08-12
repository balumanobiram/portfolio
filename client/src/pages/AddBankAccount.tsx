import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";

export function AddBankAccountForm() {
 const [bankname,setBankname]=useState("");
 const [accno,setAccNo] = useState("");
 const [uniquecode,setUniqueCode] = useState("");
 const [standingBal, setStandingBal] = useState<number>();
 const [username,setUsername] = useState("");
 useEffect(()=>{
    const user=localStorage.getItem("username");
    if(user){
        setUsername(user);
    }
 })
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/addbank", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({username, bankname,accno,uniquecode,standingBal })
      
    });
    if (res.status === 200) {
      alert("data added success");
    } else {
      const data = await res.json();
      alert("Invalid credentials");
    }
    
  };

  return (
    <div className="flex justify-center pt-[50px]">
        <div className="w-[50%]">
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col gap-6">
        <div className="grid gap-2">
            <Label htmlFor="text">Bank Name</Label>
            <Input
            id="bankname"
            type="text"
            placeholder="eg. Axis Bank"
            onChange={e => setBankname(e.target.value)}
            required />
        </div>
        <div className="grid gap-2">
            <Label htmlFor="text">Account Number</Label>
            <Input
            id="accno"
            type="text"
            placeholder="Last four digits eg. x1234"
            onChange={e => setAccNo(e.target.value)}
            required />
        </div>
        <div className="grid gap-2">
            <Label htmlFor="text">Unique Code</Label>
            <Input
            id="uniqcode"
            type="text"
            placeholder="Unique Code eg. AXISx1234"
            onChange={e => setUniqueCode(e.target.value)}
            required />
        </div>
        <div className="grid gap-2">
            <Label htmlFor="number">Standing Balance</Label>
            <Input
            id="standingbal"
            type="number"
            placeholder="Standing Balance "
            onChange={e => setStandingBal(Number(e.target.value))}
            required />
        </div>
        <Button type="submit" className="w-full">
                  Submit
        </Button>
    </div>
    </form>
    </div>
    </div>
  )
}
