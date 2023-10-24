import React from "react"
import { FaPaperPlane } from "react-icons/fa"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

export default function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            className="group flex items-center self-center justify-center w-[7rem] gap-2 py-[0.7rem] sm:py-[0.9rem] text-orange-400 bg-black bg-opacity-40 rounded-full focus:scale-110 hover:scale-110 hover:bg-zinc-900 hover:bg-opacity-80 active:scale-105 duration-custom ease-customBezier hover:translate-y-[-4px] disabled:scale-100 disabled:bg-opacity-65"
            type="submit"
            disabled={pending}
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-orange-400"></div>
            ) : (
                <>
                    Submit <FaPaperPlane className="text-sm opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                </>
            )}
        </button>
    )
}