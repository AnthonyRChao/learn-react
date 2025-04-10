import { createFileRoute } from '@tanstack/react-router'
import { Scissors, BrickWall, Scroll, Skull, PartyPopper, Handshake } from 'lucide-react'
import { useState } from 'react'
export const Route = createFileRoute('/rock-paper-scissors')({
  component: RouteComponent,
})

type Weapon = 'rock' | 'paper' | 'scissors'
const weapons = ["rock", "paper", "scissors"] as const


function RouteComponent() {

    const [userChoice, setUserChoice] = useState<Weapon | null>(null)
    const [computerChoice, setComputerChoice] = useState<Weapon | null>(null)
    const [gameState, setGameState] = useState<"playing" | "done">("done")

    function handleUserChoice(weapon: Weapon) {
        setUserChoice(weapon)
        const randomIndex = Math.floor(Math.random() * weapons.length)
        const randomWeapon = weapons[randomIndex]
        setComputerChoice(randomWeapon)
        setGameState("done")
    }

    function getResult() {

        let message = <></>;
        if (userChoice === computerChoice) {
            message = (
                <>
                    <Handshake className="size-12" />
                    <p>It's a tie!</p>
                </>
            )
        }
        else if (
            (userChoice === "rock" && computerChoice === "scissors") || 
            (userChoice === "paper" && computerChoice === "rock") || 
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            message = (
                <>
                    <PartyPopper className="size-12" />
                    <p>You win!</p>
                </>
            )
        } else {
            message = (
                <>
                    <Skull className="size-12" /> 
                    <p>You lose!</p>
                </>
            )
        }
        return (
            <div className="flex flex-col items-center justify-center gap-8">
                {message}
            </div>
        )
    }

    function resetGame() {
        setUserChoice(null)
        setComputerChoice(null)
        setGameState("playing")
    }

    return (
        <div className="flex flex-col items-center justify-center gap-8 h-screen">    
            {gameState === "playing" ? ( 
                <>
                    <h1>Pick your weapon</h1>
                    <div className="flex items-center justify-center gap-8">
                        <button onClick={() => handleUserChoice('rock')} className="flex flex-col gap-4 justify-center items-center p-8 border border-gray-500 rounded bg-gray-900 h-80 w-80">
                            <BrickWall className="size-12" />
                            ROCK</button>
                        <button onClick={() => handleUserChoice('paper')} className="flex flex-col gap-4 justify-center items-center p-8 border border-gray-500 rounded bg-gray-900 h-80 w-80">
                            <Scroll className="size-12" />
                            PAPER</button>
                        <button onClick={() => handleUserChoice('scissors')} className="flex flex-col gap-4 justify-center items-center p-8 border border-gray-500 rounded bg-gray-900 h-80 w-80">
                            <Scissors className="size-12" />
                            SCISSORS
                            </button>
                    </div>
                </> 
            ) : ( 
                <>
                    <div className="flex flex-col items-center justify-center gap-8">
                        <p>You chose {userChoice}, Computer chose {computerChoice}</p> 
                        <p>{getResult()}</p>
                        <button className="bg-blue-500 text-white p-2 rounded" onClick={resetGame}>Play again</button>
                    </div>
                </>
            )}
        </div>
        )
    }
