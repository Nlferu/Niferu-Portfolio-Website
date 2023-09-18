import body from "@/styles/main.module.css"
import Cursor from "@/components/cursor"
import Particle from "@/components/particles"
import Intro from "@/components/intro"

export default function Home() {
    return (
        <main className={body.body}>
            <Cursor />
            <Particle />
            <Intro />
        </main>
    )
}
