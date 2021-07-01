import Image from "next/image";

function SidebarRow({src, Icon, title}) {
    return (
        <div className="flex p-3 cursor-pointer">
            {src && (
                <Image
                    className="rounded-full"
                    src={src}
                    width={30}
                    height={30}
                    layout="fixed"
                />
            )}
            {Icon && (
                <Icon className="h-8 w-8 text-blue-500"/>
            )}
            <p className="hidden sm:inline-flex font-medium ml-2 items-center">{title}</p>
        </div>
    )
}

export default SidebarRow
