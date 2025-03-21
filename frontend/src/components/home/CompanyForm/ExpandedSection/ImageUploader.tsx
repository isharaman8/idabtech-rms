import { useState } from "react";
import { useController } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { UploadCloudIcon } from "lucide-react";

export function ImageUploader({
	control,
	name,
	label,
}: {
	control: any;
	name: string;
	label?: string;
}) {
	const { field } = useController({ name, control });
	const [preview, setPreview] = useState<string | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			field.onChange(file);
			setPreview(URL.createObjectURL(file));
		}
	};

	return (
		<div className="space-y-2 size-full">
			{label && <label className="text-md font-semibold">{label}</label>}
			<div className="border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer w-full mt-2">
				<input
					type="file"
					accept="image/*"
					onChange={handleFileChange}
					className="hidden"
					id={name}
				/>
				<label
					htmlFor={name}
					className="cursor-pointer flex flex-col items-center"
				>
					{preview ? (
						<img
							src={preview}
							alt="Preview"
							className="max-w-40 object-cover rounded-md"
						/>
					) : (
						<>
							<UploadCloudIcon className="size-32 text-gray-300" />
							<div className="text-gray-500 text-sm">
								Drag and drop a file here or click to browse
							</div>
						</>
					)}
				</label>
			</div>
			{preview ? (
				<Button
					variant="outline"
					onClick={() => setPreview(null)}
					disabled={!preview}
				>
					Remove
				</Button>
			) : (
				<></>
			)}
		</div>
	);
}
