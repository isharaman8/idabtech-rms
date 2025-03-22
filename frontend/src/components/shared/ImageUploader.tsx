import { useState, useEffect } from "react";
import { useController } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { UploadCloudIcon } from "lucide-react";

interface ImageUploaderProps {
	name: string;
	label?: string;
	control?: any;
	value?: File | null;
	onChange?: (file: File | null) => void;
}

export function ImageUploader({
	name,
	label,
	control,
	value,
	onChange,
}: ImageUploaderProps) {
	const { field } = control
		? useController({ name, control })
		: { field: { value, onChange } };

	const [preview, setPreview] = useState<string | null>(null);

	useEffect(() => {
		if (field.value instanceof File) {
			const objectUrl = URL.createObjectURL(field.value);
			setPreview(objectUrl);

			return () => URL.revokeObjectURL(objectUrl);
		} else {
			setPreview(null);
		}
	}, [field.value]);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			field.onChange?.(file);
		}
	};

	const handleRemove = () => {
		field.onChange?.(null);
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
					disabled
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
							<div className="text-gray-500 text-sm text-center">
								Drag and drop a file here or click to browse (DISABLED)
							</div>
						</>
					)}
				</label>
			</div>
			{preview && (
				<Button variant="outline" onClick={handleRemove} className="w-full">
					Remove
				</Button>
			)}
		</div>
	);
}
