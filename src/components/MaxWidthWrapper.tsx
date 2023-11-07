import { cn } from "@/lib/util";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
	className?: string;
	children: ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
	return (
		<div
			className={cn("mx-auto w-full max-w-screen-x px-2.5 md:px-20", className)}
		>
			{children}
		</div>
	);
};

export default MaxWidthWrapper;
