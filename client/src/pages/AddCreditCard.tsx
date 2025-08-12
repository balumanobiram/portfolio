import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { useEffect, useState } from "react"
import { ChevronDownIcon } from "lucide-react"

export default function AddCreditCardForm() {
  const [bankname, setBankname] = useState("")
  const [category, setCategory] = useState("")
  const [billingDateOpen, setBillingDateOpen] = useState(false)
  const [billingDate, setBillingDate] = useState<Date>()
  const [dueDateopen, setDueDateOpen] = useState(false)
  const [dueDate, setDueDate] = useState<Date>()
  const [limit, setLimit] = useState<number>()
  const [outstandingAmount, setOutstandingAmount] = useState<number>()
  const [cardNumber, setCardNumber] = useState("")
  const [uniqueCode, setUniqueCode] = useState("")
  const [username, setUsername] = useState("")

  useEffect(() => {
    const user = localStorage.getItem("username")
    if (user) {
      setUsername(user)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("http://localhost:5000/addcreditcard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        username,
        bankname,
        category,
        billingDate,
        dueDate,
        limit,
        outstandingAmount,
        cardNumber,
        uniqueCode,
      }),
    })

    if (res.status === 200) {
      alert("Credit card details added successfully")
    } else {
      const data = await res.json()
      alert(data.message || "Error adding credit card")
    }
  }

  return (
    <div className="flex justify-center pt-[50px]">
        <div className="w-[50%]">
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="bankname">Bank Name</Label>
          <Input
            id="bankname"
            type="text"
            placeholder="e.g. Axis Bank"
            onChange={(e) => setBankname(e.target.value)}
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            type="text"
            placeholder="e.g. Sapphiro, MyZone"
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cardNumber">Credit Card Number</Label>
          <Input
            id="cardNumber"
            type="text"
            placeholder="e.g. 1234 5678 9012 3456"
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="uniqueCode">Unique Code</Label>
          <Input
            id="uniqueCode"
            type="text"
            placeholder="e.g. AXISx1234"
            onChange={(e) => setUniqueCode(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-6">
  {/* Billing Date */}
  <div className="grid gap-2">
    <Label htmlFor="billing-date" className="px-1">
      Billing Date
    </Label>
    <Popover open={billingDateOpen} onOpenChange={setBillingDateOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id="billing-date"
          className="w-48 justify-between font-normal"
        >
          {billingDate ? billingDate.toLocaleDateString() : "Select date"}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={billingDate}
          captionLayout="dropdown"
          onSelect={(date) => {
            setBillingDate(date);
            setBillingDateOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  </div>

  {/* Due Date */}
  <div className="grid gap-2">
    <Label htmlFor="due-date" className="px-1">
      Due Date
    </Label>
    <Popover open={dueDateopen} onOpenChange={setDueDateOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id="due-date"
          className="w-48 justify-between font-normal"
        >
          {dueDate ? dueDate.toLocaleDateString() : "Select date"}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={dueDate}
          captionLayout="dropdown"
          onSelect={(date) => {
            setDueDate(date);
            setDueDateOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  </div>
</div>


        <div className="grid gap-2">
          <Label htmlFor="limit">Limit</Label>
          <Input
            id="limit"
            type="number"
            placeholder="Card Limit"
            onChange={(e) => setLimit(Number(e.target.value))}
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="outstandingAmount">Outstanding Amount</Label>
          <Input
            id="outstandingAmount"
            type="number"
            placeholder="Outstanding Amount"
            onChange={(e) => setOutstandingAmount(Number(e.target.value))}
            required
          />
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
