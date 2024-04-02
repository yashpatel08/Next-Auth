'use client';
import { useRouter } from "next/navigation";
import Link from "next/link";
const Home = () => {
    const router = useRouter();

    const navigate = (page) => {
        router.push(page);
    }
    return (
        <div> 
        <h1>useRouter</h1>
        <Link href='/projects'>Projects</Link><br />
        <button onClick={() => navigate('about')}>Go to About Page</button><br /> 
        <button onClick={() => navigate('login')}>Go to Login Page</button>

        </div>
    );
}

export default Home;