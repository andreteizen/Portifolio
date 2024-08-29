import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface NavbarItemsProps {
    icon: string | StaticImageData,
    title: string,
    proficiency: 'Experienced' | 'Intermediate' | 'Junior',
    invisible?: boolean,
}

export default function Cards({ icon, title, proficiency, invisible }: NavbarItemsProps) {
    return (
        <div className={twMerge("flex border px-4 py-4 border-primary-color rounded-xl bg-transparent w-fit h-fit justify-center items-center", invisible === true ? "invisible" : "")}>
            <Image src={icon} className="mr-4" width={50} height={50} alt={title} />
            <div className="flex flex-col w-fit h-14 justify-center">
                <h3 className="font-semibold w-[130px]">{title}</h3>
                <p>{proficiency}</p>
            </div>
        </div>
    )
}