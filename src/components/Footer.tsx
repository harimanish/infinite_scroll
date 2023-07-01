import { Typography } from "@material-tailwind/react";

export default function Footer() {
    return (
        <div className="px-10">
            <hr className="my-8 border-blue-300" />
            <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
                <Typography color="blue-gray" className="font-normal">
                    Infinite Scroller
                </Typography>
            </footer>
        </div>
    );
}
