"use client"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; 
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";


type Type={
  onUserSelect:(fieldName:string,fieldValue:string)=>void;
}
function SelectTopic({onUserSelect}:Type) {
  const [item,setitem]=useState('')
  const options = [
    "Custom Prompt",
    "Random Ai Story",
    "Scary Story",
    "Historical Fact",
    "Bed Time Story",
    "Fun Facts",
  ];

  return (
    <div className="shadow-md p-10 px-10 rounded-xl bg-white space-y-4">
      <div className="text-purple-700 font-semibold text-2xl">Content</div>
      <div className="text-gray-500 text-sm">What is the topic of your video?</div>

      <Select  onValueChange={(value)=>{
        setitem(value);
        value!='Custom Prompt'&&onUserSelect('topic',value)
      }}>
        <SelectTrigger className="w-full text-lg focus-visible:ring-1 focus-visible:ring-fuchsia-600">
          <SelectValue placeholder="Select content type" />
        </SelectTrigger>
        <SelectContent>
          {options.map((item, idx) => (
            <SelectItem key={idx} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {
        (item==='Custom Prompt')&&<Textarea onChange={(e)=>onUserSelect('item',e.target.value)}
        className="p-3 min-h-[80px]  focus-visible:ring-2 focus-visible:ring-purple-500"
        placeholder="Write what type of content you want to create..."
      />
      }
    </div>
  );
}

export default SelectTopic;
