import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; 

function SelectTopic() {
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

      <Select>
        <SelectTrigger className="w-full text-lg outline-none">
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
    </div>
  );
}

export default SelectTopic;
