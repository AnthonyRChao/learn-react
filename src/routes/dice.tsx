import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/dice')({
  component: RouteComponent,
})

function RouteComponent() {

    const [number, setNumber] = useState<number | undefined>()

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {number !== undefined && <Dice number={number} />}        

            <button 
                className="bg-blue-500 text-white p-2 rounded m-8"
                onClick={() => {
                    const randomNumber = Math.floor(Math.random() * 6) + 1
                    setNumber(randomNumber)
                }}
            >
                Roll
            </button>
        </div>
    )

    function Dice({ number }: { number: number }) {
        return (
            <div className="bg-gray-500 rounded p-4 size-24 text-black flex items-center justify-center gap-4">
                {number === 1 && <p className="bg-black rounded-full size-5"></p>}
                {number === 2 && 
                    <>
                        <p className="bg-black rounded-full size-5"></p>
                        <p className="bg-black rounded-full size-5"></p>
                    </>
                }
                {number === 3 && 
                    <>
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex items-center justify-start"><p className="bg-black rounded-full size-5"></p></div>
                            <div className="flex items-center justify-center"><p className="bg-black rounded-full size-5"></p></div>
                            <div className="flex items-center justify-end"><p className="bg-black rounded-full size-5"></p></div>
                        </div>
                    </>
                }
                {number === 4 &&
                    <>
                        <div className="flex w-full gap-4">
                            <div className="flex flex-col w-full gap-4">
                                <div className="flex items-center justify-center"><p className="bg-black rounded-full size-5"></p></div>
                                <div className="flex items-center justify-center"><p className="bg-black rounded-full size-5"></p></div>
                            </div>
                            <div className="flex flex-col w-full gap-4">
                                <div className="flex items-center justify-center"><p className="bg-black rounded-full size-5"></p></div>
                                <div className="flex items-center justify-center"><p className="bg-black rounded-full size-5"></p></div>
                            </div>
                        </div>
                    </>
                }
                {number === 5 && 
                    <>
                        <div className="flex flex-col w-full gap-1">
                            <div className="flex justify-center w-full gap-6">
                                <p className="bg-black rounded-full size-5"></p>
                                <p className="bg-black rounded-full size-5"></p>
                            </div>
                            <div className="flex justify-center w-full">
                                <p className="bg-black rounded-full size-5"></p>
                            </div>
                            <div className="flex justify-center w-full gap-6">
                                <p className="bg-black rounded-full size-5"></p>
                                <p className="bg-black rounded-full size-5"></p>
                            </div>
                        </div>
                    </>
                }
                {number === 6 && 
                    <>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-center w-full gap-2">
                            <p className="bg-black rounded-full size-5"></p>
                            <p className="bg-black rounded-full size-5"></p>
                            <p className="bg-black rounded-full size-5"></p>
                        </div>
                        <div className="flex justify-center w-full gap-2">
                            <p className="bg-black rounded-full size-5"></p>
                            <p className="bg-black rounded-full size-5"></p>
                            <p className="bg-black rounded-full size-5"></p>
                        </div>
                    </div>
                </>
                }
            </div>
        )
    }



}
