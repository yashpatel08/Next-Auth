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
        <h3>For adding user, update user, delete user, search for specific user click on below link</h3>
        <button onClick={() => navigate('users')}>Click Here</button>
            
        </div>
    );
}

export default Home;