import { 
    Select, 
    SelectContent, 
    SelectGroup, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddSupplyMutation } from "@/redux/api/api";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";

const AddSupply = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [addSupply] = useAddSupplyMutation();

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        const supplyDetails = {
            title,
            category,
            image,
            description,
            amount,
        };

        addSupply(supplyDetails);
        navigate("/dashboard/supplies");
    };

    return (
        <>
            <div className="mt-8 lg:mt-20 flex justify-center">
                <form onSubmit={onSubmit} className="w-full lg:w-3/5 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <Label htmlFor="title" className="w-1/4">Title</Label>
                        <Input
                            onBlur={(e) => setTitle(e.target.value)}
                            id="title"
                            className="w-full lg:w-3/4"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <Label htmlFor="category" className="w-1/4">Category</Label>
                        <Select onValueChange={(value) => setCategory(value)}>
                            <SelectTrigger className="w-full lg:w-3/4">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="medical supply">Medical Supply</SelectItem>
                                    <SelectItem value="first aid kit">First Aid Kit</SelectItem>
                                    <SelectItem value="medication">Medication</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center gap-4">
                        <Label htmlFor="image" className="w-1/4">Image</Label>
                        <Input
                            onBlur={(e) => setImage(e.target.value)}
                            id="image"
                            className="w-full lg:w-3/4"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <Label htmlFor="amount" className="w-1/4">Amount</Label>
                        <Input
                            onBlur={(e) => setAmount(parseInt(e.target.value))}
                            id="amount"
                            className="w-full lg:w-3/4"
                            type="number"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <Label htmlFor="description" className="w-1/4">Description</Label>
                        <Textarea 
                            onBlur={(e) => setDescription(e.target.value)}
                            id="description" 
                            className="w-full lg:w-3/4 h-32 lg:h-48" 
                        />
                    </div>
                    <div className="flex justify-end">
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddSupply;
