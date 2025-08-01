"use client"

import {Select,SelectTrigger,SelectContent,SelectValue,SelectItem} from "@/components/ui/select"; 
import { useState } from "react";

type Type={
   onUserSelect:(fieldName:string,fieldValue:string)=>void
}
function SelectDuration({onUserSelect}:Type) {
  return (
    <div className="mt-5 py-5">
      <Select onValueChange={(value)=> onUserSelect('duration',value)}>
       <SelectTrigger className="w-full text-lg focus-visible:ring-1 focus-visible:ring-fuchsia-600">
          <SelectValue placeholder="Select Duration" />
        </SelectTrigger>
        <SelectContent position="popper">
            <SelectItem value="15 second">15 Second</SelectItem>
            <SelectItem value="30 second">30 Second</SelectItem>
            <SelectItem value="45 second">45 Second</SelectItem>
            <SelectItem value="60 second">60 Second</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectDuration
