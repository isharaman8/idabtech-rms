import { useState } from "react";
import { useFormContext } from "react-hook-form";
import {
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Upload } from "lucide-react";

export function ImageUploader({
	name,
	label,
}: {
	name: string;
	label: string;
}) {
	const { setValue, watch } = useFormContext();
	const [preview, setPreview] = useState<string | null>(null);
	const file = watch(name);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const uploadedFile = e.target.files?.[0];
		if (uploadedFile) {
			setValue(name, uploadedFile);
			setPreview(URL.createObjectURL(uploadedFile));
		}
	};

	return (
		<FormItem className="w-full">
			<FormLabel>{label}</FormLabel>
			<FormControl>
				<div className="relative w-full border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer">
					{preview ? (
						<img
							src={preview}
							alt="Preview"
							className="w-full h-40 object-cover rounded-lg"
						/>
					) : (
						<>
							<Upload className="w-8 h-8 text-gray-400 mb-2" />
							<p className="text-gray-500 text-sm">
								Drag and drop a file here or click to browse
							</p>
						</>
					)}
					<input
						type="file"
						className="absolute inset-0 opacity-0 cursor-pointer"
						onChange={handleFileChange}
						accept="image/*"
					/>
				</div>
			</FormControl>
			<FormMessage />
		</FormItem>
	);
}
